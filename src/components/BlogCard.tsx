import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import type { Blog } from '../data/blogs';
import { formatBlogDate } from '../data/blogs';

type BlogCardProps = {
  blog: Blog;
  index?: number;
};

const BlogCard = ({ blog, index = 0 }: BlogCardProps) => {
  // Determine category color scheme
  const getCategoryColors = () => {
    if (blog.category?.includes('Security')) return { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' };
    if (blog.category?.includes('EU AI Act')) return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' };
    return { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' };
  };
  const catColors = getCategoryColors();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.3), ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group h-full"
    >
      <Link
        to={`/blogs/${blog.slug}`}
        className="flex flex-col h-full rounded-3xl bg-white border border-gray-100/80 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        aria-label={`Lees blog: ${blog.title}`}
      >
        {/* Cover image area */}
        <div className={`h-48 sm:h-52 ${blog.cover.gradientClassName} relative overflow-hidden`}>
          {blog.cover.image ? (
            <img
              src={blog.cover.image}
              alt={blog.cover.imageAlt || blog.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen size={48} className="text-white/30" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-primary/25 rounded-full blur-3xl" />
          </div>
          
          {/* Category badge on image */}
          {blog.category && (
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center px-3 py-1.5 rounded-full ${catColors.bg} ${catColors.text} ${catColors.border} border text-xs font-bold backdrop-blur-sm shadow-sm`}>
                {blog.category}
              </span>
            </div>
          )}
          
          {/* Reading time badge */}
          <div className="absolute bottom-4 right-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-secondary shadow-sm">
              <Clock size={12} />
              {blog.readingTimeMinutes} min
            </span>
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-col flex-grow p-6">
          {/* Date */}
          <div className="text-xs font-medium text-gray-400 mb-3">
            {formatBlogDate(blog.publishedAt)}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-secondary leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3 flex-grow">
            {blog.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                {blog.author.name.charAt(0)}
              </div>
              <div className="text-xs text-gray-500">
                {blog.author.name}
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-200">
              Lezen
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
