import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App — Aplicaciones móviles y web apps seguras, performantes y escalables",
  description:
    "Diseño y desarrollo de aplicaciones móviles y web apps con arquitectura escalable, seguridad by design, observabilidad e integraciones.",
  keywords: [
    "app",
    "aplicaciones móviles",
    "web app",
    "Next.js",
    "React Native",
    "Expo",
    "OAuth2",
    "OIDC",
    "RBAC",
    "CI/CD",
    "observabilidad",
    "offline-first",
  ],
  alternates: { canonical: "/productos/app" },
  openGraph: {
    type: "website",
    url: "https://tudominio.com/productos/app",
    title: "App — Aplicaciones móviles y web apps seguras y escalables",
    description:
      "UX consistente, performance, seguridad y pipelines CI/CD con monitoreo y trazabilidad.",
    images: [
      {
        url: "https://tudominio.com/images/productos/p4.jpg",
        width: 1280,
        height: 720,
        alt: "Aplicación móvil y web app moderna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App — Aplicaciones móviles y web apps seguras y escalables",
    description:
      "Arquitectura modular, seguridad by design e integraciones con telemetría.",
    images: ["https://tudominio.com/images/productos/p4.jpg"],
  },
};

export default function ProductoApp() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* === JSON-LD: Service + FAQPage === */}
      <Script id="ld-service-app" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Diseño y desarrollo de Apps (móvil y web)",
          serviceType: "Aplicaciones móviles y web apps",
          areaServed: "CL",
          provider: { "@type": "Organization", name: "F5", url: "https://tudominio.com" },
          description:
            "Desarrollo de apps seguras y performantes con UX consistente, arquitectura escalable, CI/CD y observabilidad.",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceSpecification: { "@type": "PriceSpecification", priceCurrency: "CLP" },
          },
          url: "https://tudominio.com/productos/app",
        })}
      </Script>

      <Script id="ld-faq-app" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Pueden publicar en App Store y Google Play?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. Gestionamos firmas, perfiles, provisionamiento y cumplimiento de políticas para publicar y mantener las apps.",
              },
            },
            {
              "@type": "Question",
              name: "¿Soportan autenticación segura y permisos por rol?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. Implementamos OAuth2/OIDC, MFA y RBAC granular con buenas prácticas de sesión y almacenamiento seguro.",
              },
            },
            {
              "@type": "Question",
              name: "¿Pueden funcionar sin conexión?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. Diseñamos flujos offline-first con sincronización y resolución de conflictos cuando aplica.",
              },
            },
          ],
        })}
      </Script>

      {/* Hero */}
      <Image
        src="/images/productos/p4.jpg"
        alt="Aplicación móvil y web app moderna"
        width={1280}
        height={720}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
        className="mb-8 rounded-2xl border object-cover"
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          App <span className="text-slate-400">/ Aplicaciones móviles y web apps</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Diseñamos y desarrollamos <strong>apps seguras y performantes</strong>, con foco en UX,
          escalabilidad e integraciones. Entregamos pipelines <strong>CI/CD</strong>, monitoreo y{" "}
          <em>observabilidad</em> para operar con confianza.
        </p>
      </header>

      {/* ¿Qué problema resuelve? */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="problema-app">
        <h2 id="problema-app" className="text-2xl font-bold">¿Qué problema resuelve?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Experiencias inconsistentes entre móvil y web.</li>
          <li>Falta de arquitectura para crecer en usuarios y funcionalidades.</li>
          <li>Carencia de trazabilidad, monitoreo y control de errores.</li>
          <li>Integraciones dispersas que frenan la operación.</li>
        </ul>
      </section>

      {/* Resultados esperados */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="resultados-app">
        <h2 id="resultados-app" className="text-2xl font-bold">Resultados que puedes esperar</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Experiencia fluida</strong> con rendimiento y UX consistentes.</li>
          <li><strong>Entrega continua</strong> con entornos de <em>preview</em> y releases controlados.</li>
          <li><strong>Telemetría y alertas</strong> para decisiones informadas.</li>
          <li><strong>Integraciones sólidas</strong> con APIs y servicios existentes.</li>
        </ul>
      </section>

      {/* Para quién es */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="para-quien-app">
        <h2 id="para-quien-app" className="text-2xl font-bold">¿Para quién es?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Equipos que necesitan <strong>apps core de negocio</strong>.</li>
          <li>Startups en fase de <strong>crecimiento</strong> y <strong>escalamiento</strong>.</li>
          <li>Organizaciones que exigen <strong>seguridad y cumplimiento</strong>.</li>
        </ul>
      </section>

      {/* Qué obtienes */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="obtienes-app">
        <h2 id="obtienes-app" className="text-2xl font-bold">¿Qué obtienes exactamente?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Arquitectura</strong>: monorepo opcional, módulos por dominio y patrones Clean/DDD cuando aplique.</li>
          <li><strong>Autenticación y autorización</strong>: OAuth2/OIDC, MFA, sesiones seguras y <strong>RBAC</strong>.</li>
          <li><strong>Offline-first</strong> y sincronización selectiva con manejo de conflictos.</li>
          <li><strong>Analytics de producto</strong>: telemetría, eventos, funnels y cohortes.</li>
          <li><strong>Documentación</strong> y <em>handover</em> para operación y escalamiento.</li>
        </ul>
      </section>

      {/* Alcance y opciones */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="alcance-app">
        <h2 id="alcance-app" className="text-2xl font-bold">Alcance y opciones</h2>

        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Diseño UX/UI, navegación, estados y almacenamiento seguro.</li>
          <li>CI/CD con versiones, <em>feature flags</em> y <em>rollbacks</em> controlados.</li>
          <li>Monitoreo de errores y rendimiento (RUM) con alertas.</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Notificaciones push, deep links y widgets.</li>
          <li>Integraciones con SDKs (pagos, mapas, biometría, archivos).</li>
          <li>Testing E2E, automatización de QA y beta testing (TestFlight/Play Console).</li>
        </ul>
      </section>

      {/* Proceso */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="proceso-app">
        <h2 id="proceso-app" className="text-2xl font-bold">Cómo trabajamos</h2>
        <ol className="mt-4 space-y-2 list-decimal pl-6 text-justify">
          <li><strong>Descubrimiento</strong>: casos de uso, perfiles, riesgos y KPIs.</li>
          <li><strong>Arquitectura & UX</strong>: módulos, flujos, modelos de datos y diseño visual.</li>
          <li><strong>Implementación</strong>: Next.js/React Native/Expo + integraciones; CI/CD con <em>preview</em>.</li>
          <li><strong>QA</strong>: funcional, accesibilidad, seguridad, performance y stores readiness.</li>
          <li><strong>Go-Live & handover</strong>: publicación, monitoreo y capacitación.</li>
        </ol>
      </section>

      {/* Base técnica */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="tecnica-app">
        <h2 id="tecnica-app" className="text-2xl font-bold">Base técnica</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Next.js (App Router)</strong> y/o <strong>React Native/Expo</strong> según el caso.</li>
          <li><strong>SSG/ISR</strong> y <strong>SSR</strong> selectivo; caché en CDN/edge y revalidación por etiqueta.</li>
          <li><strong>Seguridad</strong>: validación server-side (Zod), CSP/HSTS, CSRF, rate-limit, almacenamiento seguro.</li>
          <li><strong>Observabilidad</strong>: logs estructurados, tracing (OpenTelemetry/Sentry) y métricas.</li>
          <li><strong>Integraciones</strong>: REST/GraphQL, webhooks y colas con reintentos/DLQ.</li>
          <li><strong>Distribución</strong>: firmas, perfiles, CI/CD a stores, gestión de versiones y canal beta.</li>
        </ul>
      </section>

      {/* FAQs (coherentes con JSON-LD) */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="faq-app">
        <h2 id="faq-app" className="text-2xl font-bold">Preguntas frecuentes</h2>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">¿Publican en App Store y Google Play?</h3>
            <p className="text-justify">
              Sí. Gestionamos certificados, perfiles y cumplimiento de políticas para publicación y updates sin fricción.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Cómo manejan autenticación y permisos?</h3>
            <p className="text-justify">
              Implementamos OAuth2/OIDC con MFA y RBAC; sesiones seguras y mínimos privilegios por rol.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Funcionan sin conexión?</h3>
            <p className="text-justify">
              Sí. Diseñamos flujos offline-first con sincronización y manejo de conflictos cuando corresponde.
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
