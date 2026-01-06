import { useMemo, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Tag, Share2, Calendar, ChevronRight, Lightbulb, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { formatBlogDate, getBlogBySlug, getAllBlogs, BLOG_CATEGORIES } from '../data/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blog = useMemo(() => {
    if (!slug) return undefined;
    return getBlogBySlug(slug);
  }, [slug]);

  // Get related blogs from same category
  const relatedBlogs = useMemo(() => {
    if (!blog) return [];
    return getAllBlogs()
      .filter(b => b.slug !== blog.slug && b.category === blog.category)
      .slice(0, 2);
  }, [blog]);
  if (!blog) {
    return (
      <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
        <SEO
          title="Blog niet gevonden"
          description="Deze blog bestaat niet (meer)."
          canonical={slug ? `/blogs/${slug}` : '/blogs'}
        />
        <Navbar />
        <main className="flex-grow pt-36 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-sm"
            >
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <AlertCircle size={40} className="text-gray-400" />
              </div>
              <h1 className="text-3xl font-bold">Blog niet gevonden</h1>
              <p className="mt-4 text-gray-600 text-lg">Dit artikel bestaat niet (meer) of is verplaatst.</p>
              <Link
                to="/blogs"
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <ArrowLeft size={18} />
                Terug naar alle blogs
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    ...(blog.cover.image ? { image: `https://www.qrioapp.nl${blog.cover.image}` } : {}),
    author: {
      '@type': 'Person',
      name: blog.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Qrio',
      url: 'https://www.qrioapp.nl',
    },
    mainEntityOfPage: `https://www.qrioapp.nl/blogs/${blog.slug}`,
  };

  // Category color scheme
  const getCategoryColors = () => {
    if (blog.category === BLOG_CATEGORIES.SECURITY_RISK) return { bg: 'bg-rose-500', text: 'text-rose-600', light: 'bg-rose-50' };
    if (blog.category === BLOG_CATEGORIES.EU_AI_ACT_COMPLIANCE) return { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50' };
    return { bg: 'bg-emerald-500', text: 'text-emerald-600', light: 'bg-emerald-50' };
  };
  const catColors = getCategoryColors();

  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/50 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-purple-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <SEO
        title={blog.title}
        description={blog.excerpt}
        canonical={`/blogs/${blog.slug}`}
        type="article"
        image={blog.cover.image || undefined}
        keywords={blog.tags.join(', ')}
        schema={schema}
      />
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-secondary to-[#0a0f1a] text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[120px]" />
            <div className="absolute -bottom-40 right-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Alle artikelen
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8"
            >
              {/* Category + meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {blog.category && (
                  <span className={`inline-flex items-center px-4 py-1.5 rounded-full ${catColors.bg} text-white text-sm font-bold shadow-lg`}>
                    {blog.category}
                  </span>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} />
                    {formatBlogDate(blog.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} />
                    {blog.readingTimeMinutes} min leestijd
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">
                {blog.title}
              </h1>

              {/* Excerpt */}
              <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-3xl">
                {blog.excerpt}
              </p>

              {/* Author + share */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                    {blog.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{blog.author.name}</div>
                    {blog.author.role && <div className="text-sm text-gray-400">{blog.author.role}</div>}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => navigator.share?.({ title: blog.title, url: window.location.href })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors"
                >
                  <Share2 size={16} />
                  Delen
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tags bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                >
                  <Tag size={12} className="text-primary" />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Main article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden"
            >
              {/* Cover image */}
              {blog.cover.image && (
                <div className="aspect-[16/7] overflow-hidden">
                  <img
                    src={blog.cover.image}
                    alt={blog.cover.imageAlt || blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-8 md:p-12 lg:p-14">
                {/* Article content with improved typography */}
                <div className="prose prose-lg prose-gray max-w-none">
                  {blog.sections.map((section, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="mb-12 last:mb-0"
                    >
                      {section.heading && (
                        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-5 flex items-start gap-3">
                          <span className={`w-1.5 h-8 ${catColors.bg} rounded-full flex-shrink-0 mt-1`} />
                          {section.heading}
                        </h2>
                      )}

                      {section.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx} className="text-gray-700 leading-[1.85] text-lg mb-4 last:mb-0">
                          {p}
                        </p>
                      ))}

                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="mt-4 space-y-3">
                          {section.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                              <CheckCircle2 size={20} className={`${catColors.text} flex-shrink-0 mt-0.5`} />
                              <span className="text-lg">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.note && (
                        <div className={`mt-6 rounded-2xl ${catColors.light} border border-current/10 p-6 flex gap-4`}>
                          <Lightbulb size={24} className={`${catColors.text} flex-shrink-0`} />
                          <div>
                            <span className={`font-bold ${catColors.text}`}>Tip:</span>
                            <span className="text-gray-700 ml-2">{section.note}</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Related articles */}
            {relatedBlogs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold text-secondary mb-6">Gerelateerde artikelen</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedBlogs.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/blogs/${related.slug}`}
                      className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all"
                    >
                      <div className="text-xs font-medium text-gray-400 mb-2">{formatBlogDate(related.publishedAt)}</div>
                      <h4 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Lees meer
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <div className="bg-gradient-to-br from-secondary via-secondary to-[#0a0f1a] rounded-3xl p-10 md:p-12 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/30 rounded-full blur-[100px]" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />

                <div className="relative text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Klaar om AI veilig te laten landen in je organisatie?
                  </h3>
                  <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
                    Vraag een offerte aan en ontdek hoe Qrio training, toetsing en rapportage combineert.
                  </p>
                  <a
                    href="/#contact"
                    className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-lg"
                  >
                    Vraag offerte aan
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
