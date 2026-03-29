import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  // Format the date (e.g. "March 12, 2024")
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <article 
      className={cn(
        "group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300",
        featured ? "md:flex-row md:items-center" : ""
      )}
    >
      <Link 
        href={`/blog/${post.slug}`} 
        className={cn(
          "relative block overflow-hidden bg-gray-50",
          featured ? "w-full md:w-1/2 aspect-video md:aspect-auto md:h-full min-h-[300px]" : "w-full aspect-video"
        )}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          priority={featured}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur text-[var(--color-primary)] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>
      
      <div className={cn(
        "flex-1 flex flex-col p-6",
        featured ? "md:p-10 lg:p-12 md:w-1/2 justify-center" : ""
      )}>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} className="group-hover:text-[var(--color-primary)] transition-colors">
          <h2 className={cn(
            "font-heading mb-3",
            featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl line-clamp-2"
          )}>
            {post.title}
          </h2>
        </Link>
        
        <p className={cn(
          "text-gray-600 mb-6 flex-1",
          featured ? "text-lg md:mb-8" : "line-clamp-3 text-sm md:text-base"
        )}>
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
              <Image 
                src={post.author.avatar} 
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 group-hover:bg-[var(--color-primary)] text-gray-400 group-hover:text-white transition-colors"
            aria-label={`Read ${post.title}`}
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
