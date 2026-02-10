import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">
            En Sierra Guard Control de Plagas estamos comprometidos con la protección de la privacidad y el uso correcto de los datos personales que tratamos y que nos facilites. Por ello, la presente política tiene como objeto informar sobre el tratamiento de datos de carácter personal que efectuamos en este sitio web.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Responsable del Tratamiento</h3>
          <p className="mb-4">
            Los datos personales recabados a través de este sitio web serán responsabilidad de Sierra Guard Control de Plagas, con domicilio en Segovia, España, y email de contacto contacto@controldeplagassegovia.com.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Finalidad del Tratamiento</h3>
          <p className="mb-4">
            Tratamos la información que nos facilitan las personas interesadas con el fin de gestionar el envío de la información que nos soliciten, facilitar presupuestos y mantener el contacto profesional.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Formularios de contacto:</strong> Atender las consultas o solicitudes de información.</li>
            <li><strong>Calculadora de presupuestos:</strong> Elaborar estimaciones de costes para los servicios solicitados.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. Legitimación</h3>
          <p className="mb-4">
            La base legal para el tratamiento de sus datos es el consentimiento del interesado al rellenar y enviar los formularios correspondientes, aceptando esta Política de Privacidad.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Destinatarios</h3>
          <p className="mb-4">
            Los datos no se comunicarán a terceros, salvo obligación legal. No se prevén transferencias internacionales de datos.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. Derechos</h3>
          <p className="mb-4">
            Cualquier persona tiene derecho a obtener confirmación sobre si en Sierra Guard estamos tratando datos personales que les conciernan, o no.
          </p>
          <p className="mb-4">
            Las personas interesadas tienen derecho a:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Acceder a sus datos personales.</li>
            <li>Rectificar los datos inexactos.</li>
            <li>Solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios.</li>
            <li>Oponerse al tratamiento.</li>
            <li>Solicitar la limitación del tratamiento.</li>
          </ul>
          <p className="mb-4">
            Para ejercer estos derechos, puede enviar un correo electrónico a contacto@controldeplagassegovia.com.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">6. Seguridad de los Datos</h3>
          <p className="mb-4">
            Hemos adoptado las medidas de índole técnica y organizativa necesarias para garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
