// app/blog/landing-vs-sitio/page.tsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const POST = {
  title: "Landing, Página o Sitio: ¿qué elegir?",
  slug: "landing-vs-sitio",
  url: "https://tudominio.com/blog/landing-vs-sitio",
  image: "https://tudominio.com/images/blog/b1.jpg",
  description:
    "Guía orientada al cliente para elegir entre landing page, página web o sitio completo. Diferencias claras, ventajas, riesgos, métricas y recomendaciones en Next.js.",
  datePublished: "2025-08-20", // YYYY-MM-DD
  dateModified: "2025-09-01",
  author: "F5",
  readingTime: "5 min",
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
    images: [{ url: POST.image, width: 1280, height: 720, alt: "Comparativa entre landing page, página y sitio web" }],
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
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
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
          <li className="text-slate-900 font-medium" aria-current="page">
            {POST.title}
          </li>
        </ol>
      </nav>

      {/* Título y meta */}
      <header className="mb-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
          {POST.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
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
        src="/images/blog/b1.jpg"
        alt="Comparativa entre landing page, página y sitio web"
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
          <li><a className="hover:underline" href="#resumen">Resumen ejecutivo</a></li>
          <li><a className="hover:underline" href="#objetivo">Qué elegir según tu objetivo</a></li>
          <li><a className="hover:underline" href="#conclusion">Conclusión</a></li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <div
        className={[
          "prose prose-slate md:prose-lg max-w-none",
          "prose-headings:scroll-mt-24",
          "prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:font-bold prose-h2:tracking-tight",
          "prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-semibold prose-h3:tracking-tight",
          "prose-p:text-justify prose-li:text-justify prose-blockquote:text-justify",
        ].join(" ")}
      >
        {/* 1. Resumen ejecutivo */}
        <section aria-labelledby="resumen" id="resumen" className="pt-10 mt-10 border-t border-slate-200">
          <h2>Resumen ejecutivo</h2>
          <p>
            No todas las empresas necesitan un sitio grande ni todas las campañas rinden con un sitio completo.
            La elección depende del <em>objetivo principal</em>, el <em>origen del tráfico</em> y la{" "}
            <em>frecuencia de cambios</em> de contenido.
          </p>
          <ul>
            <li>
              <strong>Landing Page:</strong> una sola vista, un objetivo y un llamado a la acción.
              Ideal para <em>campañas</em> y validaciones rápidas.
            </li>
            <li>
              <strong>Página Web:</strong> 2–5 secciones para consolidar <em>presencia corporativa</em> y facilitar el contacto.
            </li>
            <li>
              <strong>Sitio Web Completo:</strong> múltiples secciones con <em>CMS</em>, búsqueda, roles e <em>integraciones</em>.
            </li>
          </ul>
        </section>

        {/* 2. Qué elegir según tu objetivo */}
        <section aria-labelledby="objetivo" id="objetivo" className="pt-10 mt-10 border-t border-slate-200">
          <h2>Qué elegir según tu objetivo</h2>

          <h3>🚀 Landing Page</h3>
          <p>
            Si el tráfico proviene de anuncios o campañas temporales, conviene una <strong>Landing Page</strong>.
            Minimiza distracciones, concentra el mensaje y acelera la decisión.
          </p>
          <ul>
            <li><strong>Ventajas:</strong> <em>time-to-market</em> corto, foco en un KPI, apta para <em>A/B testing</em>.</li>
            <li><strong>Limitaciones:</strong> escalabilidad baja; SEO limitado a una URL.</li>
            <li><strong>Métricas:</strong> conversión, CPL, ROAS.</li>
          </ul>

          <h3>🏢 Página Web</h3>
          <p>Ideal para empresas que requieren presencia y contacto con baja mantención: tu tarjeta de presentación digital.</p>
          <ul>
            <li><strong>Ventajas:</strong> SEO on-page básico, mantenimiento simple, costo moderado.</li>
            <li><strong>Limitaciones:</strong> poco margen de crecimiento si el contenido aumenta.</li>
            <li><strong>Métricas:</strong> tráfico orgánico, páginas por sesión, envíos de formulario.</li>
          </ul>

          <h3>🌐 Sitio Web Completo</h3>
          <p>Útil cuando necesitas escalar: CMS, múltiples secciones, roles, integraciones y SEO avanzado.</p>
          <ul>
            <li><strong>Ventajas:</strong> escalabilidad, CMS, integraciones ERP/CRM, internacionalización.</li>
            <li><strong>Limitaciones:</strong> mayor costo de propiedad y mantenimiento.</li>
            <li><strong>Métricas:</strong> crecimiento orgánico, indexación, errores de contenido.</li>
          </ul>
        </section>

        {/* 3. Conclusión */}
        <section aria-labelledby="conclusion" id="conclusion" className="pt-10 mt-10 border-t border-slate-200">
          <h2>Conclusión</h2>
          <p>
            Elige <strong>Landing</strong> si tu meta es convertir tráfico de campañas en resultados rápidos.
            Opta por <strong>Página Web</strong> para cimentar presencia, credibilidad y contacto con bajo costo de mantención.
            Escala a un <strong>Sitio Completo</strong> cuando requieras crecimiento sostenido, SEO avanzado, roles e integraciones.
            Podemos empezar pequeño y crecer de forma segura.
          </p>
        </section>
      </div>

      {/* Acciones */}
      <div className="not-prose flex flex-wrap items-center gap-3 pt-10 mt-10 border-t border-slate-200">
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
