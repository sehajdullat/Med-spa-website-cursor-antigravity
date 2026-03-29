import { getPostBySlug, BLOG_POSTS } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | TranquilGlow Blog`,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.date));

  // Find 3 related posts (same category, different slug)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3);

  // If not enough in category, just grab some latest
  if (relatedPosts.length < 3) {
    const more = BLOG_POSTS.filter((p) => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...more);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [post.coverImage],
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "TranquilGlow Med Spa",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png"
      }
    },
    description: post.excerpt,
  };

  return (
    <article className="bg-white min-h-screen pb-20 pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
          <Link href="/blog" className="hover:text-[var(--color-primary)]">Blog</Link>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
          <span className="text-gray-900 font-medium truncate">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12 text-center">
          <Link 
            href={`/blog?category=${encodeURIComponent(post.category)}`}
            className="inline-block bg-gray-100 text-[var(--color-primary)] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 hover:bg-gray-200 transition-colors"
          >
            {post.category}
          </Link>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="font-medium text-gray-900 leading-tight">{post.author.name}</p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Image */}
      <div className="w-full max-w-5xl mx-auto px-4 mb-16">
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-xl">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Main Content Area */}
          <div className="flex-1 lg:max-w-3xl">
            <div className="prose prose-lg prose-headings:font-heading prose-a:text-[var(--color-primary)] max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-gray-900 mr-2">Tags:</span>
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-md">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-heading text-2xl mb-1">{post.author.name}</h3>
                <p className="text-[var(--color-primary)] font-medium mb-3">{post.author.role}</p>
                <p className="text-gray-600">
                  {post.author.bio || "Adding expertise and insight to the TranquilGlow medical spa blog."}
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar (Table of Contents / Call to Action) */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-heading text-xl mb-4">In This Article</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Introduction</a></li>
                  <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">The Core Principles</a></li>
                  <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">What to Expect</a></li>
                  <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Clinical Evidence</a></li>
                  <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Conclusion</a></li>
                </ul>
              </div>

              <div className="bg-[var(--color-primary)] text-white p-6 rounded-2xl mt-8">
                <h3 className="font-heading text-xl mb-2">Ready for your glow up?</h3>
                <p className="text-sm text-white/80 mb-6">
                  Book a free consultation with our medical experts today.
                </p>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                  className="w-full bg-white text-[var(--color-primary)] hover:bg-gray-100 px-4 py-3 rounded-lg font-bold transition-colors"
                >
                  Book Free Consult
                </button>
              </div>

            </div>
          </aside>
          
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900">Read Next</h2>
            <Link href="/blog" className="hidden sm:flex items-center text-[var(--color-primary)] font-medium hover:underline">
              View all posts <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <BlogCard key={rp.slug} post={rp} />
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <Link href="/blog" className="inline-flex items-center text-[var(--color-primary)] font-medium hover:underline">
              View all posts <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>

    </article>
  );
}
