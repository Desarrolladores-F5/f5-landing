import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page — Capta tráfico, valida mensajes y convierte en leads",
  description:
    "Landing Page en Next.js optimizada para performance y conversión: propuesta de valor clara, SEO técnico, pruebas A/B, medición en GA4 y despliegue continuo.",
  keywords: [
    "landing page",
    "Next.js",
    "conversión",
    "A/B testing",
    "SEO",
    "Core Web Vitals",
    "tracking",
    "GA4",
    "embudo",
  ],
  alternates: {
    canonical: "/productos/landingpage",
  },
  openGraph: {
    type: "website",
    url: "https://tudominio.com/productos/landingpage",
    title: "Landing Page — Capta tráfico y convierte",
    description:
      "Landing Page en Next.js con foco en performance, claridad del mensaje, experimentación y medición.",
    images: [
      {
        url: "https://tudominio.com/images/productos/p2.jpg",
        width: 1280,
        height: 720,
        alt: "Landing Page moderna enfocada en conversión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page — Capta tráfico y convierte",
    description:
      "Next.js + SEO + Web Vitals + experimentación + medición de conversiones.",
    images: ["https://tudominio.com/images/productos/p2.jpg"],
  },
};

export default function LandingPageProducto() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* === JSON-LD: Service + FAQPage === */}
      <Script id="ld-service-landing" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Diseño y desarrollo de Landing Page",
          serviceType: "Landing Page",
          areaServed: "CL",
          provider: {
            "@type": "Organization",
            name: "F5",
            url: "https://tudominio.com",
          },
          description:
            "Landing Page desarrollada en Next.js con foco en performance, claridad del mensaje, experimentación y medición.",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "CLP",
            },
          },
          url: "https://tudominio.com/productos/landingpage",
        })}
      </Script>

      <Script id="ld-faq-landing" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Podemos hacer pruebas A/B?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. Dejamos instrumentadas variantes de título, CTA, testimonios y disposición de bloques; medimos con GA4 o herramientas de experimentación.",
              },
            },
            {
              "@type": "Question",
              name: "¿Se integra con mi CRM o con formularios externos?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. Integramos CRMs (HubSpot, Pipedrive, Zoho, etc.), herramientas de e-mail y automatización por webhooks o APIs.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cómo se mide la conversión?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Instrumentamos GA4 con eventos (view, scroll, clics, envíos), definimos objetivos y sugerimos un dashboard de embudo con KPIs.",
              },
            },
          ],
        })}
      </Script>

      {/* Hero */}
      <Image
        src="/images/productos/p2.jpg"
        alt="Landing Page moderna enfocada en conversión"
        width={1280}
        height={720}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
        className="mb-8 rounded-2xl border object-cover"
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Landing Page <span className="text-slate-400">/ Captación y conversión</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Desarrollamos <strong>landing pages</strong> con foco en <strong>conversión</strong>:
          propuesta de valor clara, <strong>CTA</strong> visibles, carga ultra rápida y
          <strong> medición</strong> desde el día uno. Preparadas para <em>campañas</em>,
          <strong> SEO</strong> y <strong>experimentación</strong> continua.
        </p>
      </header>

      {/* ¿Qué problema resuelve? */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="problema-landing"
      >
        <h2 id="problema-landing" className="text-2xl font-bold">
          ¿Qué problema resuelve?
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Mensajes genéricos o confusos que diluyen la propuesta de valor.</li>
          <li>CTAs poco visibles o no medibles que impiden optimizar el embudo.</li>
          <li>Rendimiento deficiente en mobile que encarece el costo por lead.</li>
          <li>Falta de <em>insights</em> para iterar (sin eventos, sin mapas de calor, sin pruebas).</li>
        </ul>
      </section>

      {/* Resultados esperados */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="resultados-landing"
      >
        <h2 id="resultados-landing" className="text-2xl font-bold">
          Resultados que puedes esperar
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>
            <strong>Más conversiones</strong> por claridad del mensaje, jerarquía visual y CTAs medibles.
          </li>
          <li>
            <strong>Mejor quality score</strong> de campañas gracias a rendimiento y relevancia.
          </li>
          <li>
            <strong>Aprendizaje continuo</strong> mediante experimentos controlados y análisis de comportamiento.
          </li>
        </ul>
      </section>

      {/* Para quién es */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="para-quien-landing"
      >
        <h2 id="para-quien-landing" className="text-2xl font-bold">
          ¿Para quién es este producto?
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Equipos de marketing con foco en <strong>captación</strong> y <strong>performance</strong>.</li>
          <li>Negocios que validan <strong>propuestas</strong> o <strong>ofertas</strong> antes de escalar.</li>
          <li>Organizaciones que requieren <strong>medición</strong> y <strong>iteración</strong> rápidas.</li>
        </ul>
      </section>

      {/* Qué obtienes */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="obtienes-landing"
      >
        <h2 id="obtienes-landing" className="text-2xl font-bold">
          ¿Qué obtienes exactamente?
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>
            <strong>Story y copy</strong> orientados a problema→solución→prueba social→CTA.
          </li>
          <li>
            <strong>Diseño responsivo</strong> con componentes reutilizables y jerarquía clara.
          </li>
          <li>
            <strong>Formularios</strong> con validación server-side, anti-spam y <em>tracking</em> de eventos.
          </li>
          <li>
            <strong>SEO técnico</strong> (metadatos, OG/Twitter, sitemap/robots, canonical, datos estructurados).
          </li>
          <li>
            <strong>Medición</strong>: GA4 (view/scroll/clic/envío), objetivos y tablero de KPIs sugerido.
          </li>
          <li>
            <strong>Documentación</strong> operativa y guía para experimentos A/B.
          </li>
        </ul>
      </section>

      {/* Alcance y opciones */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="alcance-landing"
      >
        <h2 id="alcance-landing" className="text-2xl font-bold">
          Alcance y opciones
        </h2>

        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Secciones: Hero, Beneficios, Social proof, Detalle, FAQs, CTA.</li>
          <li>Accesibilidad (WCAG AA) y contenidos editables.</li>
          <li>Despliegue en Vercel (o equivalente), dominio y SSL.</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Pruebas A/B y banderas de características.</li>
          <li>Integración con CRM/marketing automation por API o webhooks.</li>
          <li>Mapas de calor y grabaciones de sesión (ej. Hotjar/Clarity).</li>
          <li>Multi-idioma (i18n) y localización.</li>
        </ul>
      </section>

      {/* Proceso */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="proceso-landing"
      >
        <h2 id="proceso-landing" className="text-2xl font-bold">
          Cómo trabajamos
        </h2>
        <ol className="mt-4 space-y-2 list-decimal pl-6 text-justify">
          <li><strong>Descubrimiento</strong>: audiencia, propuesta, objeciones, KPIs.</li>
          <li><strong>UX/UI</strong>: wireframes, diseño visual y revisión colaborativa.</li>
          <li><strong>Implementación</strong>: Next.js con CI/CD y entornos de <em>preview</em>.</li>
          <li><strong>QA</strong>: funcional, accesibilidad y rendimiento (Web Vitals).</li>
          <li><strong>Go-Live & handover</strong>: despliegue, documentación y capacitación.</li>
        </ol>
      </section>

      {/* Base técnica */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="tecnica-landing"
      >
        <h2 id="tecnica-landing" className="text-2xl font-bold">
          Base técnica
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>
            <strong>Next.js (App Router)</strong> con <strong>SSG/ISR</strong> y <strong>SSR</strong> cuando aplique.
          </li>
          <li>
            <strong>Optimización de imágenes</strong> con <code>next/image</code> y control de prioridad para LCP.
          </li>
          <li>
            <strong>Accesibilidad</strong>: semántica, foco visible, ARIA y navegación por teclado.
          </li>
          <li>
            <strong>Seguridad</strong>: validación server-side (Zod), rate-limit, honeypots y cabeceras (CSP/HSTS).
          </li>
          <li>
            <strong>Infraestructura</strong>: CDN/edge, caching efectivo, dominios/SSL administrados.
          </li>
        </ul>
      </section>

      {/* FAQs visibles (coherentes con JSON-LD) */}
      <section
        className="pt-10 mt-10 border-t border-slate-200"
        aria-labelledby="faq-landing"
      >
        <h2 id="faq-landing" className="text-2xl font-bold">
          Preguntas frecuentes
        </h2>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">¿Podemos hacer pruebas A/B?</h3>
            <p className="text-justify">
              Sí. Instrumentamos variantes y medimos con GA4 o herramientas dedicadas; definimos hipótesis y criterios de éxito.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              ¿Se integra con mi CRM o con formularios externos?
            </h3>
            <p className="text-justify">
              Sí. Integramos CRMs y automatizaciones por API o webhooks, incluyendo doble opt-in si es necesario.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Cómo se mide la conversión?</h3>
            <p className="text-justify">
              Configuramos eventos en GA4 (view, scroll, clics, envíos) y proponemos un dashboard de embudo con KPIs.
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
