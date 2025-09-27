"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  priority?: boolean;
  alt?: string;
  src?: string;
};

export default function BrandLogo({
  href = "#home",
  className = "",
  priority = true,
  alt = "UpF5 — Software, Apps y Web",
  src = "/images/logo/upf5-logo.png",
}: Props) {
  return (
    <Link
      href={href}
      aria-label="Ir al inicio (UpF5)"
      title="UpF5"
      className="inline-flex items-center h-full"
    >
      {/* Tamaño explícito por breakpoint (más grande que antes) */}
      <span
        className={[
          "relative block",
          "h-16 w-[200px] sm:h-18 sm:w-[220px] md:h-20 md:w-[240px]",
          className,
        ].join(" ")}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width:640px) 240px, (max-width:768px) 260px, 280px"
          className="object-contain select-none"
          priority={priority}
          draggable={false}
        />
      </span>
    </Link>
  );
}
