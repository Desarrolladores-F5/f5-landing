import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plataforma — Solución todo-en-uno con módulos, permisos e integraciones",
  description:
    "Plataforma modular y escalable con seguridad por capas, roles/permisos (RBAC), integraciones y reporting. Integración de procesos y datos con trazabilidad completa.",
  keywords: [
    "plataforma",
    "RBAC",
    "integraciones",
    "API",
    "webhooks",
    "auditoría",
    "observabilidad",
    "Next.js",
    "CDN",
    "reporting",
    "data warehouse",
  ],
  alternates: { canonical: "/productos/plataforma" },
  openGraph: {
    type: "website",
    url: "https://tudominio.com/productos/plataforma",
    title: "Plataforma — Solución todo-en-uno escalable",
    description:
      "Unifica procesos con módulos, permisos e integraciones; seguridad por capas y reporting.",
    images: [
      {
        url: "https://tudominio.com/images/productos/p5.jpg",
        width: 1280,
        height: 720,
        alt: "Plataforma empresarial modular",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plataforma — Solución todo-en-uno escalable",
    description:
      "Módulos, RBAC granular, APIs/webhooks e integraciones con reporting y trazabilidad.",
    images: ["https://tudominio.com/images/productos/p5.jpg"],
  },
};

export default function ProductoPlataforma() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* === JSON-LD: Service + FAQPage === */}
      <Script id="ld-service-plataforma" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Desarrollo de Plataforma Modular",
          serviceType: "Plataforma",
          areaServed: "CL",
          provider: { "@type": "Organization", name: "F5", url: "https://tudominio.com" },
          description:
            "Plataforma modular con RBAC, integraciones por API/webhooks, seguridad por capas y reporting.",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceSpecification: { "@type": "PriceSpecification", priceCurrency: "CLP" },
          },
          url: "https://tudominio.com/productos/plataforma",
        })}
      </Script>

      <Script id="ld-faq-plataforma" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Se pueden activar módulos por etapas?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. La arquitectura es modular; habilitamos dominios gradualmente y migramos datos sin interrumpir la operación.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cómo se integran sistemas legados (ERP/CRM)?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Vía APIs REST/GraphQL, webhooks y/o colas; soportamos ETL/ELT y sincronización incremental.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cómo gestionan permisos y auditoría?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "RBAC granular con ámbitos jerárquicos; auditoría append-only y firma de eventos críticos.",
              },
            },
          ],
        })}
      </Script>

      {/* Hero */}
      <Image
        src="/images/productos/p5.jpg"
        alt="Plataforma empresarial modular"
        width={1280}
        height={720}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
        className="mb-8 rounded-2xl border object-cover"
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Plataforma <span className="text-slate-400">/ Todo en uno</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Unificamos procesos en una <strong>plataforma modular</strong> con{" "}
          <strong>seguridad por capas</strong>, <strong>roles y permisos</strong> y{" "}
          <strong>reportabilidad</strong>. Diseñada para integrar sistemas y{" "}
          <strong>escalar</strong> sin fricción.
        </p>
      </header>

      {/* ¿Qué problema resuelve? */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="problema-plataforma">
        <h2 id="problema-plataforma" className="text-2xl font-bold">¿Qué problema resuelve?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Procesos distribuidos en múltiples herramientas.</li>
          <li>Falta de control de accesos y trazabilidad.</li>
          <li>Duplicidad de datos y esfuerzos manuales.</li>
          <li>Reporting limitado para la toma de decisiones.</li>
        </ul>
      </section>

      {/* Resultados esperados */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="resultados-plataforma">
        <h2 id="resultados-plataforma" className="text-2xl font-bold">Resultados que puedes esperar</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Eficiencia operativa</strong> por unificación y automatización.</li>
          <li><strong>Gobernanza</strong> con permisos granulares y auditoría.</li>
          <li><strong>Datos confiables</strong> y consistentes entre sistemas.</li>
          <li><strong>KPIs claros</strong> con reporting y tableros.</li>
        </ul>
      </section>

      {/* Para quién es */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="para-quien-plataforma">
        <h2 id="para-quien-plataforma" className="text-2xl font-bold">¿Para quién es?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Empresas que requieren <strong>plataforma central</strong> de operación.</li>
          <li>Organizaciones con <strong>múltiples áreas y permisos</strong>.</li>
          <li>Equipos que necesitan <strong>integrar</strong> sistemas heredados y nuevos.</li>
        </ul>
      </section>

      {/* Qué obtienes */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="obtienes-plataforma">
        <h2 id="obtienes-plataforma" className="text-2xl font-bold">¿Qué obtienes exactamente?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Módulos</strong> por dominio (usuarios, catálogos, flujos, etc.).</li>
          <li><strong>RBAC</strong> con jerarquías y ámbitos (empresa/sede/equipo).</li>
          <li><strong>APIs</strong> documentadas y <strong>webhooks</strong>.</li>
          <li><strong>Reportes</strong>, exportaciones y auditoría.</li>
          <li><strong>Documentación</strong> y handover.</li>
        </ul>
      </section>

      {/* Alcance y opciones */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="alcance-plataforma">
        <h2 id="alcance-plataforma" className="text-2xl font-bold">Alcance y opciones</h2>

        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Módulos core, usuarios/roles, flujos y tablero inicial.</li>
          <li>API REST/GraphQL y autenticación OIDC.</li>
          <li>Despliegue, monitoreo y alertas.</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>ETL/ELT y data warehouse.</li>
          <li>Integraciones ERP/CRM/BI.</li>
          <li>Automatizaciones y colas de trabajo.</li>
        </ul>
      </section>

      {/* Proceso */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="proceso-plataforma">
        <h2 id="proceso-plataforma" className="text-2xl font-bold">Cómo trabajamos</h2>
        <ol className="mt-4 space-y-2 list-decimal pl-6 text-justify">
          <li><strong>Descubrimiento</strong>: dominios, actores, permisos y KPIs.</li>
          <li><strong>Arquitectura & UX</strong>: módulos, flujos, esquema de datos y diseño visual.</li>
          <li><strong>Implementación</strong>: Next.js + APIs/webhooks y CI/CD con entornos de <em>preview</em>.</li>
          <li><strong>QA</strong>: funcional, seguridad, rendimiento y migraciones controladas.</li>
          <li><strong>Go-Live & handover</strong>: despliegue, monitoreo y capacitación.</li>
        </ol>
      </section>

      {/* Base técnica */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="tecnica-plataforma">
        <h2 id="tecnica-plataforma" className="text-2xl font-bold">Base técnica</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Next.js (App Router)</strong> con <strong>SSG/ISR</strong> y <strong>SSR</strong> cuando aplique.</li>
          <li><strong>RBAC</strong> jerárquico; auditoría <em>append-only</em> con firma de eventos críticos.</li>
          <li><strong>Seguridad</strong>: validación server-side (Zod), CSRF, rate-limit, CSP/HSTS.</li>
          <li><strong>Integraciones</strong>: REST/GraphQL, webhooks y colas (reintentos/DLQ).</li>
          <li><strong>Observabilidad</strong>: logs estructurados, tracing (OpenTelemetry/Sentry) y métricas.</li>
          <li><strong>Escalabilidad</strong>: CDN/edge, caching por etiqueta y revalidación selectiva.</li>
        </ul>
      </section>

      {/* FAQs (coherentes con JSON-LD) */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="faq-plataforma">
        <h2 id="faq-plataforma" className="text-2xl font-bold">Preguntas frecuentes</h2>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">¿Se pueden activar módulos por etapas?</h3>
            <p className="text-justify">
              Sí. Activamos dominios gradualmente y migramos datos con pruebas de regresión.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Cómo se integran sistemas legados?</h3>
            <p className="text-justify">
              Por APIs, webhooks y/o colas; para lotes grandes usamos ETL/ELT con validación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Cómo gestionan permisos y auditoría?</h3>
            <p className="text-justify">
              RBAC granular con ámbitos jerárquicos; auditoría append-only y firma de eventos.
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
