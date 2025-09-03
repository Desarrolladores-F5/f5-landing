import Link from "next/link";
import { Button } from "@/components/ui/button";
import RotatingBadge3D from "@/components/RotatingBadge3D";

export const metadata = {
  title: "Mi Vecino — Seguridad y Cooperación Comunitaria | F5",
  description:
    "Aplicación móvil de seguridad y colaboración vecinal con alarmas, reportes, muro de publicaciones y gestión de comunidad.",
  openGraph: {
    title: "Mi Vecino — Seguridad y Cooperación Comunitaria | F5",
    description:
      "App para fortalecer la seguridad barrial mediante alarmas comunitarias, reportes en tiempo real y comunicación entre vecinos.",
  },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Mi Vecino</h1>

      {/* Intro */}
      <p className="mt-4 text-slate-600 text-justify leading-relaxed w-full">
        <strong>Mi Vecino</strong> es una aplicación enfocada en la{" "}
        <strong>seguridad y cooperación comunitaria</strong>, diseñada para
        fortalecer la comunicación entre vecinos y mejorar la capacidad de
        respuesta ante emergencias. La plataforma integra{" "}
        <em>alarmas comunitarias, reportes de incidentes en tiempo real,
        publicaciones y gestión de comunidad</em>, optimizando la organización
        barrial con herramientas digitales accesibles y seguras.
      </p>

      {/* Hero: Badge + bullets */}
      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="mx-auto w-full max-w-xs">
          <RotatingBadge3D texturePath="/images/portfolio/i2.png" bg="transparent" />
        </div>

        <ul className="space-y-3 text-slate-700 text-justify leading-relaxed w-full">
          <li>• <strong>Alarmas comunitarias</strong>: activación de alarmas generales y silenciosas en caso de emergencia</li>
          <li>• <strong>Muro de publicaciones</strong>: avisos, noticias y anuncios relevantes para la comunidad</li>
          <li>• <strong>Reportes de incidentes</strong>: denuncias rápidas con ubicación, fotos y descripción</li>
          <li>• <strong>Gestión de comunidad</strong>: administración de vecinos, roles y grupos de seguridad</li>
        </ul>
      </div>

      {/* Módulos funcionales */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">Cobertura funcional</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Alarmas comunitarias</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Posibilidad de activar alarmas de alerta general o silenciosa,
              notificando instantáneamente a todos los vecinos y coordinadores
              del sector.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Muro de publicaciones</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Espacio digital compartido para publicar avisos, noticias locales
              y recordatorios, fomentando la comunicación y participación activa
              entre vecinos.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Reportes en tiempo real</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Registro inmediato de incidentes con detalles, ubicación GPS e
              imágenes, generando trazabilidad para mejorar la respuesta de la
              comunidad y autoridades.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-medium">Gestión de comunidad</h3>
            <p className="mt-2 text-sm text-slate-600 text-justify leading-relaxed w-full">
              Administración de vecinos, roles y permisos; coordinación de
              grupos de seguridad; trazabilidad de acciones y auditoría de
              publicaciones.
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
