// app/blog/ci-cd-nextjs-mejores-practicas/page.tsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const POST = {
  title: "Mejores prácticas para CI/CD en Next.js",
  slug: "ci-cd-nextjs-mejores-practicas",
  url: "https://tudominio.com/blog/ci-cd-nextjs-mejores-practicas",
  image: "https://tudominio.com/images/blog/b2.jpg",
  description:
    "Estrategia de ramas, checks automáticos, despliegue y rollback con pipelines reproducibles en Next.js.",
  datePublished: "2025-08-28", // YYYY-MM-DD (ajusta)
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
    images: [{ url: POST.image, width: 1280, height: 720, alt: "Pipeline de CI/CD para Next.js" }],
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
          <li className="text-slate-900 font-medium" aria-current="page">{POST.title}</li>
        </ol>
      </nav>

      {/* Título + meta */}
      <header className="mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
          {POST.title}
        </h1>
        <p className="mt-5 text-lg text-slate-600 max-w-3xl text-justify">
          Una cadena de <strong>CI/CD</strong> (Integración Continua y Despliegue Continuo) bien implementada es el
          puente entre tu equipo y tus usuarios finales. No solo mejora la eficiencia técnica, también impacta
          directamente en el negocio: más velocidad de entrega, reducción de errores, mejor colaboración y mayor
          confianza en cada versión publicada.
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
        src="/images/blog/b2.jpg"
        alt="Pipeline de CI/CD para Next.js"
        width={1280}
        height={720}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
        className="rounded-2xl mb-10 object-cover border"
      />

      {/* Contenido */}
      <div
        className={[
          "prose prose-slate md:prose-lg max-w-none",
          "prose-headings:scroll-mt-24",
          "prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:font-bold prose-h2:tracking-tight",
          "prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-semibold prose-h3:tracking-tight",
          "prose-p:text-justify prose-li:text-justify prose-blockquote:text-justify",
        ].join(" ")}
      >
        {/* Beneficios */}
        <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="beneficios">
          <h2 id="beneficios">Beneficios directos para tu empresa</h2>
          <p>
            Implementar CI/CD en Next.js no es solo una mejora técnica: sus impactos son visibles en negocio y clientes.
          </p>
          <ul>
            <li>
              <strong>Menos incidentes en producción:</strong> validaciones automáticas detectan errores antes, evitando
              interrupciones y pérdidas.
            </li>
            <li>
              <strong>Feedback más rápido:</strong> cada PR genera <em>previews</em> para validar cambios visuales y funcionales.
            </li>
            <li>
              <strong>Riesgo controlado:</strong> <em>feature flags</em> y <em>rollback</em> inmediato para minimizar impacto.
            </li>
            <li>
              <strong>Escalabilidad del equipo:</strong> estándares comunes reducen fricción entre dev, QA y operaciones.
            </li>
          </ul>
        </section>

        {/* Flujo */}
        <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="flujo">
          <h2 id="flujo">Flujo recomendado de CI/CD</h2>
          <p>Un pipeline robusto sigue pasos claros que aseguran calidad y control en cada release:</p>
          <ol>
            <li><strong>Feature:</strong> rama <code>feature/*</code> y PR hacia <code>develop</code>.</li>
            <li><strong>Checks automáticos:</strong> typecheck, lint, tests, build y preview.</li>
            <li><strong>Integración:</strong> al aprobar el PR, el merge en <code>develop</code> dispara CI.</li>
            <li><strong>Release:</strong> merge en <code>main</code> (protegida) despliega a producción.</li>
            <li><strong>Monitoreo:</strong> health checks + auto-rollback ante fallos.</li>
          </ol>
          <blockquote>
            💡 <strong>Tip:</strong> usa <em>concurrency</em> para cancelar pipelines obsoletos y habilita{" "}
            <code>branch protection</code> en <code>main</code>.
          </blockquote>
        </section>

        {/* Estrategia de ramas */}
        <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="ramas">
          <h2 id="ramas">Estrategia de ramas recomendada</h2>
          <p>Mantén el ciclo ordenado para reducir conflictos e inconsistencias:</p>
          <ul>
            <li><code>main</code> → producción (protegida, requiere revisiones y checks).</li>
            <li><code>develop</code> → integración/QA, validación previa a release.</li>
            <li><code>feature/*</code> → trabajo diario con PRs hacia <code>develop</code>.</li>
            <li><code>hotfix/*</code> (opcional) → correcciones urgentes a producción.</li>
          </ul>
        </section>

        {/* Checks */}
        <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="checks">
          <h2 id="checks">Checks mínimos que deben pasar</h2>
          <p>Controles imprescindibles en cada pipeline:</p>
          <ul>
            <li><strong>Typecheck:</strong> <code>tsc --noEmit</code></li>
            <li><strong>Lint:</strong> <code>next lint</code></li>
            <li><strong>Tests:</strong> unitarias/integración (Vitest/Jest + RTL)</li>
            <li><strong>Build:</strong> <code>next build</code></li>
          </ul>
        </section>

        {/* Pipeline */}
        <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="pipeline-gha">
          <h2 id="pipeline-gha">Pipeline en GitHub Actions (ejemplo)</h2>
          <p>Valida tipado, lint, tests y build en cada <em>push</em>/PR:</p>
          <pre>
            <code>{`name: ci

on:
  pull_request:
    branches: [develop, main]
  push:
    branches: [develop, main]

concurrency:
  group: \${{ github.workflow }}-\${{ github.ref }}
  cancel-in-progress: true

jobs:
  ci:
    name: Lint • Test • Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install
        run: npm ci

      - name: Typecheck
        run: npm run typecheck || true

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm test --if-present

      - name: Build
        run: npm run build`}</code>
          </pre>
        </section>

        {/* Conclusión */}
        <section className="pt-10 mt-10 border-t border-slate-200" aria-labelledby="conclusion">
          <h2 id="conclusion">Conclusión</h2>
          <p className="text-justify">
            Adoptar CI/CD en Next.js es invertir en velocidad, calidad y seguridad. Con un pipeline sólido podrás
            entregar funcionalidades más rápido, minimizar riesgos en producción y mantener la confianza de tus clientes.
            Define estrategia de ramas, automatiza checks y habilita rollback inmediato para enfocarte en crear valor.
          </p>
        </section>
      </div>

      {/* Acciones */}
      <div className="not-prose flex flex-wrap items-center gap-3 pt-12 mt-12 border-t border-slate-200">
        <Button asChild size="lg" className="rounded-2xl">
          <Link href="/blog">← Volver al Blog</Link>
        </Button>
      </div>
    </article>
  );
}
