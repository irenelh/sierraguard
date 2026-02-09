import { Calendar, Clock, Tag, ArrowLeft, CheckCircle2, Target, AlertTriangle, ShieldCheck, Search, Coins, XCircle, AlertOctagon, Eye, Bug, MapPin } from "lucide-react";
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
      <div className="bg-gray-50 border-b border-border">
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
        {/* Schema.org JSON-LD */}
        {article.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(article.schema) }}
          />
        )}

        <div className="container max-w-3xl">
          {/* Metadata */}
          <div className="mb-8">
            {/* Imagen Principal */}
            {article.image && (
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-auto object-cover max-h-[300px]"
                />
              </div>
            )}

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
            {article.content.split('\n\n').map((block, index) => {
              // Helper para renderizar negritas
              const renderTextWithBold = (text: string) => {
                const parts = text.split(/(\*\*.*?\*\*)/g);
                return parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                });
              };

              // Tarjetas Visuales (GRID_CARDS)
              if (block.startsWith('[[GRID_CARDS]]')) {
                const content = block.replace('[[GRID_CARDS]]', '').replace('[[/GRID_CARDS]]', '').trim();
                const cards = content.split('\n').filter(line => line.trim());
                
                const iconMap: Record<string, any> = {
                  Bug, ShieldCheck, MapPin, AlertTriangle, Eye, Search, Target, CheckCircle2
                };

                return (
                  <div key={index} className="grid md:grid-cols-3 gap-6 mb-12 mt-8">
                    {cards.map((card, i) => {
                      const parts = card.split('|');
                      const title = parts[0]?.trim();
                      const desc = parts[1]?.trim();
                      const iconName = parts[2]?.trim();
                      const attributes = parts.slice(3);
                      
                      const Icon = iconMap[iconName] || Bug;

                      return (
                        <div key={i} className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                           <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                              <Icon className="w-6 h-6" />
                           </div>
                           <h3 className="text-lg font-bold text-foreground mb-3">{renderTextWithBold(title)}</h3>
                           <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{renderTextWithBold(desc)}</p>
                           
                           {attributes.length > 0 && (
                             <div className="space-y-2 pt-4 border-t border-border/50">
                               {attributes.map((attr, j) => (
                                 <div key={j} className="flex items-start gap-2 text-xs text-gray-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0"></div>
                                    <span>{renderTextWithBold(attr.trim())}</span>
                                 </div>
                               ))}
                             </div>
                           )}
                        </div>
                      );
                    })}
                  </div>
                );
              }

              // H2/H3 (## ) -> Renderizado como h3
              if (block.startsWith('## ')) {
                const parts = block.split('\n');
                const headerText = parts[0].replace('## ', '');
                const restContent = parts.slice(1).join('\n').trim();
                
                return (
                  <div key={index}>
                    <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {headerText}
                    </h3>
                    {restContent && (
                      <p className="text-foreground leading-relaxed mb-6">
                        {renderTextWithBold(restContent)}
                      </p>
                    )}
                  </div>
                );
              }
              
              // H3/H4 (### ) -> Renderizado como h4
              if (block.startsWith('### ')) {
                const parts = block.split('\n');
                const headerText = parts[0].replace('### ', '');
                const restContent = parts.slice(1).join('\n').trim();
                
                return (
                  <div key={index}>
                    <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                      {headerText}
                    </h4>
                    {restContent && (
                      <p className="text-foreground leading-relaxed mb-6">
                        {renderTextWithBold(restContent)}
                      </p>
                    )}
                  </div>
                );
              }

              // Listas no ordenadas y contenido mixto (* )
              if (block.trim().startsWith('* ') || block.includes('\n* ')) {
                const lines = block.split('\n');
                const elements: any[] = [];
                let currentList: string[] = [];
                
                const flushList = () => {
                  if (currentList.length > 0) {
                    // Detectar si es una lista de "Caso de Estudio" o Datos Clave
                    const isCaseList = currentList.some(item => 
                      item.includes('**Resultado:**') || 
                      item.includes('**Consecuencia:**') || 
                      item.includes('**Solución') ||
                      item.includes('**Diagnóstico:**') ||
                      item.includes('**Problema:**') ||
                      item.includes('**Costo') ||
                      item.includes('**Apariencia:**') ||
                      item.includes('**Comportamiento:**') ||
                      item.includes('**Ubicación:**') ||
                      item.includes('**Peligro:**') ||
                      item.includes('**Señal clave:**')
                    );

                    if (isCaseList) {
                         const isThreeCol = currentList.some(item => item.includes('**Apariencia:**') || item.includes('**Ubicación:**'));
                         
                         elements.push(
                            <div key={`case-grid-${index}-${elements.length}`} className={`grid gap-4 mb-8 ${isThreeCol ? 'md:grid-cols-3' : 'md:grid-cols-1'}`}>
                                {currentList.map((item, i) => {
                                    const cleanItem = item.replace(/^\*\s+/, '');
                                    let Icon = CheckCircle2;
                                    let colorClass = "bg-muted/30 border-border/50";
                                    let iconColor = "text-primary";
                                    
                                    if (cleanItem.includes('**Resultado:**')) {
                                        if (cleanItem.toLowerCase().includes('eliminación') || cleanItem.toLowerCase().includes('éxito') || cleanItem.toLowerCase().includes('total') || cleanItem.toLowerCase().includes('cero') || cleanItem.toLowerCase().includes('protección')) {
                                            Icon = Target;
                                            colorClass = "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800";
                                            iconColor = "text-green-600 dark:text-green-400";
                                        } else {
                                            Icon = XCircle;
                                            colorClass = "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800";
                                            iconColor = "text-red-600 dark:text-red-400";
                                        }
                                    } else if (cleanItem.includes('**Consecuencia:**')) {
                                        Icon = AlertOctagon;
                                        colorClass = "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800";
                                        iconColor = "text-orange-600 dark:text-orange-400";
                                    } else if (cleanItem.includes('**Problema:**') || cleanItem.includes('**Peligro:**')) {
                                        Icon = AlertTriangle;
                                        colorClass = "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800";
                                        iconColor = "text-red-600 dark:text-red-400";
                                    } else if (cleanItem.includes('**Solución')) {
                                        Icon = ShieldCheck;
                                        colorClass = "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800";
                                        iconColor = "text-blue-600 dark:text-blue-400";
                                    } else if (cleanItem.includes('**Costo')) {
                                        Icon = Coins;
                                        colorClass = "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800";
                                        iconColor = "text-yellow-600 dark:text-yellow-400";
                                    } else if (cleanItem.includes('**Tiempo:**')) {
                                        Icon = Clock;
                                    } else if (cleanItem.includes('**Diagnóstico:**') || cleanItem.includes('**Señal clave:**')) {
                                        Icon = Search;
                                        colorClass = "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800";
                                        iconColor = "text-purple-600 dark:text-purple-400";
                                    } else if (cleanItem.includes('**Apariencia:**')) {
                                        Icon = Eye;
                                        colorClass = "bg-sky-50 border-sky-200 dark:bg-sky-900/20 dark:border-sky-800";
                                        iconColor = "text-sky-600 dark:text-sky-400";
                                    } else if (cleanItem.includes('**Comportamiento:**')) {
                                        Icon = Bug;
                                        colorClass = "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800";
                                        iconColor = "text-amber-600 dark:text-amber-400";
                                    } else if (cleanItem.includes('**Ubicación:**')) {
                                        Icon = MapPin;
                                        colorClass = "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800";
                                        iconColor = "text-emerald-600 dark:text-emerald-400";
                                    }

                                    return (
                                        <div key={i} className={`flex items-start gap-4 p-4 rounded-lg border ${colorClass} transition-all hover:shadow-sm`}>
                                            <div className={`p-2 rounded-full bg-white dark:bg-background shadow-sm ${iconColor} shrink-0`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="leading-relaxed block text-sm md:text-base">{renderTextWithBold(cleanItem)}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                         );
                    } else {
                        elements.push(
                          <ul key={`list-${index}-${elements.length}`} className="mb-6 space-y-3 bg-muted/30 p-4 rounded-lg border border-border/50">
                            {currentList.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="leading-relaxed">{renderTextWithBold(item.replace(/^\*\s+/, ''))}</span>
                              </li>
                            ))}
                          </ul>
                        );
                    }
                    currentList = [];
                  }
                };

                lines.forEach((line) => {
                  if (line.trim().startsWith('* ')) {
                    currentList.push(line);
                  } else {
                    flushList();
                    if (line.trim()) {
                      elements.push(
                        <p key={`p-${index}-${elements.length}`} className="text-foreground leading-relaxed mb-4">
                          {renderTextWithBold(line)}
                        </p>
                      );
                    }
                  }
                });
                flushList();
                
                return <div key={index}>{elements}</div>;
              }

              // Listas ordenadas (1. )
              if (block.trim().match(/^\d+\.\s/)) {
                 const items = block.split('\n').filter(line => line.trim().match(/^\d+\.\s/));
                 return (
                  <ol key={index} className="list-decimal pl-6 mb-6 space-y-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-foreground pl-1 leading-relaxed">
                        {renderTextWithBold(item.replace(/^\d+\.\s+/, ''))}
                      </li>
                    ))}
                  </ol>
                 );
              }

              // Tablas Markdown (| ...)
              if (block.trim().startsWith('|')) {
                const rows = block.split('\n').filter(row => row.trim());
                const headers = rows[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim());
                const alignments = rows[1].split('|').filter(cell => cell.trim()).map(cell => {
                  if (cell.includes(':-') && cell.includes('-:')) return 'text-center';
                  if (cell.includes('-:')) return 'text-right';
                  return 'text-left';
                });
                const bodyRows = rows.slice(2).map(row => row.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim()));

                return (
                  <div key={index} className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                      <thead className="bg-muted/50">
                        <tr>
                          {headers.map((header, i) => (
                            <th key={i} className={`p-4 border-b border-border font-bold text-foreground ${alignments[i] || 'text-left'}`}>
                              {renderTextWithBold(header)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {bodyRows.map((row, i) => (
                          <tr key={i} className="hover:bg-muted/20 transition-colors">
                            {row.map((cell, j) => (
                              <td key={j} className={`p-4 border-b border-border text-foreground ${alignments[j] || 'text-left'}`}>
                                {renderTextWithBold(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              // Custom CTA Button ([[CTA:url|label]] or [[CTA:url|label || url2|label2]])
              if (block.trim().startsWith('[[CTA:')) {
                const content = block.trim().replace(/^\[\[CTA:/, '').replace(/\]\]$/, '');
                const buttons = content.split('||').map(b => b.trim());
                
                return (
                  <div key={index} className="my-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    {buttons.map((buttonStr, btnIndex) => {
                      const [url, label] = buttonStr.split('|').map(s => s.trim());
                      const isExternal = url.startsWith('http') || url.startsWith('tel:') || url.startsWith('mailto:');
                      const variant = btnIndex === 0 ? "default" : "outline"; // First button primary, others outline/secondary
                      
                      const ButtonContent = () => (
                        <Button 
                          size="lg" 
                          variant={btnIndex === 0 ? "default" : "secondary"}
                          className={`${btnIndex === 0 
                            ? "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl" 
                            : "bg-white text-primary border-2 border-primary hover:bg-primary/10 shadow-md"} 
                            font-bold px-8 py-6 text-lg transition-all transform hover:-translate-y-1`}
                        >
                          {label}
                        </Button>
                      );

                      if (isExternal) {
                        return (
                          <a key={btnIndex} href={url} target={url.startsWith('http') ? "_blank" : undefined} rel={url.startsWith('http') ? "noopener noreferrer" : undefined}>
                            <ButtonContent />
                          </a>
                        );
                      } else {
                        return (
                          <Link key={btnIndex} href={url}>
                            <ButtonContent />
                          </Link>
                        );
                      }
                    })}
                  </div>
                );
              }

              // Párrafo normal
              return (
                <p key={index} className="text-foreground leading-relaxed mb-6">
                  {renderTextWithBold(block)}
                </p>
              );
            })}
          </div>

          {/* FAQs Section */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Preguntas Frecuentes</h2>
              <div className="space-y-6">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-foreground mb-3">{faq.pregunta}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.respuesta}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags - ELIMINADO */}
          
          {/* CTA */}
          <div className="bg-primary/10 p-8 rounded-lg mb-12 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tienes un problema de plagas?
            </h3>
            <p className="text-foreground mb-6">
              Contacta con Sierra Guard para una consulta gratis. Nuestros técnicos certificados están disponibles 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+34921234567" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition">
                Llamar Ahora
              </a>
              <Link href="/calculadora" className="inline-block bg-white border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 px-6 rounded-lg transition text-center">
                Calculadora de Presupuesto
              </Link>
            </div>
          </div>

          {/* Secondary CTA - All Services */}
          <div className="text-center mb-12 pb-12 border-b border-border">
             <p className="text-muted-foreground mb-4">
               ¿Buscas soluciones para otra plaga?
             </p>
             <a 
               href="/#servicios" 
               className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary/20 text-foreground text-lg font-bold rounded-full shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300 group"
             >
               Ver todos nuestros servicios
               <span className="bg-primary/10 p-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                 <ArrowLeft size={20} className="rotate-180" />
               </span>
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
