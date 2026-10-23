import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Condiciones de uso de UPF5 y sus servicios tecnológicos, incluido UPF5 Marketing.",
  robots: { index: true, follow: true },
};

const secciones = [
  {
    titulo: "1. Identificación del prestador",
    parrafos: [
      "UPF5 es el nombre comercial utilizado por Luis Sepúlveda Castro, persona natural que presta servicios tecnológicos desde Chile.",
      "Para consultas relacionadas con nuestros servicios y estas condiciones, puedes escribir a contacto@upf5.com.",
    ],
  },
  {
    titulo: "2. Alcance de estas condiciones",
    parrafos: [
      "Estos términos regulan el uso general del sitio web www.upf5.com y de los servicios digitales ofrecidos bajo el nombre comercial UPF5.",
      "Los proyectos de desarrollo, licencias, suscripciones y servicios contratados pueden tener acuerdos comerciales específicos que complementen estas condiciones.",
    ],
  },
  {
    titulo: "3. Servicios ofrecidos",
    parrafos: [
      "UPF5 ofrece desarrollo de software, aplicaciones, sitios web, plataformas digitales, comercio electrónico e integraciones tecnológicas.",
      "UPF5 Marketing es una plataforma orientada a la gestión de actividades de marketing digital, incluyendo la preparación de contenidos y su publicación en redes sociales compatibles, de acuerdo con las funcionalidades habilitadas.",
    ],
  },
  {
    titulo: "4. Cuentas y acceso",
    parrafos: [
      "Los usuarios deben entregar información correcta y mantener protegidas sus credenciales de acceso.",
      "Cada cliente es responsable de administrar las autorizaciones de sus usuarios y de informar oportunamente cualquier acceso no autorizado del que tenga conocimiento.",
    ],
  },
  {
    titulo: "5. Integraciones con Facebook y Meta",
    parrafos: [
      "UPF5 Marketing puede permitir la conexión de páginas de Facebook mediante los procedimientos oficiales de autorización de Meta.",
      "El usuario debe contar con los permisos y facultades necesarios para administrar las páginas y contenidos que vincule.",
      "Las integraciones están sujetas a las políticas, autorizaciones y condiciones técnicas establecidas por Meta.",
      "La creación de una publicación mediante una integración no garantiza su visibilidad, distribución, alcance o aprobación por parte de Facebook.",
    ],
  },
  {
    titulo: "6. Contenidos e inteligencia artificial",
    parrafos: [
      "Los clientes deben contar con los derechos y autorizaciones necesarios para utilizar los textos, imágenes y demás materiales que proporcionen.",
      "Los contenidos preparados con herramientas de inteligencia artificial deben revisarse antes de su publicación cuando resulte necesario para comprobar su exactitud, legalidad y adecuación al propósito previsto.",
      "Los derechos sobre desarrollos y entregables específicos se determinarán por los acuerdos contractuales aplicables.",
    ],
  },
  {
    titulo: "7. Uso permitido",
    parrafos: [
      "Los servicios no deben utilizarse para actividades ilícitas, accesos no autorizados, distribución de código malicioso, vulneración de derechos de terceros o incumplimiento de políticas de plataformas conectadas.",
      "Ante usos que comprometan la seguridad o vulneren condiciones aplicables, podrán adoptarse medidas proporcionadas y permitidas por los acuerdos correspondientes.",
    ],
  },
  {
    titulo: "8. Disponibilidad de los servicios",
    parrafos: [
      "La disponibilidad de nuestros servicios puede verse afectada por mantenimiento, incidencias técnicas, fallas de conectividad o modificaciones de proveedores externos.",
      "Las condiciones particulares de soporte, disponibilidad y continuidad se establecerán en los acuerdos que correspondan a cada servicio.",
    ],
  },
  {
    titulo: "9. Privacidad y protección de datos",
    parrafos: [
      "El tratamiento de datos personales se describe en la Política de Privacidad de UPF5.",
      "Las personas pueden presentar consultas y solicitudes sobre sus datos personales mediante contacto@upf5.com.",
      "Las solicitudes de eliminación serán evaluadas de acuerdo con la legislación aplicable y el procedimiento informado en nuestro sitio web.",
    ],
  },
  {
    titulo: "10. Legislación aplicable",
    parrafos: [
      "Estas condiciones se interpretarán de acuerdo con la legislación chilena aplicable, sin perjuicio de los derechos y normas imperativas que correspondan a los usuarios y consumidores.",
      "Las condiciones comerciales específicas podrán establecer mecanismos de resolución de controversias compatibles con la legislación vigente.",
    ],
  },
  {
    titulo: "11. Actualizaciones y contacto",
    parrafos: [
      "Estas condiciones podrán actualizarse para reflejar cambios en los servicios, sus características o las obligaciones legales aplicables.",
      "Para consultas, escribe a contacto@upf5.com.",
    ],
  },
];

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            UPF<span className="text-blue-600">5</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Documentación legal
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Términos y Condiciones
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Condiciones generales de uso del sitio web y los servicios
          tecnológicos de UPF5, incluido UPF5 Marketing.
        </p>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-600">
            <strong>Responsable:</strong> Luis Sepúlveda Castro
          </p>
          <p className="mt-2 text-sm text-slate-600">
            <strong>Nombre comercial:</strong> UPF5
          </p>
          <p className="mt-2 text-sm text-slate-600">
            <strong>País:</strong> Chile
          </p>
          <p className="mt-2 text-sm text-slate-600">
            <strong>Contacto:</strong>{" "}
            <a
              href="mailto:contacto@upf5.com"
              className="font-medium text-blue-600 hover:underline"
            >
              contacto@upf5.com
            </a>
          </p>
        </div>

        <div className="mt-10 space-y-9">
          {secciones.map((seccion) => (
            <section key={seccion.titulo}>
              <h2 className="mb-3 text-xl font-semibold">
                {seccion.titulo}
              </h2>
              <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                {seccion.parrafos.map((parrafo) => (
                  <p key={parrafo}>{parrafo}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-12 flex flex-wrap gap-5 border-t border-slate-200 pt-6 text-sm">
          <Link
            href="/politica-de-privacidad"
            className="font-medium text-blue-600 hover:underline"
          >
            Política de Privacidad
          </Link>
          <Link
            href="/eliminacion-de-datos"
            className="font-medium text-blue-600 hover:underline"
          >
            Eliminación de Datos
          </Link>
          <Link
            href="/"
            className="font-medium text-blue-600 hover:underline"
          >
            Inicio
          </Link>
        </nav>

        <footer className="mt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} UPF5. Todos los derechos reservados.
        </footer>
      </article>
    </main>
  );
}
