// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

/** Nodemailer requiere runtime Node, no Edge */
export const runtime = "nodejs";
/** Evita caché para la ruta */
export const revalidate = 0;
/** Opcional: fuerza dinámico */
export const dynamic = "force-dynamic";

/* ------------------------- Validación del payload ------------------------- */
const ContactSchema = z.object({
  name: z.string().min(2, "Nombre demasiado corto"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  message: z.string().min(10, "Cuéntanos un poco más de tu proyecto"),
});

/* --------------------- Utilidad para leer variables env ------------------- */
function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Falta la variable de entorno ${name}`);
  return v;
}

/* --------------------------------- POST ---------------------------------- */
export async function POST(req: Request) {
  try {
    // 1) Parse + validar datos
    const body = await req.json().catch(() => ({}));
    const data = ContactSchema.parse(body);

    // 2) Cargar credenciales SMTP desde .env.local
    const SMTP_HOST = requireEnv("SMTP_HOST");               // p.ej. mail.upf5.com
    const SMTP_PORT = Number(requireEnv("SMTP_PORT"));       // 465 (SSL) o 587 (STARTTLS)
    const SMTP_USER = requireEnv("SMTP_USER");               // contacto@upf5.com
    const SMTP_PASS = requireEnv("SMTP_PASS");               // *** real ***
    const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;  // destino
    const SMTP_FROM = process.env.SMTP_FROM || `UpF5 <${SMTP_USER}>`;
    // Si definiste SMTP_SECURE=true/false en el .env, úsalo; si no, infiérelo por puerto.
    const envSecure = process.env.SMTP_SECURE?.toLowerCase();
    const SMTP_SECURE =
      envSecure === "true" ? true : envSecure === "false" ? false : SMTP_PORT === 465;

    // 3) Crear transporte
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE, // true -> SSL 465, false -> STARTTLS 587
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      // timeouts razonables para evitar requests colgados
      connectionTimeout: 15_000,
      socketTimeout: 20_000,
    });

    // 4) Verificar conexión (útil para detectar credenciales/puertos mal puestos)
    await transporter.verify();

    // 5) Componer el correo
    const subject = `Nuevo contacto — ${data.name}`;
    const text = [
      `Nombre: ${data.name}`,
      `Email: ${data.email}`,
      `Teléfono: ${data.phone ?? "-"}`,
      "",
      data.message,
    ].join("\n");

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 12px">Nuevo mensaje del formulario</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ""}
        <p style="margin-top:16px"><strong>Mensaje:</strong></p>
        <pre style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">${data.message}</pre>
      </div>
    `;

    // 6) Enviar
    const info = await transporter.sendMail({
      from: SMTP_FROM,
      to: CONTACT_TO,
      replyTo: data.email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true, id: info.messageId }, { status: 200 });
  } catch (err: any) {
    // Errores de validación
    if (err?.name === "ZodError") {
      return NextResponse.json(
        { ok: false, error: "Validación", details: err.flatten() },
        { status: 400 }
      );
    }

    // Log detallado en servidor (útil para 535, DNS, puertos, etc.)
    console.error("[/api/contact] Error:", err);

    // Respuesta genérica al cliente
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
