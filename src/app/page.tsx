"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Globe,
  Shield,
  Code2,
  Cog,
  Lock,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import RotatingBadge3D from "@/components/RotatingBadge3D";
import BrandLogo from "@/components/BrandLogo"; // ✅ Logo UpF5

/* ==========================================================================
   ARCHIVO: F5Landing.tsx (Página principal)
   ========================================================================== */

/* ==========================================================================
   Helper: ButtonLink (CTA accesible)
   ========================================================================== */
function ButtonLink({
  href,
  children,
  variant = "default",
  size = "default",
  className = "",
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className} aria-label={ariaLabel}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

/* -------------------------------------------------------------------------- */
/* Paleta (tokens mínimos)                                                    */
/* -------------------------------------------------------------------------- */
const brand = {
  primary: "from-slate-900 via-blue-800 to-slate-900",
  accent: "from-blue-600 to-cyan-500",
  textMuted: "text-slate-500",
};

/* -------------------------------------------------------------------------- */
/* Hero Slides                                                                */
/* -------------------------------------------------------------------------- */
const heroSlides = [
  { src: "/images/hero/hero1.jpg", alt: "Proyecto web corporativo" },
  { src: "/images/hero/hero2.jpg", alt: "Plataforma e integraciones" },
  { src: "/images/hero/hero3.jpg", alt: "E-commerce escalable" },
];

/* -------------------------------------------------------------------------- */
/* Productos                                                                  */
/* -------------------------------------------------------------------------- */
const productosItems = [
  { src: "/images/productos/p1.jpg", title: "Web Corporativa",     href: "/productos/web" },
  { src: "/images/productos/p2.jpg", title: "Landing Page",        href: "/productos/landingpage" },
  { src: "/images/productos/p3.jpg", title: "E-commerce",          href: "/productos/e-commerce" },
  { src: "/images/productos/p4.jpg", title: "App",                 href: "/productos/app" },
  { src: "/images/productos/p5.jpg", title: "Plataforma",          href: "/productos/plataforma" },
  { src: "/images/productos/p6.jpg", title: "Academia Digital",    href: "/productos/academia" },
];

/* -------------------------------------------------------------------------- */
/* Portfolio                                                                  */
/* -------------------------------------------------------------------------- */
type PortfolioLogo = { name: string; texture: string; href: string; alt: string };
const portfolioLogos: readonly PortfolioLogo[] = [
  { name: "Prisma",    texture: "/images/portfolio/i1.png", href: "/portfolio/prisma",    alt: "Logo Prisma 3D" },
  { name: "Mi Vecino", texture: "/images/portfolio/i2.png", href: "/portfolio/mivecino", alt: "Logo Mi Vecino 3D" },
  { name: "Áurea",     texture: "/images/portfolio/i3.png", href: "/portfolio/aurea",     alt: "Logo Áurea 3D" },
] as const;

/* -------------------------------------------------------------------------- */
/* Blog                                                                       */
/* -------------------------------------------------------------------------- */
type BlogPost = {
  title: string;
  href: string;
  img: string;
  alt: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Landing, Página o Sitio: ¿qué elegir?",
    href: "/blog/landing-vs-sitio",
    img: "/images/blog/b1.jpg",
    alt: "Comparativa entre landing page, página y sitio web",
  },
  {
    title: "Mejores prácticas para CI/CD en Next.js",
    href: "/blog/cicd-nextjs",
    img: "/images/blog/b2.jpg",
    alt: "Pipeline de integración y despliegue continuo en Next.js",
  },
  {
    title: "Autenticación moderna con NextAuth y JWT",
    href: "/blog/auth-nextauth-jwt",
    img: "/images/blog/b3.jpg",
    alt: "Interfaz de autenticación con OAuth y JWT",
  },
];

/* -------------------------------------------------------------------------- */
/* Servicios                                                                  */
/* -------------------------------------------------------------------------- */
const services = [
  { icon: Code2, title: "Desarrollo Web", desc: "Sitios modernos, e-commerce y apps con SEO y rendimiento optimizado.", href: "#contact" },
  { icon: Lock,  title: "Apps y Automatización", desc: "Automatización con apps móviles, bots, RPA y generación de documentos.", href: "#contact" },
  { icon: Cog,   title: "Plataformas e Integraciones", desc: "Conectamos APIs, sistemas y flujos de trabajo para que todo funcione en conjunto.", href: "#contact" },
  { icon: Shield,title: "Seguridad Aplicativa", desc: "Hardening, monitoreo continuo, autenticación y control de accesos seguros.", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/* Componente: Carrusel del Hero (alturas responsivas)                        */
/* -------------------------------------------------------------------------- */
function HeroCarousel() {
  const [index, setIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const total = heroSlides.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const goto = (i: number) => setIndex(i);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Carrusel principal"
    >
      <div className="relative rounded-3xl shadow-2xl ring-1 ring-slate-200 overflow-hidden h-56 sm:h-64 md:h-80 lg:h-96">
        {heroSlides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-slate-900/0" />
          </div>
        ))}

        {/* Controles */}
        <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goto(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${
                  i === index ? "bg-white shadow ring-1 ring-black/10 w-5 sm:w-6" : "bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="inline-flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/90 hover:bg-white shadow"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="inline-flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/90 hover:bg-white shadow"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <ChevronDown className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 h-8 w-8 text-slate-400" />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* (Opcional) Logo flotante reutilizable                                      */
/* -------------------------------------------------------------------------- */
function FloatingLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ y: 0, scale: 1, rotate: 0, boxShadow: "0 0 0 rgba(59,130,246,0)" }}
      animate={{
        y: [0, -6, 0],
        boxShadow: [
          "0 0 0 rgba(59,130,246,0)",
          "0 10px 28px rgba(59,130,246,0.18)",
          "0 0 0 rgba(59,130,246,0)",
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, rotate: 1.2 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full aspect-[4/3] rounded-2xl bg-white border border-slate-200 hover:border-blue-300 ring-1 ring-transparent hover:ring-blue-200 transition-all"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width:1024px) 280px, 50vw"
        className="object-contain p-6"
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Página principal                                                            */
/* -------------------------------------------------------------------------- */
export default function F5Landing() {
  // Smooth scroll para anclas
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="min-h-screen antialiased bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* =================================================================== */}
      {/* NAVBAR */}
      {/* =================================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/70">
        {/* ↑ Ajuste de alturas para contener el logo sin desbordes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Marca (logo responsivo por altura) */}
          <div className="shrink-0 flex items-center">
            <div className="h-10 md:h-12 lg:h-14">
              <BrandLogo className="h-full w-auto" />
            </div>
          </div>

          {/* Menú */}
          <nav className="hidden md:flex gap-3 text-base md:text-lg">
            {[
              ["Nosotros", "#about"],
              ["Servicios", "#services"],
              ["Productos", "#productos"],
              ["Portfolio", "#portfolio"],
              ["Blog", "/blog"],
              ["Contacto", "#contact"],
            ].map(([label, href]) => (
              <ButtonLink
                key={label}
                href={href}
                variant="ghost"
                size="default"
                className="
                  rounded-xl font-medium text-base md:text-lg
                  transition-colors
                  hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white
                  focus-visible:ring-2 focus-visible:ring-blue-600
                "
                ariaLabel={`Ir a ${label}`}
              >
                {label}
              </ButtonLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink
              href="#contact"
              size="default"
              className="
                rounded-2xl shadow-sm font-semibold text-base md:text-lg
                focus-visible:ring-2 focus-visible:ring-blue-600
              "
            >
              Cotizar
            </ButtonLink>
          </div>
        </div>
      </header>

      {/* =================================================================== */}
      {/* HERO (responsivo + texto justificado) */}
      {/* =================================================================== */}
      <section id="home" className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${brand.primary} opacity-10`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-extrabold tracking-tight text-slate-900
                         text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
                         leading-[1.15] sm:leading-[1.12] lg:leading-[1.1]"
            >
              Software, Apps y Web a
              <br className="hidden sm:block" />
              Medida para tu Empresa
            </motion.h1>

            <p className="mt-4 sm:mt-6 text-slate-700 max-w-prose
                          text-base sm:text-lg lg:text-xl
                          leading-relaxed sm:leading-7 text-justify">
              En <strong>UpF5</strong> diseñamos y desarrollamos soluciones digitales con foco en resultados: sitios web,
              e-commerce, apps y <strong>plataformas todo-en-uno</strong> sobre una arquitectura escalable,
              <em> security-by-design</em>, integraciones API y CI/CD para acelerar tu operación con calidad y
              trazabilidad.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-[15px] text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                Seguridad by design
              </div>
              <div className="flex items-center gap-2">
                <Cog className="h-4 w-4 sm:h-5 sm:w-5" />
                Integraciones API
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                SEO/Accesibilidad
              </div>
            </div>
          </div>

          {/* Carrusel visual del hero */}
          <HeroCarousel />
        </div>
      </section>

      {/* =================================================================== */}
      {/* NOSOTROS + STACK */}
      {/* =================================================================== */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-stretch">
          {/* IZQ: Sobre Nosotros */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-blue-600/10 blur-2xl rounded-[2rem]" />
            <div className="rounded-[1.6rem] p-[1px] bg-gradient-to-br from-blue-600/60 via-cyan-500/60 to-blue-600/60 h-full">
              <Card className="rounded-[1.5rem] border-slate-200/60 overflow-hidden h-full flex flex-col">
                <CardHeader className="border-b border-slate-200/60 bg-gradient-to-r from-slate-50 to-white">
                  <CardTitle className="flex items-center justify-between">
                    <span>Sobre Nosotros</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                      Ingeniería de Software
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 grow">
                  <p className="text-slate-600 text-justify leading-relaxed w-full">
                    Somos un equipo especializado en <strong>ingeniería de software</strong> que cubre diseño UX/UI,
                    desarrollo full-stack, APIs e integraciones. Trabajamos con metodologías ágiles, calidad continua y
                    <em> DevSecOps</em> para entregar productos <strong>confiables, escalables y medibles</strong>, con
                    trazabilidad de cambios, automatización de despliegues (CI/CD) y observabilidad de extremo a extremo.
                    Priorizamos <strong>seguridad por diseño</strong>, estándares de codificación y documentación operable.
                  </p>

                  <ul className="mt-6 space-y-3 text-slate-700 list-disc pl-5 text-justify leading-relaxed w-full">
                    <li><strong>Descubrimiento y UX/UI</strong>: investigación, wireframes, design system y validación.</li>
                    <li><strong>Desarrollo full-stack y APIs</strong>: arquitectura modular, pruebas y contratos claros.</li>
                    <li><strong>DevSecOps, CI/CD y observabilidad</strong>: pipelines, monitoreo y respuesta a incidentes.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* DER: Stack preferente */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-blue-600/10 blur-2xl rounded-[2rem]" />
            <div className="rounded-[1.6rem] p-[1px] bg-gradient-to-br from-blue-600/60 via-cyan-500/60 to-blue-600/60 h-full">
              <Card className="rounded-[1.5rem] border-slate-200/60 overflow-hidden h-full">
                <CardHeader className="border-b border-slate-200/60 bg-gradient-to-r from-slate-50 to-white">
                  <CardTitle className="flex items-center justify-between">
                    <span>Stack preferente</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                      React + Next.js
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: Code2, title: "Frontend", desc: "React 18, Next.js 15 (App Router), Tailwind, shadcn/ui", chips: ["React", "Next.js", "Tailwind", "shadcn/ui"] },
                      { icon: Cog,   title: "Backend",  desc: "Node.js, NestJS/Express, Prisma, REST/GraphQL",        chips: ["Node.js", "NestJS", "Prisma", "GraphQL"] },
                      { icon: Shield,title: "Seguridad",desc: "OAuth2/NextAuth, JWT, OWASP ASVS, rate-limit",         chips: ["OAuth2", "JWT", "OWASP", "Zod"] },
                      { icon: Globe, title: "Infra",    desc: "Vercel, Docker, S3/Cloudflare, observabilidad",        chips: ["Vercel", "Docker", "S3", "CDN"] },
                    ].map(({ icon: Icon, title, desc, chips }) => (
                      <motion.div
                        key={title}
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 250, damping: 20 }}
                        className="rounded-2xl p-[1px] bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 h-full"
                      >
                        <div className="p-4 rounded-[1.05rem] bg-white border border-slate-200 h-full">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white ring-1 ring-black/10 flex items-center justify-center">
                              <Icon className="h-5 w-5" />
                            </div>
                            <p className="font-medium">{title}</p>
                          </div>
                          <p className="text-slate-500 mt-2 text-sm text-justify leading-relaxed w-full">{desc}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {chips.map((c) => (
                              <span key={c} className="text-[11px] px-2 py-1 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10 text-slate-700 border border-slate-200">
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SERVICIOS */}
      {/* =================================================================== */}
      <section id="services" className="py-20 bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Servicios</h2>
          <p className="mt-3 text-slate-600 max-w-prose">
            Desarrollamos soluciones de extremo a extremo. Selecciona un servicio para cotizar.
          </p>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label={`${title} — solicitar propuesta`}
              >
                <div className="rounded-2xl p-[1px] bg-gradient-to-br from-blue-600/30 via-cyan-500/30 to-blue-600/30 transition-transform group-hover:-translate-y-0.5">
                  <Card className="rounded-2xl border-slate-200 bg-white/90 backdrop-blur">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white ring-1 ring-black/10 flex items-center justify-center">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle>{title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-500">{desc}</p>
                      <div className="mt-4">
                        <Button variant="outline" size="sm" className="rounded-xl pointer-events-none gap-2">
                          Solicitar propuesta <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* PRODUCTOS */}
      {/* =================================================================== */}
      <section id="productos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Productos</h2>
          <p className="mt-3 text-slate-600">Explora nuestras soluciones listas para implementar.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosItems.map((item) => (
              <div key={item.href} className="group rounded-2xl overflow-hidden border border-slate-200">
                <div className="relative h-48">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                  </div>
                  <ButtonLink
                    href={item.href}
                    variant="outline"
                    size="sm"
                    className="rounded-xl"
                    ariaLabel={`Ver detalles de ${item.title}`}
                  >
                    Ver más
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* PORTFOLIO */}
      {/* =================================================================== */}
      <section id="portfolio" className="py-20 bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
          <p className="mt-3 text-slate-600">Nuestros principales productos y marcas.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {portfolioLogos.map((item) => (
              <div key={item.href} className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                <Link
                  href={item.href}
                  aria-label={`Ver detalle de ${item.name}`}
                  className="block w-full max-w-[260px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl"
                >
                  <div className="mx-auto">
                    <RotatingBadge3D
                      texturePath={item.texture}
                      size={1.6}
                      depth={0.08}
                      edgeColor="#0B4C6F"
                      bg="transparent"
                      autoRotate
                      speed={0.6}
                      pauseOnHover
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* BLOG */}
      {/* =================================================================== */}
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
            <ButtonLink href="/blog" variant="secondary" size="sm" ariaLabel="Ver todos los artículos">
              Ver todos
            </ButtonLink>
          </div>
          <p className="mt-3 text-slate-600">Notas sobre tecnología, arquitectura y seguridad de software.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {blogPosts.map((p: BlogPost) => (
              <Card key={p.href} className="rounded-2xl border-slate-200 overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="mt-4">
                    <ButtonLink
                      href={p.href}
                      variant="outline"
                      size="sm"
                      className="gap-2 rounded-xl"
                      ariaLabel={`Leer artículo: ${p.title}`}
                    >
                      Leer artículo <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* CONTACTO */}
      {/* =================================================================== */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Contacto</h2>
          <p className="mt-3 text-slate-600">¿Tienes un proyecto? Conversemos.</p>
          <form
            className="mt-8 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Formulario de contacto: conecte /api/contact");
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Input name="name" placeholder="Nombre" required />
              <Input type="email" name="email" placeholder="Correo" required />
            </div>
            <Input name="phone" placeholder="Teléfono (opcional)" />
            <Textarea name="message" placeholder="Cuéntanos sobre tu proyecto" rows={6} required />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +56 9 97837254
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> contacto@upf5.com
                </div>
              </div>
              <Button type="submit" className="rounded-2xl">
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FOOTER */}
      {/* =================================================================== */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-3">
            <div className="h-9">
              <BrandLogo className="h-full w-auto" priority={false} />
            </div>
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} UpF5. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
