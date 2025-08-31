export const metadata = {
  title: "Blog | F5",
  description: "Artículos técnicos sobre desarrollo, arquitectura y seguridad.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </div>
  );
}
