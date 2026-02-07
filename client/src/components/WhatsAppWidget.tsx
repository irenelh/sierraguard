import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const whatsappNumber = "34921234567"; // Número de WhatsApp sin + ni espacios
  const whatsappMessage = "Hola Sierra Guard, necesito ayuda con un problema de plagas";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-pulse"
      title="Contactar por WhatsApp"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
