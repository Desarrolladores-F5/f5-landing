// app/blog/autenticacion-nextauth-jwt/page.tsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const POST = {
  title: "Autenticación moderna con NextAuth y JWT",
  slug: "autenticacion-nextauth-jwt",
  url: "https://tudominio.com/blog/autenticacion-nextauth-jwt",
  image: "https://tudominio.com/images/blog/b3.jpg",
  description:
    "Implementa login con Google/GitHub y gestiona sesiones con JWT o base de datos en Next.js. Ventajas, funcionamiento, casos de uso y buenas prácticas de seguridad.",
  datePublished: "2025-08-30", // YYYY-MM-DD (ajusta)
  dateModified: "2025-09-01",   // ajusta si corresponde
  author: "F5",
  readingTime: "6 min",
};

export const metadata: Metadata = {
  title: POST.title,
  description: POST.description,
  alternates: { canonical: `/blog/${POST.slug}` },
  openGraph: {
    type: "article",
    url: POST.url,
    title: POST.title,
    description: POST.description,
    publishedTime: POST.datePublished,
    modifiedTime: POST.dateModified,
    authors: [POST.author],
    images: [{ url: POST.image, width: 1280, height: 720, alt: "Autenticación segura con OAuth y JWT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: POST.title,
    description: POST.description,
    images: [POST.image],
  },
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      {/* === JSON-LD: BlogPosting === */}
      <Script id="ld-blogposting" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: POST.title,
          description: POST.description,
          image: POST.image,
          datePublished: POST.datePublished,
          dateModified: POST.dateModified,
          author: { "@type": "Organization", name: POST.author },
          publisher: {
            "@type": "Organization",
            name: POST.author,
            logo: { "@type": "ImageObject", url: "https://tudominio.com/icon.png" },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": POST.url },
        })}
      </Script>

      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm text-slate-600" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Inicio</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-900 font-medium" aria-current="page">{POST.title}</li>
        </ol>
      </nav>

      {/* Título + meta */}
      <header className="mb-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
          {POST.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          La autenticación es la primera línea de defensa de tu aplicación. Con <strong>NextAuth</strong> y{" "}
          <strong>JWT</strong> logramos un inicio de sesión sin fricción y, a la vez, una arquitectura segura,
          escalable y lista para integraciones corporativas.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
          <span>Por {POST.author}</span>
          <span aria-hidden="true">•</span>
          <time dateTime={POST.datePublished}>
            Publicado el{" "}
            {new Date(POST.datePublished).toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span aria-hidden="true">•</span>
          <span>{POST.readingTime} de lectura</span>
        </div>
      </header>

      {/* Imagen destacada */}
      <Image
        src="/images/blog/b3.jpg"
        alt="Autenticación segura con OAuth y JWT"
        width={1280}
        height={720}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
        className="rounded-2xl mb-10 object-cover border"
      />

      {/* TOC */}
      <aside className="mb-10 rounded-2xl border bg-slate-50 p-5" aria-labelledby="tabla-contenidos">
        <h2 id="tabla-contenidos" className="text-lg font-semibold text-slate-900">
          Tabla de contenidos
        </h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li><a className="hover:underline" href="#beneficios">¿Qué gana tu empresa?</a></li>
          <li><a className="hover:underline" href="#funcionamiento">Cómo funciona (rápido)</a></li>
          <li><a className="hover:underline" href="#opciones">Opciones de inicio de sesión</a></li>
          <li><a className="hover:underline" href="#jwt-vs-db">JWT vs Sesiones en BD</a></li>
          <li><a className="hover:underline" href="#buenas-practicas">Buenas prácticas</a></li>
          <li><a className="hover:underline" href="#casos">Casos de uso</a></li>
          <li><a className="hover:underline" href="#cierre">¿Listo para login en 1 clic?</a></li>
        </ul>
      </aside>

      {/* Contenido */}
      <div
        className={[
          "prose prose-slate md:prose-lg max-w-none",
          "prose-headings:scroll-mt-24",
          "prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:font-bold prose-h2:tracking-tight",
          "prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-semibold prose-h3:tracking-tight",
          "prose-p:leading-7 md:prose-p:leading-8",
          "prose-p:text-justify prose-li:text-justify prose-blockquote:text-justify",
        ].join(" ")}
      >
        {/* Beneficios */}
        <section id="beneficios" className="pt-12 mt-12 border-t border-slate-200" aria-labelledby="beneficios-title">
          <h2 id="beneficios-title">¿Qué gana tu empresa?</h2>
          <p>
            Adoptar NextAuth con sesiones <em>JWT</em> o persistidas en base de datos trae beneficios directos
            para la <strong>experiencia</strong>, la <strong>seguridad</strong> y la <strong>operación</strong>:
          </p>
          <ul>
            <li><strong>Experiencia excelente:</strong> login en un clic (Google, GitHub, etc.) que reduce fricción.</li>
            <li><strong>Seguridad por diseño:</strong> prácticas OWASP, HTTPS, scopes mínimos y control estricto de sesión.</li>
            <li><strong>Escalabilidad:</strong> sesiones JWT ideales para serverless/edge y Vercel.</li>
            <li><strong>Menor carga operativa:</strong> sin gestionar contraseñas propias.</li>
            <li><strong>Trazabilidad opcional:</strong> sesiones en BD para auditoría, compliance o revocación inmediata.</li>
          </ul>
        </section>

        {/* Funcionamiento */}
        <section id="funcionamiento" className="pt-12 mt-12 border-t border-slate-200" aria-labelledby="funcionamiento-title">
          <h2 id="funcionamiento-title">Cómo funciona (explicación rápida)</h2>
          <ol>
            <li>El usuario pulsa “Inicia con Google/GitHub”.</li>
            <li>El proveedor valida identidad y devuelve permisos limitados (<em>scopes</em>).</li>
            <li>NextAuth genera la sesión (con <strong>JWT</strong> sin estado o guardada en <strong>BD</strong>).</li>
            <li>Tu aplicación conoce <em>quién es</em> y <em>qué permisos</em> tiene el usuario.</li>
          </ol>
          <blockquote>
            💡 <strong>Flexible:</strong> combina OAuth con SSO corporativo (Azure AD/Entra ID) o credenciales propias si lo necesitas.
          </blockquote>
        </section>

        {/* Opciones */}
        <section id="opciones" className="pt-12 mt-12 border-t border-slate-200" aria-labelledby="opciones-title">
          <h2 id="opciones-title">Opciones de inicio de sesión</h2>
          <p>NextAuth permite múltiples proveedores en paralelo:</p>
          <ul>
            <li>Google, GitHub, Microsoft (Entra ID), Apple, X/Twitter, etc.</li>
            <li><strong>SSO</strong> para entornos B2B.</li>
            <li><strong>MFA</strong> configurable (según proveedor o extensiones).</li>
          </ul>
        </section>

        {/* JWT vs BD */}
        <section id="jwt-vs-db" className="pt-12 mt-12 border-t border-slate-200" aria-labelledby="jwt-vs-db-title">
          <h2 id="jwt-vs-db-title">JWT vs Sesiones en Base de Datos</h2>
          <p>Decidir dónde y cómo almacenar sesiones es clave. Resumen:</p>
          <table>
            <thead>
              <tr><th>Necesito…</th><th>Recomendado</th></tr>
            </thead>
            <tbody>
              <tr><td>Escalabilidad y simplicidad</td><td><strong>JWT</strong></td></tr>
              <tr><td>Revocar sesiones puntuales</td><td><strong>Base de Datos</strong></td></tr>
              <tr><td>Auditoría e historial de accesos</td><td><strong>Base de Datos</strong></td></tr>
              <tr><td>Menor latencia y menos dependencia de DB</td><td><strong>JWT</strong></td></tr>
            </tbody>
          </table>
          <p>👉 En muchos casos se inicia con <strong>JWT</strong> por simplicidad y se evoluciona a <strong>BD</strong> según necesidades operativas.</p>
        </section>

        {/* Buenas prácticas */}
        <section id="buenas-practicas" className="pt-12 mt-12 border-t border-slate-200" aria-labelledby="bp-title">
          <h2 id="bp-title">Buenas prácticas recomendadas</h2>
          <ul>
            <li><strong>HTTPS</strong> y cookies seguras (<code>Secure</code>, <code>HttpOnly</code>, <code>SameSite</code>).</li>
            <li><strong>Mínimo privilegio</strong>: solicita solo los scopes necesarios.</li>
            <li><strong>Rotación de claves</strong> y expiración corta de tokens.</li>
            <li><strong>JWT minimal</strong>: id, email, rol; evita datos sensibles.</li>
            <li><strong>Validación server-side centralizada</strong> para API Routes y páginas protegidas.</li>
          </ul>
        </section>

        {/* Casos de uso */}
        <section id="casos" className="pt-12 mt-12 border-t border-slate-200" aria-labelledby="casos-title">
          <h2 id="casos-title">Casos de uso típicos</h2>
          <ul>
            <li><strong>Portales de clientes</strong>: dashboards, tickets, reportes.</li>
            <li><strong>Plataformas SaaS</strong>: planes, roles, panel admin.</li>
            <li><strong>Intranets corporativas</strong>: SSO (Azure AD/Entra ID).</li>
          </ul>
        </section>

        {/* Cierre */}
        <section id="cierre" className="pt-12 mt-12 border-t border-slate-200" aria-labelledby="cierre-title">
          <h2 id="cierre-title">¿Listo para ofrecer login en 1 clic?</h2>
          <ul>
            <li>Aumenta <strong>conversión</strong> con login rápido.</li>
            <li>Reduce <strong>riesgos</strong> al no gestionar contraseñas.</li>
            <li>Escala en <strong>serverless/edge</strong> con baja latencia.</li>
          </ul>
          <p>Entrega una experiencia segura y sin fricción, con control y trazabilidad para TI.</p>
        </section>
      </div>

      {/* Acciones */}
      <div className="not-prose flex flex-wrap items-center gap-3 pt-12 mt-12 border-t border-slate-200">
        <Button asChild size="lg" className="rounded-2xl">
          <Link href="/#contact">Solicitar asesoría</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-2xl">
          <Link href="/blog">← Volver al Blog</Link>
        </Button>
      </div>
    </article>
  );
}
