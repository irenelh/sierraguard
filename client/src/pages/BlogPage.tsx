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
      
      {/* ===== HERO SECTION ===== */}
      <section className="py-8 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
        <div className="container max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Blog de Control de Plagas
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Consejos, guías y noticias sobre control de plagas en Segovia. Aprende cómo proteger tu hogar y negocio.
          </p>
        </div>
      </section>

      {/* ===== CATEGORÍAS ===== */}
      <section className="py-6 border-b border-border bg-gray-50/50">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Temas</span>
            <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-1.5 text-sm rounded-full font-medium transition-all duration-200 border ${
                  selectedCategory === null
                    ? "bg-primary text-white border-primary shadow-md transform scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary/50 hover:text-primary hover:bg-white"
                }`}
              >
                Todos
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 text-sm rounded-full font-medium transition-all duration-200 border ${
                    selectedCategory === category
                      ? "bg-primary text-white border-primary shadow-md transform scale-105"
                      : "bg-white text-gray-600 border-gray-200 hover:border-primary/50 hover:text-primary hover:bg-white"
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
      <section className="py-20">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <article key={article.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition">
                {article.image && (
                  <Link href={`/blog/${article.slug}`}>
                    <div className="w-full h-48 overflow-hidden cursor-pointer group">
                       <img 
                         src={article.image} 
                         alt={article.title} 
                         loading="lazy"
                         referrerPolicy="no-referrer"
                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                       />
                     </div>
                  </Link>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(article.date).toLocaleDateString('es-ES')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{article.readTime} min lectura</span>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${article.slug}`}>
                    <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition cursor-pointer">
                      {article.title}
                    </h2>
                  </Link>
                  
                  <p className="text-foreground text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-muted-foreground">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <span className="text-primary hover:text-primary/80 font-semibold cursor-pointer">
                        Leer más →
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
