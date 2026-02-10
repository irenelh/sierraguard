import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Cookies</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">
            Este sitio web utiliza cookies y/o tecnologías similares que almacenan y recuperan información cuando navegas. En general, estas tecnologías pueden servir para finalidades muy diversas, como reconocerte como usuario, obtener información sobre tus hábitos de navegación o personalizar la forma en que se muestra el contenido.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. ¿Qué son las cookies?</h3>
          <p className="mb-4">
            Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Tipos de cookies utilizadas</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan.</li>
            <li><strong>Cookies de análisis:</strong> Son aquellas que, tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. Gestión de cookies</h3>
          <p className="mb-4">
            Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
            <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad.</li>
            <li><strong>Safari:</strong> Preferencias &gt; Privacidad.</li>
            <li><strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Actualización de la Política de Cookies</h3>
          <p className="mb-4">
            Es posible que actualicemos la Política de Cookies de nuestro Sitio Web, por ello le recomendamos revisar esta política cada vez que acceda a nuestro Sitio Web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
