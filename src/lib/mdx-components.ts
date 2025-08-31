import type { MDXComponents } from "mdx/types";

// No "use client". Sin hooks ni contextos.
// Devuelve el mapeo de componentes (puedes extenderlo cuando quieras).
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
