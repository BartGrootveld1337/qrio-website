import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { BLOG_CATEGORY_LIST, getAllBlogs } from '../data/blogs';

const Blogs = () => {
  const blogs = useMemo(() => getAllBlogs(), []);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Alle');

  const categories = useMemo(() => ['Alle', ...BLOG_CATEGORY_LIST], []);

  // Count blogs per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'Alle': blogs.length };
    for (const cat of BLOG_CATEGORY_LIST) {
      counts[cat] = blogs.filter(b => b.category === cat).length;
    }
    return counts;
  }, [blogs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogs.filter((b) => {
      const matchesQuery =
        q.length === 0 ||
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q));

      const matchesCategory = activeCategory === 'Alle' || b.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [blogs, query, activeCategory]);

  return (
    <div className="min-h-screen bg-background font-sans text-secondary selection:bg-primary/20 selection:text-primary flex flex-col">
      <SEO
        title="Blogs"
        description="Praktische inzichten over AI-adoptie, AI-geletterdheid, beleid en compliance (EU AI Act)."
        canonical="/blogs"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Qrio Blogs',
          url: 'https://www.qrioapp.nl/blogs',
        }}
      />
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-36 pb-14 bg-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-20 w-[520px] h-[520px] bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-28 -left-24 w-[620px] h-[620px] bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm font-semibold mb-5">
                    <Sparkles size={16} className="text-primary" />
                    Inzichten & updates
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Blogs over <span className="text-primary">AI in de praktijk</span>.
                  </h1>
                  <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl">
                    Handige artikelen over AI-geletterdheid, beleid, risico’s en de EU AI Act — zodat jouw team veilig én effectief met AI werkt.
                  </p>
                </motion.div>
              </div>

              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-3">
                    <Search size={16} className="text-primary" />
                    Zoek in blogs
                  </div>
                  <div className="relative">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Zoek op onderwerp of keyword…"
                      className="w-full px-4 py-3 rounded-xl bg-white text-secondary placeholder:text-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div className="mt-3 text-xs text-gray-300">
                    Binnenkort meer: we voegen de komende tijd 14+ artikelen toe.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category filter with counts */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {categories.map((category) => {
                const active = category === activeCategory;
                const count = categoryCounts[category] || 0;
                
                // Category-specific styling
                let colorClasses = 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200';
                if (active) {
                  if (category.includes('Security')) colorClasses = 'bg-rose-500 text-white border-rose-500';
                  else if (category.includes('EU AI Act')) colorClasses = 'bg-blue-500 text-white border-blue-500';
                  else if (category.includes('Productiviteit')) colorClasses = 'bg-emerald-500 text-white border-emerald-500';
                  else colorClasses = 'bg-secondary text-white border-secondary';
                } else if (category !== 'Alle') {
                  if (category.includes('Security')) colorClasses = 'bg-white text-rose-600 border-rose-200 hover:bg-rose-50 hover:border-rose-300';
                  else if (category.includes('EU AI Act')) colorClasses = 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300';
                  else if (category.includes('Productiviteit')) colorClasses = 'bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300';
                } else {
                  colorClasses = active ? 'bg-secondary text-white border-secondary' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300';
                }
                
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`group px-4 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 flex items-center gap-2 ${colorClasses} ${active ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}`}
                  >
                    {category}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${active ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search size={28} className="text-gray-400" />
                </div>
                <div className="text-2xl font-bold text-secondary">Geen resultaten gevonden</div>
                <p className="mt-3 text-gray-500 max-w-md mx-auto">Probeer een andere zoekterm of selecteer een andere categorie.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setActiveCategory('Alle');
                  }}
                  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                  Reset alle filters
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((blog, i) => (
                  <BlogCard key={blog.slug} blog={blog} index={i} />
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-secondary via-secondary to-[#0a0f1a] rounded-3xl p-10 md:p-14 overflow-hidden relative"
              >
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/30 rounded-full blur-[100px]" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

                <div className="relative grid md:grid-cols-12 gap-10 items-center">
                  <div className="md:col-span-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white mb-4">
                      <Sparkles size={14} className="text-primary" />
                      Start vandaag nog
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      Wil je AI-geletterdheid & compliance direct goed regelen?
                    </h2>
                    <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-xl">
                      We laten je graag zien hoe Qrio jouw organisatie helpt met training, toetsing en aantoonbaarheid.
                    </p>
                  </div>
                  <div className="md:col-span-4 md:text-right">
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-lg"
                    >
                      Vraag offerte aan
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
