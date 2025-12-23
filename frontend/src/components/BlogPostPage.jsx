import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { blogContent } from '../data/mock';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogContent.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen pt-24 lg:pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-light text-neutral-900 mb-4">
            Post not found
          </h1>
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Writing
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Writing
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-light tracking-tight text-neutral-900 mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-neutral-500 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Post Content Placeholder */}
        <div className="prose prose-neutral max-w-none">
          <div className="bg-neutral-50 rounded-2xl p-8 lg:p-12 text-center">
            <p className="text-neutral-500 mb-4">
              [REPLACE: This is where your full blog post content would go.]
            </p>
            <p className="text-sm text-neutral-400">
              To add real content, you'll need to:
            </p>
            <ol className="text-sm text-neutral-400 mt-4 space-y-2 text-left max-w-md mx-auto">
              <li>1. Store full post content in your mock.js or database</li>
              <li>2. Create a rich text editor or markdown renderer</li>
              <li>3. Display the content here with proper formatting</li>
            </ol>
          </div>
        </div>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-neutral-100">
          <div className="flex items-center justify-between">
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Posts
              </Link>
            </Button>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default BlogPostPage;
