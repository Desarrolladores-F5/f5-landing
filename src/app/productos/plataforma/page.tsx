import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Plataforma — Solución todo-en-uno con módulos, permisos e integraciones",
  description:
    "Producto Plataforma: solución modular y escalable con seguridad por capas, roles/permisos, integraciones y reporting.",
};

export default function ProductoPlataforma() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <Image
        src="/images/productos/p5.jpg"
        alt="Plataforma empresarial modular"
        width={1280}
        height={720}
        className="rounded-2xl mb-8 object-cover border"
        priority
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Plataforma <span className="text-slate-400">/ Todo en uno</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Unificamos procesos en una <strong>plataforma modular</strong> con <strong>seguridad por capas</strong>,
          <strong> roles y permisos</strong>, y <strong>reportabilidad</strong>. Diseñada para integrar sistemas y
          <strong> escalar</strong> sin fricción.
        </p>
      </header>

      {/* PROBLEMA */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué problema resuelve?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Procesos distribuidos en múltiples herramientas.</li>
          <li>Falta de control de accesos y trazabilidad.</li>
          <li>Duplicidad de datos y esfuerzos manuales.</li>
          <li>Reporting limitado para la toma de decisiones.</li>
        </ul>
      </section>

      {/* RESULTADOS */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>Resultados que puedes esperar</h2>
        <ul className="list-disc pl-6 text-justify">
          <li><strong>Eficiencia operativa</strong> por unificación y automatización.</li>
          <li><strong>Gobernanza</strong> con permisos granulares y auditoría.</li>
          <li><strong>Datos confiables</strong> y consistentes entre sistemas.</li>
          <li><strong>KPIs claros</strong> con reporting y tableros.</li>
        </ul>
      </section>

      {/* PARA QUIÉN */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Para quién es?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li>Empresas que requieren <strong>plataforma central</strong> de operación.</li>
          <li>Organizaciones con <strong>múltiples áreas y permisos</strong>.</li>
          <li>Equipos que necesitan <strong>integrar</strong> sistemas heredados y nuevos.</li>
        </ul>
      </section>

      {/* QUÉ OBTIENES */}
      <section className="pt-10 mt-10 border-t border-slate-200">
        <h2>¿Qué obtienes exactamente?</h2>
        <ul className="list-disc pl-6 text-justify">
          <li><strong>Módulos</strong> por dominio (usuarios, catálogos, flujos, etc.).</li>
          <li><strong>RBAC</strong> con jerarquías y ámbitos (empresa/sede/equipo).</li>
          <li><strong>APIs</strong> documentadas y <strong>webhooks</strong>.</li>
          <li><strong>Reportes</strong>, exportaciones y auditoría.</li>
          <li><strong>Documentación</strong> y handover.</li>
        </ul>
      </section>

      {/* ALCANCE */}
      <section className="pt-10 mt-10 border-slate-200 border-t">
        <h2>Alcance y opciones</h2>
        <h3 className="mt-4 text-xl font-semibold">Alcance base</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>Módulos core, usuarios/roles, flujos y tablero inicial.</li>
          <li>API REST/GraphQL y autenticación OIDC.</li>
          <li>Despliegue, monitoreo y alertas.</li>
        </ul>
        <h3 className="mt-6 text-xl font-semibold">Opcionales frecuentes</h3>
        <ul className="list-disc pl-6 text-justify">
          <li>ETL/ELT y data warehouse.</li>
          <li>Integraciones ERP/CRM/BI.</li>
          <li>Automatizaciones y colas de trabajo.</li>
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
