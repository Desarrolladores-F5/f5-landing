import Link from "next/link";
import { Button } from "@/components/ui/button";
import RotatingBadge3D from "@/components/RotatingBadge3D";

export const metadata = {
  title: "Áurea — Documentación Laboral | F5",
  description: "Gestión escalable de documentación laboral por trabajador.",
  openGraph: { title: "Áurea — Documentación Laboral | F5", description: "Contratos, licencias, horarios y sueldos." },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Áurea</h1>
      <p className="mt-4 text-slate-600 max-w-prose">
        Control total de la documentación laboral: contratos, anexos, licencias, horarios y sueldos.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <RotatingBadge3D texturePath="/images/portfolio/i3.png" bg="transparent" />
        <ul className="space-y-3 text-slate-700">
          <li>• Contratos y anexos</li>
          <li>• Licencias médicas y horarios</li>
          <li>• Remuneraciones y documentos</li>
          <li>• Multiempresa y API</li>
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
