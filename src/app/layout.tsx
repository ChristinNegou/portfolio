import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christin Negou — Développeur web & mobile",
  description:
    "Développeur freelance basé à Trois-Rivières, Québec. Sites web, applications web et mobiles pour entrepreneurs et PME.",
  openGraph: {
    title: "Christin Negou — Développeur web & mobile",
    description:
      "Sites web, applications web et mobiles pour entrepreneurs et PME du Québec.",
    type: "website",
    locale: "fr_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
