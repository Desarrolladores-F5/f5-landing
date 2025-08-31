import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Backoffice — Gestión documental y flujos internos con trazabilidad y cumplimiento",
  description:
    "Plataforma interna en Next.js para gestión documental, workflows, firmas electrónicas, RBAC granular, auditoría completa y observabilidad. Integraciones, gobierno de datos y seguridad por diseño.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <Image
        src="/images/portfolio/p4.jpg"
        alt="Gestión documental y flujos internos"
        width={1280}
        height={720}
        className="rounded-2xl mb-8 object-cover border"
        priority
      />

      {/* Título */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Backoffice <span className="text-slate-400">/ Documentos y Workflows</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600 text-justify">
          Construimos <strong>plataformas internas</strong> para administrar documentos, orquestar flujos de
          aprobación y asegurar <strong>trazabilidad</strong> de cada acción. Con <em>RBAC</em> granular, firmas
          electrónicas, auditoría inmutable y <strong>observabilidad</strong>, reducimos reprocesos,
          mejoramos cumplimiento y aceleramos la toma de decisiones.
        </p>
      </header>

      {/* Contenido */}
      <div
        className={[
          "prose prose-slate md:prose-lg max-w-none",
          "prose-headings:scroll-mt-24",
          "prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:font-bold prose-h2:tracking-tight",
          "prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-semibold prose-h3:tracking-tight",
          "prose-p:text-justify prose-li:text-justify prose-blockquote:text-justify",
        ].join(" ")}
      >
        {/* 1. Contexto y problema */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Contexto y problema</h2>
          <p>
            Contratos, órdenes, actas y minutas se gestionan con herramientas dispersas, sin control de versiones ni
            permisos claros. Los ciclos de aprobación resultan lentos y opacos; los cambios no quedan trazados y
            la evidencia para auditorías es insuficiente. El resultado: <strong>riesgo operativo</strong>, pérdida de
            tiempo y falta de cumplimiento.
          </p>
        </section>

        {/* 2. Objetivos */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Objetivos</h2>
          <ul>
            <li>Unificar la documentación en un repositorio con <strong>versionado</strong> y permisos por rol.</li>
            <li>Estandarizar <strong>workflows</strong> con estados, SLA, asignaciones y vencimientos.</li>
            <li>Incorporar <strong>firmas electrónicas</strong> y evidencias para cumplimiento.</li>
            <li>Contar con <strong>auditoría completa</strong> de accesos y modificaciones.</li>
          </ul>
        </section>

        {/* 3. Solución */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Solución</h2>
          <p>
            Desarrollamos un backoffice en <strong>Next.js (App Router)</strong> con módulos de documentos, flujos,
            aprobaciones y firmas. Cada transición queda registrada (quién, qué, cuándo, desde dónde) y notificada.
            La carga y previsualización de archivos usa almacenamiento <em>S3-compatible</em> con <em>pre-signed URLs</em>
            y políticas de retención.
          </p>
          <h3>Características clave</h3>
          <ul>
            <li>
              Workflows configurables: <em>borrador → revisión → aprobación → publicación/archivo</em> con SLA y recordatorios.
            </li>
            <li>Firmas electrónicas y registro de evidencias (timestamp, IP, usuario, hash del documento).</li>
            <li>RBAC granular (visor, editor, aprobador, administrador) y vistas/acciones condicionadas por rol.</li>
            <li>Buscador con filtros por estado, etiqueta, autor y fecha; exportaciones CSV/PDF.</li>
            <li>Notificaciones por email y <em>webhooks</em> por asignación, vencimiento o rechazo.</li>
          </ul>
        </section>

        {/* 4. Módulos típicos */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Módulos típicos</h2>
          <ul>
            <li><strong>Repositorio</strong> con versiones, etiquetas y control de acceso.</li>
            <li><strong>Workflows</strong> por tipo de documento; reglas de validación y checklists.</li>
            <li><strong>Aprobaciones</strong> en serie/paralelo; sustituciones por vacaciones y escalamiento.</li>
            <li><strong>Plantillas</strong> (contratos, actas) y generación de PDFs con variables.</li>
          </ul>
        </section>

        {/* 5. Arquitectura y decisiones */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Arquitectura y decisiones</h2>
          <ul>
            <li>
              <strong>Renderizado:</strong> <code>SSG/ISR</code> para listados base y <code>SSR</code> selectivo en paneles
              con datos frescos.
            </li>
            <li>
              <strong>Persistencia:</strong> <code>PostgreSQL</code> + <code>Prisma</code> (documentos, versiones, flujos, auditoría).
            </li>
            <li>
              <strong>Archivos:</strong> S3/Cloudflare R2 con <em>pre-signed URLs</em> y cifrado en reposo/transporte.
            </li>
            <li>
              <strong>Integraciones:</strong> webhooks para publicar eventos en ERP/DMS; colas para reintentos y DLQ.
            </li>
            <li>
              <strong>Caché:</strong> revalidación selectiva por etiquetas ante cambios de estado/contenido.
            </li>
          </ul>
        </section>

        {/* 6. Seguridad y cumplimiento */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Seguridad y cumplimiento</h2>
          <ul>
            <li>Autenticación OIDC/OAuth2 (NextAuth). Cookies seguras (<code>HttpOnly</code>, <code>SameSite</code>, <code>Secure</code>).</li>
            <li>RBAC con mínimo privilegio y segregación de funciones (SoD) para aprobaciones.</li>
            <li>CSP, HSTS, control de tipo MIME; validación server-side (Zod) y sanitización.</li>
            <li>Auditoría <em>append-only</em> con firma de eventos críticos y verificación de integridad.</li>
          </ul>
        </section>

        {/* 7. Gobierno de datos */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Gobierno de datos</h2>
          <ul>
            <li>Políticas de retención/expurgo por tipo documental y sensibilidad.</li>
            <li>Minimización de PII y catalogación de metadatos para búsquedas eficientes.</li>
            <li>Backups automatizados y pruebas de restauración; versionado de esquemas.</li>
          </ul>
        </section>

        {/* 8. Observabilidad */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Observabilidad</h2>
          <ul>
            <li>Logs estructurados y <em>tracing</em> (OpenTelemetry/Sentry) para flujos y errores.</li>
            <li>Métricas de tiempos de ciclo por etapa; SLA de aprobaciones y salud de webhooks/colas.</li>
            <li>Alertas por vencimientos, rechazos repetidos o fallas de integración.</li>
          </ul>
        </section>

        {/* 9. Resultados esperables */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Resultados esperables</h2>
          <ul>
            <li>Reducción del tiempo de aprobación mediante automatización y SLA visibles.</li>
            <li>Disminución de reprocesos por control de versiones y checklists de calidad.</li>
            <li>Auditorías más ágiles gracias a la trazabilidad completa y la evidencia centralizada.</li>
          </ul>
        </section>

        {/* 10. Stack */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Stack tecnológico</h2>
          <ul>
            <li>Next.js, React 18, Tailwind</li>
            <li>Node.js (NestJS/Express), Prisma, PostgreSQL</li>
            <li>NextAuth (OIDC/OAuth2), Zod</li>
            <li>S3/Cloudflare R2 para archivos con URLs firmadas</li>
            <li>Sentry / OpenTelemetry para monitoreo</li>
          </ul>
        </section>

        {/* 11. Preguntas frecuentes */}
        <section className="pt-10 mt-10 border-t border-slate-200">
          <h2>Preguntas frecuentes</h2>
          <h3>¿Se pueden definir workflows distintos por tipo de documento?</h3>
          <p>Sí, cada tipo puede tener estados, reglas, SLA y aprobadores específicos.</p>
          <h3>¿Cómo se gestionan las vacaciones o sustituciones?</h3>
          <p>Soportamos delegaciones temporales y escalamiento automático según SLA.</p>
          <h3>¿Las firmas son legalmente válidas?</h3>
          <p>Integramos proveedores de firma electrónica avanzada/DS para jurisdicciones que lo requieran.</p>
        </section>

        {/* CTAs */}
        <div className="pt-10 mt-10 border-t border-slate-200 not-prose flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-2xl">
            <Link href="/#contact">Solicitar propuesta</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href="/portfolio">← Volver a los productos</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-2xl">
            <Link href="/">← Ir al inicio</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
