'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { User, Upload, Loader2, RefreshCw } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface AvatarUploadProps {
  uid: string
  url: string | null
  onUpload: (url: string) => void
}

export default function AvatarUpload({ uid, url, onUpload }: AvatarUploadProps) {
  const supabase = createClient()
  const router = useRouter()
  const [uploading, setUploading] = useState(false)
  const [errorText, setErrorText] = useState('')

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true)
      setErrorText('')

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${uid}/${Math.random()}.${fileExt}`

      // 1. Upload the image to the 'avatars' bucket
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      // 2. Get the public URL 
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath)

      // 3. Update the profile with the new avatar_url
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', uid)

      if (updateError) {
        throw updateError
      }
      
      // Update User Auth metadata optionally
      await supabase.auth.updateUser({
        data: { avatar_url: publicUrl }
      })

      onUpload(publicUrl)
      // Force refresh to update the global user state for the header
      router.refresh()
    } catch (error: any) {
      setErrorText(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gray-100 overflow-hidden group">
        {url ? (
          <img
            src={url}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <User className="w-16 h-16" />
          </div>
        )}
        
        {/* Hover overlay for upload */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full text-white" htmlFor="single">
            {uploading ? <Loader2 className="w-8 h-8 animate-spin" /> : <Upload className="w-8 h-8" />}
          </label>
        </div>
        
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
      
      <div className="text-center w-full">
        {errorText && <p className="text-sm text-red-500 mb-2">{errorText}</p>}
        {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
      </div>
    </div>
  )
}
