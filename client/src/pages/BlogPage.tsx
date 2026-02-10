import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles, getAllBlogCategories } from "@/lib/blogData";
import { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllBlogCategories();
  
  const filteredArticles = selectedCategory
    ? blogArticles.filter(article => article.category === selectedCategory)
    : blogArticles;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* ===== HERO SECTION (Premium Dark) ===== */}
      <section className="relative pt-20 pb-20 lg:pt-24 lg:pb-24 overflow-hidden bg-slate-900">
        {/* Background Gradient & Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Blog & Actualidad
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Consejos de Expertos en <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Control de Plagas
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Guías prácticas, noticias del sector y consejos profesionales para mantener tu hogar y negocio libre de plagas en Segovia.
          </p>
        </div>
      </section>

      {/* ===== CATEGORÍAS ===== */}
      <section className="sticky top-0 z-30 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === null
                    ? "bg-slate-900 text-white shadow-md transform scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-slate-900"
                }`}
              >
                Todos
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-slate-900 text-white shadow-md transform scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTÍCULOS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                {article.image && (
                  <Link href={`/blog/${article.slug}`}>
                    <div className="w-full h-56 overflow-hidden cursor-pointer relative">
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                       <img 
                         src={article.image} 
                         alt={article.title} 
                         loading="lazy"
                         referrerPolicy="no-referrer"
                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                       />
                       <div className="absolute top-4 right-4 z-20">
                         <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 rounded-full text-xs font-bold shadow-sm">
                           {article.category}
                         </span>
                       </div>
                     </div>
                  </Link>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-emerald-500" />
                      <span>{new Date(article.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-emerald-500" />
                      <span>{article.readTime} min</span>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${article.slug}`}>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-emerald-600 transition-colors cursor-pointer leading-snug">
                      {article.title}
                    </h2>
                  </Link>
                  
                  <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs font-medium text-slate-500 bg-gray-100 px-2 py-1 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <span className="text-emerald-600 hover:text-emerald-700 font-bold text-sm cursor-pointer flex items-center gap-1 group-hover:gap-2 transition-all">
                        Leer artículo <Clock size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
