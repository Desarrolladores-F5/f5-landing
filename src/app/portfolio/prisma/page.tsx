import Link from "next/link";
import { Button } from "@/components/ui/button";
import RotatingBadge3D from "@/components/RotatingBadge3D";

export const metadata = {
  title: "Prisma — Prevención de Riesgos | F5",
  description: "Plataforma 100% online para prevención de riesgos y cumplimiento.",
  openGraph: { title: "Prisma — Prevención de Riesgos | F5", description: "Control integral de prevención de riesgos." },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Prisma</h1>
      <p className="mt-4 text-slate-600 max-w-prose">
        Plataforma 100% online para prevención de riesgos y cumplimiento normativo.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <RotatingBadge3D texturePath="/images/portfolio/i1.png" bg="transparent" />
        <ul className="space-y-3 text-slate-700">
          <li>• Matrices de riesgo y hallazgos</li>
          <li>• Auditorías, planes de acción y reportes</li>
          <li>• Usuarios, roles y trazabilidad</li>
          <li>• Integraciones y exportaciones</li>
        </ul>
      </div>

      {/* CTAs */}
      <div className="pt-10 mt-10 border-t border-slate-200 not-prose flex flex-wrap gap-3">
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
