import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de Privacidad de UPF5: tratamiento de datos personales, servicios digitales e integración con Meta.",
  robots: { index: true, follow: true },
};

const secciones = [
  {
    titulo: "1. Identificación del responsable",
    parrafos: [
      "UPF5 es el nombre comercial bajo el cual Luis Sepúlveda Castro, persona natural domiciliada en Chile, ofrece servicios de desarrollo de software, soluciones tecnológicas y plataformas digitales.",
      "Para consultas relacionadas con privacidad y protección de datos personales, puedes comunicarte mediante el correo contacto@upf5.com.",
    ],
  },
  {
    titulo: "2. Información que tratamos",
    parrafos: [
      "Dependiendo del servicio utilizado, podemos tratar información de identificación y contacto, datos de usuarios, información de empresas clientes y antecedentes necesarios para prestar los servicios contratados.",
      "En UPF5 Marketing podemos tratar identificadores de cuentas y páginas conectadas, nombres de páginas, información de publicaciones, estados de autorización y credenciales de acceso proporcionadas mediante los mecanismos oficiales de las plataformas integradas.",
    ],
  },
  {
    titulo: "3. Finalidades del tratamiento",
    parrafos: [
      "La información se utiliza para prestar los servicios solicitados, administrar usuarios y empresas, gestionar integraciones autorizadas, crear y programar publicaciones, brindar soporte técnico y mantener la seguridad del sistema.",
      "Cuando corresponde, también se utiliza para atender solicitudes de los usuarios, gestionar incidencias y cumplir obligaciones legales aplicables.",
    ],
  },
  {
    titulo: "4. Integración con Facebook y Meta",
    parrafos: [
      "UPF5 Marketing permite conectar páginas de Facebook mediante los mecanismos oficiales de autorización de Meta.",
      "La plataforma utiliza los permisos autorizados para realizar las funcionalidades solicitadas por el cliente, como administrar publicaciones en las páginas correspondientes.",
      "El usuario puede retirar los permisos de acceso desde las configuraciones de Facebook. Revocar estos permisos impide continuar utilizando esa autorización, pero no significa necesariamente que se eliminen automáticamente todos los registros previamente almacenados.",
    ],
  },
  {
    titulo: "5. Seguridad de la información",
    parrafos: [
      "UPF5 Marketing incorpora mecanismos técnicos para proteger las credenciales de conexión con redes sociales, incluyendo el cifrado de credenciales almacenadas en su base de datos.",
      "El acceso a la información se organiza mediante cuentas de usuario y asociaciones empresariales. Ningún sistema puede garantizar una seguridad absoluta frente a todos los riesgos.",
    ],
  },
  {
    titulo: "6. Proveedores e integraciones",
    parrafos: [
      "Para prestar determinados servicios podemos utilizar proveedores de infraestructura tecnológica, alojamiento web, herramientas de inteligencia artificial y plataformas de redes sociales, incluyendo Meta cuando el cliente autoriza una conexión.",
      "El tratamiento realizado por proveedores externos también está sujeto a sus respectivas políticas y condiciones aplicables.",
    ],
  },
  {
    titulo: "7. Conservación de los datos",
    parrafos: [
      "Conservamos información durante el tiempo necesario para las finalidades asociadas al servicio, atendiendo las obligaciones legales y contractuales aplicables.",
      "Cuando una conexión social se elimina, determinados registros de publicaciones pueden conservarse en la plataforma. Las solicitudes de eliminación se revisan individualmente para determinar los datos que corresponde suprimir.",
    ],
  },
  {
    titulo: "8. Derechos de las personas",
    parrafos: [
      "Las personas pueden ejercer los derechos reconocidos por la legislación chilena aplicable en materia de protección de datos personales, incluyendo acceso, rectificación, eliminación y oposición cuando corresponda.",
      "Para presentar una solicitud, pueden escribir a contacto@upf5.com indicando el derecho que desean ejercer y la información necesaria para identificar el servicio correspondiente.",
      "UPF5 podrá solicitar verificaciones razonables de identidad o autorización cuando sean necesarias para proteger la información de terceros.",
    ],
  },
  {
    titulo: "9. Solicitudes de eliminación de datos",
    parrafos: [
      "Las solicitudes de eliminación de datos personales pueden enviarse a contacto@upf5.com.",
      "Cada solicitud será revisada y gestionada manualmente, considerando la información almacenada, la identidad o autorización del solicitante y las obligaciones legales aplicables.",
      "Puedes consultar las instrucciones detalladas en nuestra página de Eliminación de Datos.",
    ],
  },
  {
    titulo: "10. Actualizaciones de esta política",
    parrafos: [
      "Esta política puede actualizarse cuando cambien los servicios, las prácticas de tratamiento de información o las obligaciones legales aplicables.",
      "La versión vigente estará disponible en el sitio web oficial de UPF5.",
    ],
  },
];

export default function PoliticaPrivacidadPage() {
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
          Política de Privacidad
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Información sobre el tratamiento de datos personales en UPF5,
          sus servicios tecnológicos y UPF5 Marketing.
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
              {seccion.titulo.startsWith("9.") && (
                <Link
                  href="/eliminacion-de-datos"
                  className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline"
                >
                  Consultar instrucciones de eliminación de datos →
                </Link>
              )}
            </section>
          ))}
        </div>

        <nav className="mt-12 flex flex-wrap gap-5 border-t border-slate-200 pt-6 text-sm">
          <Link
            href="/terminos-y-condiciones"
            className="font-medium text-blue-600 hover:underline"
          >
            Términos y Condiciones
          </Link>
          <Link
            href="/eliminacion-de-datos"
            className="font-medium text-blue-600 hover:underline"
          >
            Eliminación de Datos
          </Link>
          <Link href="/" className="font-medium text-blue-600 hover:underline">
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
