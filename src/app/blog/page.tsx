import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const posts = [
  {
    slug: "landing-vs-sitio",
    title: "Landing, Página o Sitio: ¿qué elegir?",
    img: "/images/blog/b1.jpg",
    summary: "Guía práctica para decidir según objetivos, presupuesto y SEO.",
  },
  {
    slug: "cicd-nextjs",
    title: "Mejores prácticas para CI/CD en Next.js",
    img: "/images/blog/b2.jpg",
    summary: "Pipelines, checks y despliegues consistentes para tu app.",
  },
  {
    slug: "auth-nextauth-jwt",
    title: "Autenticación moderna con NextAuth y JWT",
    img: "/images/blog/b3.jpg",
    summary: "Patrones de sesión, providers OAuth y buenas prácticas.",
  },
];

export default function BlogIndex() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Blog
        </h1>
        <p className="text-slate-600 text-lg">
          Artículos técnicos sobre desarrollo, arquitectura y seguridad de
          software.
        </p>
      </header>

      {/* Lista de artículos */}
      <div className="grid gap-6">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              <p className="text-slate-600">{p.summary}</p>
              <Button asChild className="rounded-xl">
                <Link href={`/blog/${p.slug}`}>Leer artículo →</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {/* Botón volver al inicio */}
      <div className="pt-8 border-t border-slate-200">
        <Button asChild size="lg" className="rounded-2xl">
          <Link href="/">← Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
