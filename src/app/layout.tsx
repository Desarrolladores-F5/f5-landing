import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "UpF5", template: "%s | UpF5" },
  description: "Software, Apps y Web a medida para tu empresa.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "UpF5",
    description: "Software, Apps y Web a medida para tu empresa.",
    url: "/",
    siteName: "UpF5",
    images: [{ url: "/og/og-image.png", width: 1200, height: 630, alt: "UpF5" }],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UpF5",
    description: "Software, Apps y Web a medida para tu empresa.",
    images: ["/og/og-image.png"],
  },
};

// 👇 Evita zooms y comportamientos raros en móvil
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
