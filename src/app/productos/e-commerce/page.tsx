import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "E-commerce — Tienda online escalable, segura y orientada a conversión",
  description:
    "Producto E-commerce: performance, SEO, seguridad y conversión. Carro confiable, medios de pago locales, catálogo administrable e integraciones.",
};

export default function ProductoEcommerce() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <Image
        src="/images/productos/p3.jpg"
        alt="Tienda online moderna mostrando catálogo y carrito"
        width={1280}
        height={720}
        className="rounded-2xl mb-8 object-cover border"
        priority
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          E-commerce <span className="text-slate-400">/ Tienda online</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Construimos <strong>tiendas online rápidas y seguras</strong>, con foco en conversión y operaciones:
          catálogo administrable, checkout confiable, <strong>medios de pago locales</strong> e integraciones con
          logística y analítica. Arquitectura escalable para crecer sin fricción.
        </p>
      </header>

      {/* PROPOSICIÓN DE VALOR */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué problema resuelve?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Velocidad insuficiente que afecta SEO y tasa de conversión en mobile.</li>
          <li>Checkout inestable o poco claro que genera abandono.</li>
          <li>Catálogo difícil de mantener y sin control de stock/variantes.</li>
          <li>Falta de medición confiable para optimizar campañas y remarketing.</li>
        </ul>
      </section>

      {/* RESULTADOS / BENEFICIOS */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Resultados que puedes esperar</h2>
        <ul className="list-disc pl-6 text-justify">
          <li><strong>Mayor conversión</strong> por performance, UX clara y checkout sólido.</li>
          <li><strong>Mejor SEO</strong> gracias a Core Web Vitals y estructura indexable.</li>
          <li><strong>Operación eficiente</strong>: catálogo, stock y precios administrables.</li>
          <li><strong>Atribución correcta</strong> en GA4/Ads para optimizar inversión.</li>
        </ul>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Para quién es este producto?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Tiendas que requieren <strong>base robusta</strong> para escalar catálogos y tráfico.</li>
          <li>Marcas con foco en <strong>performance y fidelización</strong>.</li>
          <li>Negocios que necesitan <strong>integraciones</strong> (ERP, logística, marketing).</li>
        </ul>
      </section>

      {/* QUÉ OBTIENES */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué obtienes exactamente?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li><strong>Catálogo</strong> con categorías, variantes (talla/color), stock y precios/reglas.</li>
          <li><strong>Carrito y checkout</strong> con validaciones y pasos claros.</li>
          <li><strong>Medios de pago</strong> locales/internacionales (ej. Transbank, Mercado Pago, Stripe).</li>
          <li><strong>Integraciones</strong> con despacho/logística y emails transaccionales.</li>
          <li><strong>SEO técnico</strong>: metadatos, Open Graph, sitemap/robots, schema de producto.</li>
          <li><strong>Medición</strong>: GA4 (view_item, add_to_cart, begin_checkout, purchase).</li>
          <li><strong>Documentación</strong> y capacitación para operar el día a día.</li>
        </ul>
      </section>

      {/* ALCANCE */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Alcance y opciones</h2>
        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>Home de tienda, listado de productos (PLP) y ficha de producto (PDP).</li>
          <li>Carrito, checkout, órdenes y emails transaccionales base.</li>
          <li>Gestión de catálogo y stock, imágenes optimizadas.</li>
        </ul>
        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>Cupones, gift cards, wishlist y productos relacionados.</li>
          <li>OMS/ERP, pricing dinámico, <em>bundles</em> y suscripciones.</li>
          <li>Search con sugerencias, filtros avanzados y reseñas.</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Cómo trabajamos</h2>
        <ol className="list-decimal pl-6 text-justify">
          <li><strong>Descubrimiento</strong>: catálogo, medios de pago, reglas y SLA.</li>
          <li><strong>UX/UI</strong>: arquitectura de información, flows y diseño visual.</li>
          <li><strong>Implementación</strong>: Next.js + integraciones y pruebas end-to-end.</li>
          <li><strong>QA</strong>: funcional, rendimiento (Web Vitals) y seguridad.</li>
          <li><strong>Go-Live</strong> y <strong>handover</strong>: monitoreo y documentación.</li>
        </ol>
      </section>

      {/* DETALLE TÉCNICO */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Base técnica</h2>
        <ul className="list-disc pl-6 text-justify">
          <li><strong>Next.js</strong> con SSG/ISR; SSR para PDP/checkout si aplica.</li>
          <li><strong>Optimización</strong> de imágenes con <code>next/image</code> para mejorar LCP.</li>
          <li><strong>Seguridad</strong>: validación server-side, rate-limit, cabeceras y cumplimiento.</li>
          <li><strong>Observabilidad</strong>: eventos GA4 de comercio electrónico y errores de cliente.</li>
          <li><strong>Escalabilidad</strong>: CDN/edge, caché y patrones de integración (webhooks/queues).</li>
        </ul>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Preguntas frecuentes</h2>
        <h3>¿Puedo administrar catálogo y precios?</h3>
        <p>Sí. Entregamos panel y guía de operación diaria.</p>
        <h3>¿Qué medios de pago soportan?</h3>
        <p>Implementamos los que requieras (ej. Transbank, Mercado Pago, Stripe) según tu país.</p>
        <h3>¿Cómo medimos resultados?</h3>
        <p>Activamos GA4 con eventos de e-commerce y te dejamos un checklist de objetivos/KPIs.</p>
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
