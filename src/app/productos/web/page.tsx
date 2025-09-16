import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web — Sitio corporativo que atrae, convierte y crece con tu negocio",
  description:
    "Producto Web: sitio corporativo en Next.js enfocado en resultados. Mensaje claro, SEO técnico, alto rendimiento, accesibilidad y medición de conversiones.",
  keywords: [
    "sitio corporativo",
    "Next.js",
    "SEO técnico",
    "Core Web Vitals",
    "WCAG",
    "web corporativa",
    "landing",
    "accesibilidad",
    "rendimiento",
  ],
  alternates: {
    canonical: "/productos/web",
  },
  openGraph: {
    type: "website",
    url: "https://tudominio.com/productos/web",
    title: "Web — Sitio corporativo que atrae y convierte",
    description:
      "Sitio corporativo con Next.js, SEO técnico, alto rendimiento y medición de conversiones.",
    images: [
      {
        url: "https://tudominio.com/images/productos/p1.jpg",
        width: 1280,
        height: 720,
        alt: "Sitio web corporativo moderno renderizado en laptop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web — Sitio corporativo que atrae y convierte",
    description:
      "Next.js + SEO técnico + rendimiento + accesibilidad + medición.",
    images: ["https://tudominio.com/images/productos/p1.jpg"],
  },
};

export default function ProductoWeb() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* === JSON-LD: Service + FAQPage === */}
      <Script id="ld-service" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Desarrollo de sitio web corporativo",
          serviceType: "Web corporativa",
          areaServed: "CL",
          provider: {
            "@type": "Organization",
            name: "F5",
            url: "https://tudominio.com",
          },
          description:
            "Sitio corporativo en Next.js con foco en SEO técnico, rendimiento y conversión.",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "CLP",
            },
          },
          url: "https://tudominio.com/productos/web",
        })}
      </Script>

      <Script id="ld-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Podremos editar contenidos sin depender del equipo técnico?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. Dejamos secciones editables y una guía. Para flujos editoriales complejos integramos un CMS headless.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cómo mediremos el impacto?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Configuramos GA4 con eventos de CTA, scroll y envíos; proponemos tablero de KPIs y objetivos de conversión.",
              },
            },
            {
              "@type": "Question",
              name: "¿Es escalable?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "La base permite crecer a blog, i18n, integraciones y portal de clientes sin rehacer el sitio.",
              },
            },
          ],
        })}
      </Script>

      {/* Hero */}
      <Image
        src="/images/productos/p1.jpg"
        alt="Sitio web corporativo moderno renderizado en laptop"
        width={1280}
        height={720}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
        className="mb-8 rounded-2xl border object-cover"
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Web <span className="text-slate-400">/ Sitio corporativo</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Nuestro producto <strong>Web</strong> es un sitio corporativo diseñado
          para <strong>atraer visitas calificadas</strong>,{" "}
          <strong>explicar con claridad tu propuesta de valor</strong> y{" "}
          <strong>convertir en contactos</strong>. Entregamos un activo digital
          rápido, accesible y escalable, con SEO técnico y medición desde el día
          uno.
        </p>
      </header>

      {/* PROPOSICIÓN DE VALOR */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="que-problema"
      >
        <h2 id="que-problema" className="text-2xl font-bold">
          ¿Qué problema resuelve?
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Mensajes dispersos o poco claros que no comunican valor.</li>
          <li>Bajo tráfico orgánico por fundamentos SEO débiles.</li>
          <li>Velocidad deficiente en mobile que afecta conversión y ranking.</li>
          <li>Dificultad para medir: formularios sin tracking ni objetivos.</li>
        </ul>
      </section>

      {/* RESULTADOS / BENEFICIOS */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="resultados"
      >
        <h2 id="resultados" className="text-2xl font-bold">
          Resultados que puedes esperar
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>
            <strong>Más oportunidades calificadas</strong> gracias a arquitectura
            de contenidos y CTAs medibles.
          </li>
          <li>
            <strong>Tráfico orgánico creciente</strong> por SEO técnico correcto.
          </li>
          <li>
            <strong>Experiencia móvil superior</strong> (Core Web Vitals verdes).
          </li>
          <li>
            <strong>Gobernanza</strong>: editoriales simples y documentación.
          </li>
        </ul>
      </section>

      {/* PARA QUIÉN ES */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="para-quien"
      >
        <h2 id="para-quien" className="text-2xl font-bold">
          ¿Para quién es este producto?
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Empresas que necesitan <strong>base digital seria</strong>.</li>
          <li>
            Equipos comercial/marketing que requieren{" "}
            <strong>medición de leads</strong>.
          </li>
          <li>
            Organizaciones que valoran <strong>seguridad</strong>,{" "}
            <strong>cumplimiento</strong> y <strong>rendimiento</strong>.
          </li>
        </ul>
      </section>

      {/* QUÉ OBTIENES */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="que-obtienes"
      >
        <h2 id="que-obtienes" className="text-2xl font-bold">
          ¿Qué obtienes exactamente?
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>
            <strong>Story de marca y mensajes base</strong> (valor, pruebas
            sociales y objeciones).
          </li>
          <li>
            <strong>Diseño responsivo</strong> con componentes reutilizables.
          </li>
          <li>
            <strong>Formularios con validación server-side</strong>, protección
            anti-spam y tracking de eventos.
          </li>
          <li>
            <strong>SEO técnico</strong>: metadatos, sitemap/robots, canonical,
            Open Graph y datos estructurados.
          </li>
          <li>
            <strong>Medición</strong>: GA4 (CTAs, scroll, envíos) y tablero de KPIs.
          </li>
          <li>
            <strong>Documentación operativa</strong> y capacitación breve.
          </li>
        </ul>
      </section>

      {/* PLANES (sin precios) */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="alcance"
      >
        <h2 id="alcance" className="text-2xl font-bold">
          Alcance y opciones
        </h2>

        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Páginas: Home, Nosotros, Servicios, Casos/Clientes, Contacto, Legales.</li>
          <li>Nav clara, accesibilidad (WCAG AA) y contenidos editables.</li>
          <li>Despliegue en Vercel (o equivalente), dominio y SSL.</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Blog (listado + artículo) con estructura SEO.</li>
          <li>Multi-idioma (i18n) y localización.</li>
          <li>CMS headless para flujos editoriales complejos.</li>
          <li>Integraciones (CRM, formularios avanzados, chat, analítica).</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="como-trabajamos"
      >
        <h2 id="como-trabajamos" className="text-2xl font-bold">
          Cómo trabajamos
        </h2>
        <ol className="mt-4 space-y-2 list-decimal pl-6 text-justify">
          <li><strong>Descubrimiento</strong>: objetivos, público, mensajes y sitemap.</li>
          <li><strong>UX/UI</strong>: wireframes, diseño visual y revisión colaborativa.</li>
          <li><strong>Implementación</strong>: Next.js con CI/CD y previews.</li>
          <li><strong>QA</strong>: funcional, accesibilidad y rendimiento (Web Vitals).</li>
          <li><strong>Go-Live & handover</strong>: despliegue, documentación y capacitación.</li>
        </ol>
      </section>

      {/* DETALLE TÉCNICO */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="base-tecnica"
      >
        <h2 id="base-tecnica" className="text-2xl font-bold">
          Base técnica
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>
            <strong>Next.js (App Router)</strong> con <strong>SSG/ISR</strong> e
            <strong> SSR</strong> cuando aplique.
          </li>
          <li>
            <strong>Optimización de imágenes</strong> con <code>next/image</code> y
            control de prioridad para mejorar LCP.
          </li>
          <li>
            <strong>Accesibilidad</strong>: semántica correcta, foco visible, ARIA y teclado.
          </li>
          <li>
            <strong>Seguridad</strong>: validación server-side (Zod), rate-limit, honeypots y cabeceras (CSP/HSTS).
          </li>
          <li>
            <strong>Infraestructura</strong>: CDN/edge, cacheo efectivo y dominios/SSL administrados.
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="faq"
      >
        <h2 id="faq" className="text-2xl font-bold">
          Preguntas frecuentes
        </h2>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">
              ¿Podremos editar contenidos sin depender del equipo técnico?
            </h3>
            <p className="text-justify">
              Sí. Dejamos secciones editables y una guía para actualizar textos, imágenes y metadatos.
              Si requieres flujo editorial, integramos un CMS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Cómo mediremos el impacto?</h3>
            <p className="text-justify">
              Instrumentamos eventos en GA4 (envíos, clics, scroll) y proponemos un tablero de KPIs.
              Acordamos objetivos de conversión desde el inicio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Es escalable?</h3>
            <p className="text-justify">
              La base permite crecer a blog, i18n, integraciones y portal de clientes sin rehacer el sitio.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <div className="pt-10 mt-10 border-t border-slate-200 not-prose flex flex-wrap gap-3">
        <Button asChild size="lg" className="rounded-2xl">
          <Link href="/#contact">Solicitar propuesta</Link>
        </Button>
        <Button asChild variant="ghost" size="lg" className="rounded-2xl">
          <Link href="/">← Ir al inicio</Link>
        </Button>
      </div>
    </article>
  );
}
