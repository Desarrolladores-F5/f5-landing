import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Web — Sitio corporativo que atrae, convierte y crece con tu negocio",
  description:
    "Producto Web: sitio corporativo en Next.js enfocado en resultados de negocio. Mensaje claro, SEO efectivo, rendimiento alto, accesibilidad y medición de conversiones.",
};

export default function ProductoWeb() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <Image
        src="/images/productos/p1.jpg"
        alt="Sitio web corporativo moderno renderizado en laptop"
        width={1280}
        height={720}
        className="rounded-2xl mb-8 object-cover border"
        priority
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Web <span className="text-slate-400">/ Sitio corporativo</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Nuestro producto <strong>Web</strong> es un sitio corporativo diseñado para <strong>atraer visitas
          calificadas</strong>, <strong>explicar con claridad tu propuesta de valor</strong> y <strong>convertir
          en contactos</strong>. Entregamos un activo digital rápido, accesible y fácil de escalar, con SEO técnico y
          medición de resultados desde el día uno.
        </p>
      </header>

      {/* PROPOSICIÓN DE VALOR */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué problema resuelve?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Mensajes dispersos o poco claros que no comunican el valor del negocio.</li>
          <li>Bajo tráfico orgánico por fundamentos SEO débiles o mal implementados.</li>
          <li>Velocidad deficiente en mobile que afecta la conversión y el posicionamiento.</li>
          <li>Dificultad para medir qué funciona: formularios sin tracking ni objetivos claros.</li>
        </ul>
      </section>

      {/* RESULTADOS / BENEFICIOS */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Resultados que puedes esperar</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>
            <strong>Más oportunidades calificadas</strong> gracias a arquitectura de contenidos y CTAs medibles.
          </li>
          <li>
            <strong>Tráfico orgánico creciente</strong> por SEO técnico correcto y contenidos indexables.
          </li>
          <li>
            <strong>Experiencia móvil superior</strong> (Core Web Vitals verdes) que reduce rebote.
          </li>
          <li>
            <strong>Gobernanza</strong>: editoriales simples, documentación y handover para operar sin fricción.
          </li>
        </ul>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Para quién es este producto?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Empresas que necesitan <strong>sentar base digital</strong> seria y escalable.</li>
          <li>Equipos comerciales/marketing que requieren <strong>medición de leads</strong> y campañas.</li>
          <li>Organizaciones que valoran <strong>seguridad, cumplimiento y rendimiento</strong>.</li>
        </ul>
      </section>

      {/* QUÉ OBTIENES */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué obtienes exactamente?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>
            <strong>Story de marca y mensajes base</strong> (propuesta de valor, pruebas sociales y objeciones).
          </li>
          <li>
            <strong>Diseño responsivo</strong> con guía visual y componentes reutilizables.
          </li>
          <li>
            <strong>Formularios con validación server-side</strong>, protección anti-spam y <em>tracking</em> de eventos.
          </li>
          <li>
            <strong>SEO técnico</strong>: metadatos, sitemap/robots, canonical, Open Graph y datos estructurados.
          </li>
          <li>
            <strong>Medición</strong>: GA4 (eventos de CTA, scroll, envíos) y tablero de KPIs sugerido.
          </li>
          <li>
            <strong>Documentación operativa</strong> y capacitación breve para el equipo.
          </li>
        </ul>
      </section>

      {/* PLANES (sin precios) */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Alcance y opciones</h2>
        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>Páginas: Home, Nosotros, Servicios, Casos/Clientes, Contacto, Legales.</li>
          <li>Navegación clara, accesibilidad (WCAG AA) y contenidos editables.</li>
          <li>Despliegue en Vercel (o equivalente), dominio y SSL gestionados.</li>
        </ul>
        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>Blog (listado + artículo) con estructura SEO.</li>
          <li>Multi-idioma (i18n) y localización.</li>
          <li>CMS <em>headless</em> para flujos editoriales complejos.</li>
          <li>Integraciones (CRM, formularios avanzados, chat, analítica adicional).</li>
        </ul>
      </section>

      {/* PROCESO EN LENGUAJE DE NEGOCIO */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Cómo trabajamos</h2>
        <ol className="list-decimal pl-6 text-justify">
          <li><strong>Descubrimiento</strong>: objetivos, público, mensajes clave y sitemap.</li>
          <li><strong>UX/UI</strong>: wireframes, diseño visual y revisión colaborativa.</li>
          <li><strong>Implementación</strong>: Next.js con CI/CD y ambientes de <em>preview</em>.</li>
          <li><strong>QA</strong>: funcional, accesibilidad y rendimiento (Web Vitals).</li>
          <li><strong>Go-Live</strong> y <strong>handover</strong>: despliegue, documentación y capacitación.</li>
        </ol>
      </section>

      {/* DETALLE TÉCNICO (ABAJO) */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Base técnica</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>
            <strong>Next.js</strong> (App Router) con <strong>SSG/ISR</strong> para respuesta rápida e indexación; <strong>SSR</strong> cuando se requiera contenido dinámico.
          </li>
          <li>
            <strong>Optimización de imágenes</strong> con <code>next/image</code> y control de prioridad para mejorar LCP.
          </li>
          <li>
            <strong>Accesibilidad</strong>: semántica correcta, foco visible, ARIA y navegación por teclado.
          </li>
          <li>
            <strong>Seguridad</strong>: validación server-side (Zod), rate-limit, honeypots y cabeceras (CSP, HSTS, etc.).
          </li>
          <li>
            <strong>Infraestructura</strong>: CDN/edge, cacheo efectivo y dominios/SSL administrados.
          </li>
        </ul>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Preguntas frecuentes</h2>
        <h3>¿Podremos editar contenidos sin depender del equipo técnico?</h3>
        <p>Sí. Dejamos secciones editables y una guía para actualizar textos, imágenes y metadatos. Si requieres flujo editorial, integramos un CMS.</p>
        <h3>¿Cómo mediremos el impacto?</h3>
        <p>Instrumentamos eventos en GA4 (envíos, clics, scroll) y proponemos un tablero de KPIs. Acordamos objetivos de conversión desde el inicio.</p>
        <h3>¿Es escalable?</h3>
        <p>La base permite crecer a blog, i18n, integraciones y portal de clientes sin rehacer el sitio.</p>
      </section>

      {/* CTAs */}
      <div className="pt-10 mt-10 border-t border-slate-200 not-prose flex flex-wrap gap-3">
        <Button asChild size="lg" className="rounded-2xl">
          <Link href="/#contact">Solicitar propuesta</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-2xl">
          <Link href="/productos">← Ver todos los productos</Link>
        </Button>
        <Button asChild variant="ghost" size="lg" className="rounded-2xl">
          <Link href="/">← Ir al inicio</Link>
        </Button>
      </div>
    </article>
  );
}
