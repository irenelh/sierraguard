import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogArticle, blogArticles } from "@/lib/blogData";
import { Button } from "@/components/ui/button";

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getBlogArticle(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Artículo no encontrado</h1>
          <p className="text-muted-foreground mb-8">El artículo que buscas no existe.</p>
          <Link href="/blog">
            <Button className="bg-primary hover:bg-primary/90">Volver al Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Artículos relacionados
  const relatedArticles = blogArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== BREADCRUMBS ===== */}
      <div className="bg-gray-50 border-b border-border pt-24">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Inicio</a>
            <span>/</span>
            <a href="/blog" className="hover:text-primary">Blog</a>
            <span>/</span>
            <span className="text-foreground font-medium">{article.title}</span>
          </div>
        </div>
      </div>

      {/* ===== ARTÍCULO ===== */}
      <article className="py-16">
        <div className="container max-w-3xl">
          {/* Metadata */}
          <div className="mb-8">
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

            <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Contenido */}
          <div className="prose prose-lg max-w-none mb-12">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-border">
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-foreground rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/10 p-8 rounded-lg mb-12 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tienes un problema de plagas?
            </h3>
            <p className="text-foreground mb-6">
              Contacta con Sierra Guard para una consulta gratis. Nuestros técnicos certificados están disponibles 24/7.
            </p>
            <a href="tel:+34921234567" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition">
              Llamar Ahora
            </a>
          </div>

          {/* Artículos relacionados */}
          {relatedArticles.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Artículos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map(relatedArticle => (
                  <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                    <div className="border border-border rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
                      <div className="text-sm text-muted-foreground mb-2">
                        {new Date(relatedArticle.date).toLocaleDateString('es-ES')}
                      </div>
                      <h3 className="font-bold text-foreground mb-3 line-clamp-2 hover:text-primary transition">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <span className="text-primary font-semibold text-sm">Leer más →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
