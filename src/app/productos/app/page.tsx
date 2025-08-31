import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "App — Aplicaciones móviles y web apps seguras, performantes y escalables",
  description:
    "Producto App: diseño y desarrollo de aplicaciones móviles y web apps con arquitectura escalable, seguridad by design e integraciones.",
};

export default function ProductoApp() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <Image
        src="/images/productos/p4.jpg"
        alt="Aplicación móvil y web app moderna"
        width={1280}
        height={720}
        className="rounded-2xl mb-8 object-cover border"
        priority
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          App <span className="text-slate-400">/ Aplicaciones móviles y web apps</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Diseñamos y desarrollamos <strong>apps seguras y performantes</strong>, con foco en UX, escalabilidad e
          integraciones. Entregamos pipelines CI/CD, monitoreo y <em>observabilidad</em> para operar con confianza.
        </p>
      </header>

      {/* PROBLEMA */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué problema resuelve?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Experiencias inconsistentes entre móvil y web.</li>
          <li>Falta de arquitectura para crecer en usuarios y features.</li>
          <li>Carencia de trazabilidad, monitoreo y control de errores.</li>
          <li>Integraciones dispersas que frenan la operación.</li>
        </ul>
      </section>

      {/* RESULTADOS */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Resultados que puedes esperar</h2>
        <ul className="list-disc pl-6 text-justify">
          <li><strong>Experiencia fluida</strong> (rendimiento y UX consistentes).</li>
          <li><strong>Entrega continua</strong> con ambientes de <em>preview</em> y releases controlados.</li>
          <li><strong>Telemetría y alertas</strong> para decisiones informadas.</li>
          <li><strong>Integraciones sólidas</strong> con APIs/servicios existentes.</li>
        </ul>
      </section>

      {/* PARA QUIÉN */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Para quién es?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Equipos que necesitan <strong>apps core de negocio</strong>.</li>
          <li>Startups en fase de <strong>crecimiento</strong> y <strong>escalamiento</strong>.</li>
          <li>Organizaciones que exigen <strong>seguridad y cumplimiento</strong>.</li>
        </ul>
      </section>

      {/* QUÉ OBTIENES */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué obtienes exactamente?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li><strong>Arquitectura</strong> (monorepo opcional, módulos y dominios).</li>
          <li><strong>Autenticación y autorización</strong> (OAuth2/OIDC, RBAC).</li>
          <li><strong>Offline-first</strong> y sync donde aplique.</li>
          <li><strong>Analytics</strong> y eventos de producto (telemetría, funnels).</li>
          <li><strong>Documentación</strong> y handover para operación.</li>
        </ul>
      </section>

      {/* ALCANCE */}
      <section className="pt-10 mt-10 border-slate-200 border-t">
        <h2>Alcance y opciones</h2>
        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>Diseño UX/UI, navegación, estados y almacenamiento seguro.</li>
          <li>CI/CD con versiones y <em>rollbacks</em> controlados.</li>
          <li>Monitoreo de errores y rendimiento (RUM).</li>
        </ul>
        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>Notificaciones push, deep links, widgets.</li>
          <li>Integraciones con SDKs (pagos, mapas, biometría).</li>
          <li>Testing E2E y automatización adicional.</li>
        </ul>
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
