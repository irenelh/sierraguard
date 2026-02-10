import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Aviso Legal</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web informa de lo siguiente:
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Identidad del Responsable</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Titular:</strong> Sierra Guard Control de Plagas</li>
            <li><strong>Domicilio:</strong> Segovia, España</li>
            <li><strong>Email:</strong> contacto@controldeplagassegovia.com</li>
            <li><strong>Actividad:</strong> Servicios de control de plagas, desinsectación, desratización y desinfección.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Objeto</h3>
          <p className="mb-4">
            El presente Aviso Legal regula el acceso y el uso del sitio web de Sierra Guard Control de Plagas (en adelante, "el Sitio Web"). Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. Propiedad Intelectual e Industrial</h3>
          <p className="mb-4">
            El Sitio Web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad del Responsable o, si es el caso, dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del Sitio Web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Exención de Responsabilidades</h3>
          <p className="mb-4">
            El Responsable se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
          </p>
          <p className="mb-4">
            Desde el sitio web es posible que se redirija a contenidos de terceros sitios web. Dado que el Responsable no puede controlar siempre los contenidos introducidos por los terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. Ley Aplicable y Jurisdicción</h3>
          <p className="mb-4">
            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Segovia.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
