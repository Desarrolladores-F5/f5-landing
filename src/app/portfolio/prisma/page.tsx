import Link from "next/link";
import { Button } from "@/components/ui/button";
import RotatingBadge3D from "@/components/RotatingBadge3D";

export const metadata = {
  title: "Prisma — Plataforma de Prevención, Integridad y Seguridad | F5",
  description:
    "Plataforma integral para gestión de riesgos laborales, cumplimiento normativo (Ley Karin N° 21.643), auditorías, EPP, capacitaciones y trazabilidad end-to-end.",
  openGraph: {
    title: "Prisma — Plataforma de Prevención, Integridad y Seguridad | F5",
    description:
      "Gestión integral de riesgos y cumplimiento con trazabilidad, seguridad y automatización de informes.",
  },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Prisma</h1>

      {/* Intro */}
      <p className="mt-4 text-slate-600 text-justify leading-relaxed w-full">
        Plataforma de <strong>gestión de riesgos, integridad y seguridad</strong> orientada a
        <strong> cumplimiento normativo</strong> (incluida la Ley Karin N° 21.643), con
        <em> trazabilidad completa</em> de incidentes, auditorías, EPP, capacitaciones y documentación.
        Optimizada para <strong>operación en producción</strong> con arquitectura escalable, control de accesos por rol
        y generación automática de evidencia.
      </p>

      {/* Hero: Badge + bullets de valor */}
      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="mx-auto w-full max-w-xs">
          <RotatingBadge3D texturePath="/images/portfolio/i1.png" bg="transparent" />
        </div>

        {/* Lista de capacidades */}
        <ul className="space-y-3 text-slate-700 text-justify leading-relaxed w-full">
          <li>• <strong>Auditorías internas</strong>, no conformidades y <strong>medidas correctivas</strong></li>
          <li>• <strong>Gestión de incidentes y denuncias</strong> (Ley Karin): confidencialidad, plazos y resguardos</li>
          <li>• <strong>EPP</strong>: entrega, vencimientos, reposición y <strong>trazabilidad por trabajador</strong></li>
          <li>• <strong>Capacitaciones</strong>: programación, asistencia, certificación y renovaciones</li>
          <li>• <strong>Documentación y firmas digitales</strong>: control de versiones y generación de <strong>PDF</strong></li>
          <li>• <strong>Notificaciones</strong> y alertas (vencimientos, incidentes, auditorías)</li>
          <li>• <strong>Estadísticas</strong> y análisis: indicadores, tendencias y exportaciones</li>
          <li>• <strong>Usuarios/roles</strong> con trazabilidad de acciones (bitácora)</li>
        </ul>
      </div>

      {/* Módulos funcionales (resumen ejecutivo técnico) */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">Cobertura funcional</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Incidentes, Riesgos y Denuncias (Ley Karin)</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Registro end-to-end, confidencialidad, asignación de responsables, plazos y medidas de resguardo.
              Evidencia auditable para fiscalización y seguimiento.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Auditorías y Cumplimiento</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Planificación, ejecución, observaciones, no conformidades y <em>CAPA</em> (acciones correctivas/preventivas), con
              historial y control de cierres.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">EPP y Capacitación</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Entrega y vencimientos por trabajador, inventario básico, programación de cursos, asistencia y certificaciones.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Documentación y Firmas</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Protocolos, reglamentos y actas con control de versiones, <strong>firmas digitales</strong> y generación automática de PDF.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Notificaciones y KPIs</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Alertas por vencimientos, auditorías, incidentes y renovaciones; dashboard con indicadores y exportaciones.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Accesos y Trazabilidad</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Control de acceso por rol (administrador, supervisor, trabajador) y <strong>bitácora de cambios</strong> para auditoría.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <div className="pt-10 mt-12 border-t border-slate-200 not-prose flex flex-wrap gap-3">
        <Button asChild size="lg" className="rounded-2xl">
          <Link href="/#contact">Solicitar propuesta</Link>
        </Button>
        <Button asChild variant="ghost" size="lg" className="rounded-2xl">
          <Link href="/">← Ir al inicio</Link>
        </Button>
      </div>
    </main>
  );
}
