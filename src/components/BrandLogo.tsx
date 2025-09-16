"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;                // Ancla o ruta
  width?: number;               // Ancho en px
  height?: number;              // Alto en px
  className?: string;           // Utilidades Tailwind opcionales
  priority?: boolean;           // true en navbar
  alt?: string;                 // Texto alternativo accesible
};

export default function BrandLogo({
  href = "#home",
  width = 150,
  height = 44,
  className = "",
  priority = true,
  alt = "UpF5 — Software, Apps y Web",
}: Props) {
  return (
    <Link href={href} aria-label="Ir al inicio (UpF5)" className="inline-flex items-center">
      <Image
        src="/images/logo/upf5-logo.png"   // ← Ruta según tu carpeta actual
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 120px, 150px"
        className={className + " h-auto w-auto select-none"}
      />
    </Link>
  );
}
