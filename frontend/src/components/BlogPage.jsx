import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogContent } from '../data/mock';

const BlogPage = () => {
  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-3">
            Archive
          </p>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 mb-6">
            {blogContent.title}
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed">
            {blogContent.subtitle}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogContent.posts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-medium text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <time className="text-xs text-neutral-400">{post.date}</time>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group/link"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
            </TiltCard>
          ))}
        </div>

        {/* Add More Posts Hint */}
        <div className="mt-16 p-8 border-2 border-dashed border-neutral-200 rounded-2xl text-center">
          <p className="text-neutral-400 text-sm">
            [To add more blog posts, edit the <code className="bg-neutral-100 px-2 py-0.5 rounded">mock.js</code> file]
          </p>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
