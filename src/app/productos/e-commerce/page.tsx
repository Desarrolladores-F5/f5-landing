import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce — Tienda online escalable, segura y orientada a conversión",
  description:
    "Tienda online en Next.js optimizada para performance, SEO, seguridad y conversión: checkout sólido, medios de pago locales, catálogo administrable e integraciones.",
  keywords: [
    "e-commerce",
    "tienda online",
    "Next.js",
    "SEO",
    "Core Web Vitals",
    "checkout",
    "GA4",
    "Transbank",
    "Mercado Pago",
    "Stripe",
    "CDN",
  ],
  alternates: {
    canonical: "/productos/ecommerce",
  },
  openGraph: {
    type: "website",
    url: "https://tudominio.com/productos/ecommerce",
    title: "E-commerce — Tienda online escalable y segura",
    description:
      "E-commerce con foco en conversión: performance, UX, checkout confiable y medición completa.",
    images: [
      {
        url: "https://tudominio.com/images/productos/p3.jpg",
        width: 1280,
        height: 720,
        alt: "Tienda online moderna mostrando catálogo y carrito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce — Tienda online escalable y segura",
    description:
      "Next.js + Web Vitals + checkout sólido + integraciones y medición avanzada.",
    images: ["https://tudominio.com/images/productos/p3.jpg"],
  },
};

export default function ProductoEcommerce() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* === JSON-LD: Service + FAQPage === */}
      <Script id="ld-service-ecommerce" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Desarrollo de E-commerce",
          serviceType: "E-commerce",
          areaServed: "CL",
          provider: {
            "@type": "Organization",
            name: "F5",
            url: "https://tudominio.com",
          },
          description:
            "Desarrollo de tienda online en Next.js con foco en conversión, performance, SEO y seguridad. Integraciones con medios de pago y logística.",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceSpecification: { "@type": "PriceSpecification", priceCurrency: "CLP" },
          },
          url: "https://tudominio.com/productos/ecommerce",
        })}
      </Script>

      <Script id="ld-faq-ecommerce" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Puedo administrar catálogo, stock y precios?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. Entregamos panel de administración y guía operativa para catálogo, stock, variantes y precios.",
              },
            },
            {
              "@type": "Question",
              name: "¿Qué medios de pago soportan?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Integramos Transbank, Mercado Pago, Stripe u otros según país y requerimientos de conciliación.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cómo medimos resultados y conversiones?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Activamos GA4 con eventos de comercio electrónico (view_item, add_to_cart, begin_checkout, purchase) y proponemos un dashboard de KPIs.",
              },
            },
          ],
        })}
      </Script>

      {/* Hero */}
      <Image
        src="/images/productos/p3.jpg"
        alt="Tienda online moderna mostrando catálogo y carrito"
        width={1280}
        height={720}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
        className="mb-8 rounded-2xl border object-cover"
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          E-commerce <span className="text-slate-400">/ Tienda online</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Construimos <strong>tiendas online rápidas y seguras</strong> con foco en{" "}
          <strong>conversión</strong> y operación: catálogo administrable, checkout confiable,{" "}
          <strong>medios de pago locales</strong> e integraciones con logística y analítica. Arquitectura
          escalable para crecer sin fricción.
        </p>
      </header>

      {/* ¿Qué problema resuelve? */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="problema-ecom">
        <h2 id="problema-ecom" className="text-2xl font-bold">¿Qué problema resuelve?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Velocidad insuficiente que afecta SEO y tasa de conversión en mobile.</li>
          <li>Checkout inestable o poco claro que genera abandono.</li>
          <li>Catálogo difícil de mantener y sin control de stock/variantes.</li>
          <li>Falta de medición confiable para optimizar campañas y remarketing.</li>
        </ul>
      </section>

      {/* Resultados esperados */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="resultados-ecom">
        <h2 id="resultados-ecom" className="text-2xl font-bold">Resultados que puedes esperar</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Mayor conversión</strong> por performance, UX clara y checkout sólido.</li>
          <li><strong>Mejor SEO</strong> gracias a Core Web Vitals y estructura indexable.</li>
          <li><strong>Operación eficiente</strong>: catálogo, stock y precios administrables.</li>
          <li><strong>Atribución correcta</strong> en GA4/Ads para optimizar inversión.</li>
        </ul>
      </section>

      {/* Para quién es */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="para-quien-ecom">
        <h2 id="para-quien-ecom" className="text-2xl font-bold">¿Para quién es este producto?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Tiendas que requieren <strong>base robusta</strong> para escalar catálogos y tráfico.</li>
          <li>Marcas con foco en <strong>performance</strong> y <strong>fidelización</strong>.</li>
          <li>Negocios que necesitan <strong>integraciones</strong> (ERP, logística, marketing).</li>
        </ul>
      </section>

      {/* Qué obtienes */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="obtienes-ecom">
        <h2 id="obtienes-ecom" className="text-2xl font-bold">¿Qué obtienes exactamente?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Catálogo</strong> con categorías, variantes (talla/color), stock y reglas de precio.</li>
          <li><strong>Carrito y checkout</strong> con validaciones y pasos claros.</li>
          <li><strong>Medios de pago</strong> locales/internacionales (Transbank, Mercado Pago, Stripe).</li>
          <li><strong>Integraciones</strong> con despacho/logística y emails transaccionales.</li>
          <li><strong>SEO técnico</strong>: metadatos, Open Graph, sitemap/robots, schema de producto.</li>
          <li><strong>Medición</strong>: GA4 (view_item, add_to_cart, begin_checkout, purchase).</li>
          <li><strong>Documentación</strong> y capacitación para operar el día a día.</li>
        </ul>
      </section>

      {/* Alcance y opciones */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="alcance-ecom">
        <h2 id="alcance-ecom" className="text-2xl font-bold">Alcance y opciones</h2>

        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Home de tienda, listado (PLP) y ficha (PDP).</li>
          <li>Carrito, checkout, órdenes y emails transaccionales base.</li>
          <li>Gestión de catálogo y stock, imágenes optimizadas.</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Cupones, gift cards, wishlist y productos relacionados.</li>
          <li>OMS/ERP, pricing dinámico, <em>bundles</em> y suscripciones.</li>
          <li>Búsqueda con sugerencias, filtros avanzados y reseñas.</li>
        </ul>
      </section>

      {/* Proceso */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="proceso-ecom">
        <h2 id="proceso-ecom" className="text-2xl font-bold">Cómo trabajamos</h2>
        <ol className="mt-4 space-y-2 list-decimal pl-6 text-justify">
          <li><strong>Descubrimiento</strong>: catálogo, medios de pago, reglas y SLA.</li>
          <li><strong>UX/UI</strong>: arquitectura de información, flows y diseño visual.</li>
          <li><strong>Implementación</strong>: Next.js + integraciones y pruebas end-to-end.</li>
          <li><strong>QA</strong>: funcional, rendimiento (Web Vitals) y seguridad.</li>
          <li><strong>Go-Live & handover</strong>: monitoreo y documentación.</li>
        </ol>
      </section>

      {/* Base técnica */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="tecnica-ecom">
        <h2 id="tecnica-ecom" className="text-2xl font-bold">Base técnica</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Next.js (App Router)</strong> con <strong>SSG/ISR</strong> y <strong>SSR</strong> para PDP/checkout si aplica.</li>
          <li><strong>Optimización de imágenes</strong> con <code>next/image</code> para mejorar LCP.</li>
          <li><strong>Seguridad</strong>: validación server-side (Zod), rate-limit, CSP/HSTS y mitigación de fraude en checkout.</li>
          <li><strong>Observabilidad</strong>: eventos GA4 de e-commerce, tracing y captura de errores de cliente.</li>
          <li><strong>Escalabilidad</strong>: CDN/edge, caché y patrones de integración (webhooks/queues).</li>
        </ul>
      </section>

      {/* FAQs (coherentes con JSON-LD) */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="faq-ecom">
        <h2 id="faq-ecom" className="text-2xl font-bold">Preguntas frecuentes</h2>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">¿Puedo administrar catálogo y precios?</h3>
            <p className="text-justify">
              Sí. Entregamos panel y guía de operación diaria para categorías, variantes, stock y precios.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Qué medios de pago soportan?</h3>
            <p className="text-justify">
              Implementamos los que requieras (Transbank, Mercado Pago, Stripe), considerando conciliación y reembolsos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Cómo medimos resultados?</h3>
            <p className="text-justify">
              Activamos GA4 con eventos de e-commerce y dejamos un checklist de objetivos/KPIs de embudo.
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
