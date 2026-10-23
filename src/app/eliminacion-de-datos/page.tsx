import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eliminación de Datos",
  description:
    "Instrucciones para solicitar la eliminación de datos personales asociados a UPF5 y UPF5 Marketing.",
  robots: { index: true, follow: true },
};

const pasos = [
  {
    numero: "01",
    titulo: "Enviar la solicitud",
    descripcion:
      "Envía un correo a contacto@upf5.com con el asunto Solicitud de eliminación de datos. Indica el servicio utilizado y los datos necesarios para localizar tu cuenta.",
  },
  {
    numero: "02",
    titulo: "Identificar la cuenta o servicio",
    descripcion:
      "Si utilizaste UPF5 Marketing, indica la empresa, cuenta o página de Facebook relacionada, cuando corresponda. No envíes contraseñas, tokens de acceso ni información confidencial innecesaria.",
  },
  {
    numero: "03",
    titulo: "Verificación de identidad",
    descripcion:
      "UPF5 podrá solicitar información adicional razonable para comprobar que eres titular de los datos o que tienes autorización para presentar la solicitud.",
  },
  {
    numero: "04",
    titulo: "Revisión y eliminación",
    descripcion:
      "La solicitud se revisará manualmente. Se eliminarán o anonimizarán los datos que corresponda suprimir, considerando las obligaciones legales de conservación aplicables. Se informará el resultado al solicitante.",
  },
];

export default function EliminacionDatosPage() {
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
          Eliminación de Datos
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Procedimiento para solicitar la eliminación de datos personales
          relacionados con UPF5 y sus servicios digitales,
          incluido UPF5 Marketing.
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

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold">
            ¿Cómo solicitar la eliminación de tus datos?
          </h2>

          <div className="space-y-5">
            {pasos.map((paso) => (
              <div
                key={paso.numero}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-600">
                    {paso.numero}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {paso.titulo}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {paso.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">
            Desconectar Facebook de UPF5 Marketing
          </h2>

          <p className="leading-7 text-slate-700">
            Si autorizaste una conexión entre Facebook y UPF5 Marketing,
            puedes revisar y retirar las autorizaciones correspondientes
            desde la sección Aplicaciones y sitios web de la configuración
            de tu cuenta de Facebook, cuando dicha opción esté disponible.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Revocar el acceso puede impedir que UPF5 Marketing continúe
            utilizando esa autorización. Sin embargo, la revocación
            no elimina necesariamente los registros almacenados
            anteriormente en nuestra plataforma.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Para solicitar también la eliminación de información
            almacenada en UPF5 Marketing, escribe a contacto@upf5.com.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">
            ¿Qué datos pueden estar relacionados con la solicitud?
          </h2>

          <p className="leading-7 text-slate-700">
            Según el servicio utilizado, la información puede incluir
            datos de usuario, datos de contacto, identificadores
            de páginas de Facebook, conexiones autorizadas,
            credenciales almacenadas de forma cifrada,
            publicaciones y registros asociados.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            UPF5 evaluará los antecedentes y eliminará o anonimizará
            la información que corresponda, de acuerdo con la
            legislación aplicable. Determinados registros podrían
            conservarse cuando exista una obligación legal o
            fundamento legítimo que lo justifique.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            La eliminación de registros en UPF5 Marketing no supone
            necesariamente la eliminación de publicaciones ya
            existentes en Facebook u otras plataformas externas,
            que mantienen sus propias herramientas y políticas.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Enviar una solicitud de eliminación
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Puedes iniciar tu solicitud escribiendo directamente
            a nuestro correo institucional.
          </p>

          <a
            href="mailto:contacto@upf5.com?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos"
            className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Solicitar eliminación de datos
          </a>

          <p className="mt-4 text-sm text-slate-600">
            Correo: contacto@upf5.com
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Las solicitudes se gestionan mediante revisión manual
            y se responden conforme a los requisitos y plazos
            previstos por la legislación aplicable.
          </p>
        </section>

        <nav className="mt-12 flex flex-wrap gap-5 border-t border-slate-200 pt-6 text-sm">
          <Link
            href="/politica-de-privacidad"
            className="font-medium text-blue-600 hover:underline"
          >
            Política de Privacidad
          </Link>

          <Link
            href="/terminos-y-condiciones"
            className="font-medium text-blue-600 hover:underline"
          >
            Términos y Condiciones
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
