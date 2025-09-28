import type { SVGProps } from "react";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16 3C9.373 3 4 8.373 4 15a11.9 11.9 0 0 0 1.667 6.06L4 29l8.156-1.62A12 12 0 1 0 16 3zm0 2.4a9.6 9.6 0 0 1 8.165 14.8l-.256.41a9.6 9.6 0 0 1-12.9 2.86l-.33-.21-4.719.94.94-4.72-.21-.33A9.6 9.6 0 0 1 16 5.4zM12.9 10.7c.18 0 .41.004.63.48.247.533.79 1.84.86 1.97.07.13.11.29.02.47-.09.18-.14.29-.28.45-.14.16-.3.36-.13.64.17.28.76 1.25 1.63 2.02 1.12.98 2.06 1.28 2.35 1.43.29.15.46.13.64-.08.19-.22.73-.85.93-1.14.2-.29.4-.24.66-.14.27.1 1.71.81 2 .96.29.15.48.22.55.35.07.13.07.76-.18 1.49-.24.73-1.4 1.39-1.94 1.48-.49.08-1.12.11-1.82-.12-.42-.14-1.04-.34-1.79-.66-3.15-1.36-5.19-4.55-5.35-4.77-.16-.22-1.28-1.7-1.28-3.25 0-1.55.8-2.31 1.08-2.6.28-.29.62-.33.79-.33z"
      />
    </svg>
  );
}

export default function WhatsAppCTA({
  phone = "56987406850",
  message = "Hola, vengo desde UpF5. Me gustaría cotizar.",
}: {
  phone?: string;
  message?: string;
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="flex items-center justify-center gap-2 rounded-full p-4 text-white
                 bg-green-600 hover:bg-green-700 active:bg-green-800 shadow-lg transition-colors"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
