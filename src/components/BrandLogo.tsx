"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;                // Ancla o ruta
  className?: string;           // Utilidades Tailwind opcionales
  priority?: boolean;           // true en navbar
  alt?: string;                 // Texto alternativo accesible
};

export default function BrandLogo({
  href = "#home",
  className = "",
  priority = true,
  alt = "UpF5 — Software, Apps y Web",
}: Props) {
  return (
    <Link href={href} aria-label="Ir al inicio (UpF5)" className="inline-flex items-center">
      <Image
        src="/images/logo/upf5-logo.png"   // ← Ajusta a tu carpeta real
        alt={alt}
        width={0}     // ← Ancho automático (lo maneja Tailwind)
        height={0}    // ← Alto automático (lo maneja Tailwind)
        priority={priority}
        sizes="(max-width: 768px) 160px, (max-width: 1280px) 200px, 240px"
        className={`h-10 md:h-16 lg:h-20 xl:h-24 w-auto select-none ${className}`}
      />
    </Link>
  );
}
