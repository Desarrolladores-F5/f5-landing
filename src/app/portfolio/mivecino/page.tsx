import Link from "next/link";
import { Button } from "@/components/ui/button";
import RotatingBadge3D from "@/components/RotatingBadge3D";

export const metadata = {
  title: "Mi Vecino — Conectando a tu comunidad | F5",
  description: "App de seguridad y cooperación barrial con alarmas y muro de publicaciones.",
  openGraph: { title: "Mi Vecino — Conectando a tu comunidad | F5", description: "Seguridad y colaboración en tu barrio." },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Mi Vecino</h1>
      <p className="mt-4 text-slate-600 max-w-prose">
        Seguridad y cooperación en tu barrio: alarmas, publicaciones y reportes en tiempo real.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <RotatingBadge3D texturePath="/images/portfolio/i2.png" bg="transparent" />
        <ul className="space-y-3 text-slate-700">
          <li>• Alarmas generales y silenciosas</li>
          <li>• Muro de publicaciones y avisos</li>
          <li>• Reportes de incidentes</li>
          <li>• Gestión de comunidad</li>
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
