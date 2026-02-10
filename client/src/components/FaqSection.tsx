import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  description?: string;
  className?: string;
  bgColor?: string;
}

export default function FaqSection({ 
  faqs, 
  title = "Preguntas Frecuentes", 
  description,
  className = "",
  bgColor = "bg-gray-50/50"
}: FaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={cn("py-20", bgColor, className)}>
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-100 last:border-0">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
