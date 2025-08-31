"use client";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // Aquí puedes mapear etiquetas MDX a componentes React si lo necesitas.
  return { ...components };
}
