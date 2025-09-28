<?php
// public/contact.php – endpoint para producción (cPanel)
// Responde JSON y envía correo con mail()

// CORS: permite tu dominio (y localhost si lo necesitas)
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === 'https://upf5.com' || $origin === 'https://www.upf5.com' || $origin === 'http://localhost:3000') {
  header("Access-Control-Allow-Origin: $origin");
} else {
  header('Access-Control-Allow-Origin: https://upf5.com');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false,'error'=>'Método no permitido']); exit; }

// Lee cuerpo JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true) ?: [];

$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$phone   = trim($data['phone']   ?? '');
$message = trim($data['message'] ?? '');

// Validaciones mínimas
if (mb_strlen($name) < 2) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Nombre inválido']); exit; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Email inválido']); exit; }
if (mb_strlen($message) < 10) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Mensaje demasiado corto']); exit; }

// Configura remitente/destino (usa tu dominio)
$from    = 'contacto@upf5.com';
$to      = 'contacto@upf5.com';
$subject = 'Nuevo contacto — UpF5: '.$name;

// Encabezados
$headers  = "From: UpF5 <{$from}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Cuerpo HTML
$html = '
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.6;color:#0f172a">
    <h2 style="margin:0 0 12px">Nuevo mensaje del formulario</h2>
    <p><strong>Nombre:</strong> '.htmlspecialchars($name).'</p>
    <p><strong>Email:</strong> '.htmlspecialchars($email).'</p>'.
    ($phone ? '<p><strong>Teléfono:</strong> '.htmlspecialchars($phone).'</p>' : '').
   '<p style="margin-top:16px"><strong>Mensaje:</strong></p>
    <pre style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">'
      .htmlspecialchars($message).
    '</pre>
  </div>
';

// Envío (mail nativo del servidor)
$encodedSubject = '=?UTF-8?B?'.base64_encode($subject).'?=';
$ok = @mail($to, $encodedSubject, $html, $headers);

if ($ok) {
  echo json_encode(['ok'=>true,'message'=>'Mensaje enviado']);
} else {
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>'No se pudo enviar el correo (mail())']);
}
