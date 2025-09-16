import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academia Digital — Cursos, contenidos y certificación con trazabilidad",
  description:
    "LMS en Next.js para formación interna o clientes: contenidos modulares, evaluaciones, certificación, reportes y trazabilidad integral.",
  keywords: [
    "LMS",
    "academia digital",
    "cursos online",
    "evaluaciones",
    "certificación",
    "onboarding",
    "reportes",
    "Next.js",
    "GA4",
    "SSO",
  ],
  alternates: { canonical: "/productos/academia" },
  openGraph: {
    type: "website",
    url: "https://tudominio.com/productos/academia",
    title: "Academia Digital — LMS con certificación y trazabilidad",
    description:
      "Plataforma de aprendizaje con módulos, evaluaciones, certificados y reportes para cumplimiento y crecimiento.",
    images: [
      {
        url: "https://tudominio.com/images/productos/p6.jpg",
        width: 1280,
        height: 720,
        alt: "Plataforma de aprendizaje y cursos online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academia Digital — LMS con certificación y trazabilidad",
    description:
      "Contenidos modulares, evaluaciones, certificados PDF, analítica y SSO.",
    images: ["https://tudominio.com/images/productos/p6.jpg"],
  },
};

export default function ProductoAcademia() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* === JSON-LD: Service + FAQPage === */}
      <Script id="ld-service-academia" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Implementación de LMS (Academia Digital)",
          serviceType: "LMS",
          areaServed: "CL",
          provider: { "@type": "Organization", name: "F5", url: "https://tudominio.com" },
          description:
            "Academia digital con contenidos modulares, evaluaciones, certificados y reportes, integrada por SSO/APIs.",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceSpecification: { "@type": "PriceSpecification", priceCurrency: "CLP" },
          },
          url: "https://tudominio.com/productos/academia",
        })}
      </Script>

      <Script id="ld-faq-academia" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Puedo emitir certificados automáticamente?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. Al aprobar evaluaciones y cumplir requisitos, se emiten certificados en PDF y se registran como evidencia.",
              },
            },
            {
              "@type": "Question",
              name: "¿Se integra con SSO y otros sistemas?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sí. Integramos SSO (OIDC/SAML) y conectamos con ERP/HR/CRM vía APIs o webhooks para sincronizar usuarios y progreso.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cómo medimos el aprendizaje y la adopción?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Activamos GA4 y reportes nativos con métricas de progreso, finalización, puntajes, tiempo en curso y embudos.",
              },
            },
          ],
        })}
      </Script>

      {/* Hero */}
      <Image
        src="/images/productos/p6.jpg"
        alt="Plataforma de aprendizaje y cursos online"
        width={1280}
        height={720}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
        className="mb-8 rounded-2xl border object-cover"
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Academia Digital <span className="text-slate-400">/ LMS</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Implementamos una <strong>academia digital</strong> para formación interna o de clientes, con{" "}
          <strong>contenidos modulares</strong>, <strong>evaluaciones</strong>,{" "}
          <strong>certificación</strong> y <strong>trazabilidad</strong> completa del aprendizaje.
        </p>
      </header>

      {/* ¿Qué problema resuelve? */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="problema-academia">
        <h2 id="problema-academia" className="text-2xl font-bold">¿Qué problema resuelve?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Capacitaciones informales sin evidencia ni seguimiento.</li>
          <li>Dificultad para actualizar, versionar y controlar calidad de contenidos.</li>
          <li>Reportabilidad limitada sobre progreso y resultados.</li>
          <li>Falta de certificación y cumplimiento normativo.</li>
        </ul>
      </section>

      {/* Resultados esperados */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="resultados-academia">
        <h2 id="resultados-academia" className="text-2xl font-bold">Resultados que puedes esperar</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Escalabilidad</strong> en formación a equipos y clientes.</li>
          <li><strong>Visibilidad</strong> del progreso y tasas de aprobación.</li>
          <li><strong>Calidad</strong> por revisión y versionamiento de contenidos.</li>
          <li><strong>Cumplimiento</strong> con reportes y certificaciones automáticas.</li>
        </ul>
      </section>

      {/* Para quién es */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="para-quien-academia">
        <h2 id="para-quien-academia" className="text-2xl font-bold">¿Para quién es?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li>Empresas que requieren <strong>onboarding</strong> y capacitación continua.</li>
          <li>Organizaciones con <strong>requisitos de certificación</strong> o compliance.</li>
          <li>Marcas que monetizan <strong>cursos y contenidos</strong> propios.</li>
        </ul>
      </section>

      {/* Qué obtienes */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="obtienes-academia">
        <h2 id="obtienes-academia" className="text-2xl font-bold">¿Qué obtienes exactamente?</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Gestión de cursos</strong>: planes, módulos, lecciones y prerequisitos.</li>
          <li><strong>Evaluaciones</strong>: bancos de preguntas, intentos, rúbricas y retroalimentación.</li>
          <li><strong>Certificados</strong> (PDF) y badges digitales con verificación.</li>
          <li><strong>Reportes</strong>: progreso, finalización, puntajes y tiempo dedicado.</li>
          <li><strong>Integraciones</strong>: SSO (OIDC/SAML), pagos, email, CRM/HR.</li>
        </ul>
      </section>

      {/* Alcance y opciones */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="alcance-academia">
        <h2 id="alcance-academia" className="text-2xl font-bold">Alcance y opciones</h2>

        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>Portales de alumno, instructor y administración.</li>
          <li>Carga/edición de contenidos, evaluaciones y certificados.</li>
          <li>Reportabilidad estándar y dashboards base.</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="mt-2 space-y-2 list-disc pl-6 text-justify">
          <li>E-commerce de cursos y pasarelas de pago.</li>
          <li>Integraciones HR/ERP/CRM y data warehouse.</li>
          <li>Gamificación, foros y mensajería.</li>
        </ul>
      </section>

      {/* Proceso */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="proceso-academia">
        <h2 id="proceso-academia" className="text-2xl font-bold">Cómo trabajamos</h2>
        <ol className="mt-4 space-y-2 list-decimal pl-6 text-justify">
          <li><strong>Descubrimiento</strong>: perfiles, objetivos, KPIs y mapa curricular.</li>
          <li><strong>Diseño instruccional & UX</strong>: secuencias, actividades y accesibilidad.</li>
          <li><strong>Implementación</strong>: Next.js + módulos LMS, CI/CD y entornos de <em>preview</em>.</li>
          <li><strong>QA</strong>: funcional, accesibilidad, rendimiento y seguridad.</li>
          <li><strong>Go-Live & handover</strong>: despliegue, documentación y capacitación.</li>
        </ol>
      </section>

      {/* Base técnica */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="tecnica-academia">
        <h2 id="tecnica-academia" className="text-2xl font-bold">Base técnica</h2>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-justify">
          <li><strong>Next.js (App Router)</strong> con <strong>SSG/ISR</strong> y <strong>SSR</strong> selectivo.</li>
          <li><strong>Optimización</strong> de imágenes con <code>next/image</code> para LCP verde.</li>
          <li><strong>Accesibilidad</strong>: semántica, foco visible, ARIA y teclado (WCAG AA).</li>
          <li><strong>Seguridad</strong>: validación server-side (Zod), CSP/HSTS, rate-limit y CSRF.</li>
          <li><strong>Integraciones</strong>: REST/GraphQL, webhooks y SSO (OIDC/SAML).</li>
          <li><strong>Observabilidad</strong>: GA4 (view, progress, completion), logging y tracing.</li>
        </ul>
      </section>

      {/* FAQs (coherentes con JSON-LD) */}
      <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="faq-academia">
        <h2 id="faq-academia" className="text-2xl font-bold">Preguntas frecuentes</h2>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">¿Puedo emitir certificados automáticamente?</h3>
            <p className="text-justify">
              Sí. Al aprobar evaluaciones y cumplir requisitos, se emiten certificados en PDF y quedan trazados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Se integra con SSO y otros sistemas?</h3>
            <p className="text-justify">
              Sí. Integramos SSO (OIDC/SAML) y conectamos con HR/CRM/ERP por APIs o webhooks.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">¿Cómo medimos el aprendizaje?</h3>
            <p className="text-justify">
              Activamos GA4 y reportes nativos con progreso, finalización, puntajes y tiempo en curso.
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
