import Link from "next/link";
import { Button } from "@/components/ui/button";
import RotatingBadge3D from "@/components/RotatingBadge3D";

export const metadata = {
  title: "Áurea — Gestión de Documentación Laboral | F5",
  description:
    "Plataforma integral para la gestión de contratos, anexos, licencias, horarios, remuneraciones y documentación laboral con trazabilidad y cumplimiento normativo.",
  openGraph: {
    title: "Áurea — Gestión de Documentación Laboral | F5",
    description:
      "Gestión escalable de contratos, licencias, horarios, remuneraciones y trazabilidad documental.",
  },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Áurea</h1>

      {/* Intro */}
      <p className="mt-4 text-slate-600 text-justify leading-relaxed w-full">
        <strong>Áurea</strong> es una plataforma diseñada para centralizar y automatizar la{" "}
        <strong>gestión de documentación laboral</strong>, garantizando cumplimiento normativo,
        seguridad de la información y trazabilidad de cada registro. Control total de{" "}
        <em>contratos, anexos, licencias médicas, jornadas de trabajo y remuneraciones</em>,
        con soporte multiempresa y API para integraciones externas.
      </p>

      {/* Hero: Badge + bullets de valor */}
      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="mx-auto w-full max-w-xs">
          <RotatingBadge3D texturePath="/images/portfolio/i3.png" bg="transparent" />
        </div>

        <ul className="space-y-3 text-slate-700 text-justify leading-relaxed w-full">
          <li>• <strong>Contratos y anexos</strong>: digitalización, control de versiones y firma electrónica</li>
          <li>• <strong>Licencias médicas y horarios</strong>: registro, validación y seguimiento en línea</li>
          <li>• <strong>Remuneraciones y documentos</strong>: liquidaciones, comprobantes y trazabilidad por trabajador</li>
          <li>• <strong>Multiempresa y API</strong>: gestión centralizada con integraciones externas seguras</li>
        </ul>
      </div>

      {/* Módulos funcionales */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">Cobertura funcional</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Gestión documental completa</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Centralización de contratos, anexos, reglamentos internos y otros documentos laborales
              con control de versiones y acceso seguro por rol.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Remuneraciones y asistencia</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Administración de liquidaciones de sueldo, comprobantes, registro de asistencia
              y generación de reportes automatizados para auditoría.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Licencias y jornadas</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Registro de licencias médicas, control de horarios de trabajo, horas extras y descansos,
              con validaciones automáticas según normativa laboral.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Multiempresa e integraciones</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Plataforma adaptable para múltiples razones sociales, con API para integraciones a
              sistemas externos de RRHH, ERP o contabilidad.
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
