import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Academia Digital — Cursos, contenidos y certificación con trazabilidad",
  description:
    "Producto Academia Digital: plataforma de aprendizaje con contenidos modulares, evaluaciones, certificación, reportes y trazabilidad.",
};

export default function ProductoAcademia() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <Image
        src="/images/productos/p6.jpg"
        alt="Plataforma de aprendizaje y cursos online"
        width={1280}
        height={720}
        className="rounded-2xl mb-8 object-cover border"
        priority
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Academia Digital <span className="text-slate-400">/ LMS</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Implementamos una <strong>academia digital</strong> para formación interna o clientes, con
          <strong> contenidos modulares</strong>, <strong>evaluaciones</strong>, <strong>certificación</strong> y
          <strong> trazabilidad</strong> completa del aprendizaje.
        </p>
      </header>

      {/* PROBLEMA */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué problema resuelve?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Capacitaciones informales sin evidencia ni seguimiento.</li>
          <li>Dificultad para actualizar contenidos y versionarlos.</li>
          <li>Reportabilidad limitada sobre progreso y resultados.</li>
          <li>Falta de certificación y cumplimiento normativo.</li>
        </ul>
      </section>

      {/* RESULTADOS */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Resultados que puedes esperar</h2>
        <ul className="list-disc pl-6 text-justify">
          <li><strong>Escalabilidad</strong> en formación a equipos y clientes.</li>
          <li><strong>Visibilidad</strong> del progreso y tasas de aprobación.</li>
          <li><strong>Calidad</strong> por revisión y versionamiento de contenidos.</li>
          <li><strong>Cumplimiento</strong> con reportes y certificaciones.</li>
        </ul>
      </section>

      {/* PARA QUIÉN */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Para quién es?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Empresas que necesitan <strong>onboarding</strong> y capacitación continua.</li>
          <li>Organizaciones con <strong>requisitos de certificación</strong>.</li>
          <li>Marcas que monetizan <strong>cursos y contenidos</strong>.</li>
        </ul>
      </section>

      {/* QUÉ OBTIENES */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué obtienes exactamente?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li><strong>Gestión de cursos</strong>, módulos y lecciones.</li>
          <li><strong>Evaluaciones</strong>, bancos de preguntas y rúbricas.</li>
          <li><strong>Certificados</strong> (PDF) y badges digitales.</li>
          <li><strong>Reportes</strong> (progreso, finalización, puntajes).</li>
          <li><strong>Integraciones</strong> (SSO, pagos, email, CRM).</li>
        </ul>
      </section>

      {/* ALCANCE */}
      <section className="pt-10 mt-10 border-slate-200 border-t">
        <h2>Alcance y opciones</h2>
        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>Portal de alumnos, instructores y administración.</li>
          <li>Carga/edición de contenidos y evaluación.</li>
          <li>Emisión de certificados y reportabilidad.</li>
        </ul>
        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>E-commerce de cursos y pasarelas de pago.</li>
          <li>Integraciones con HR/ERP/CRM.</li>
          <li>Gamificación y foros.</li>
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
