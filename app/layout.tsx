import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const title = "PK Agencement — Menuisier agenceur à Bordeaux, sur-mesure";
const description =
  "PK Agencement, menuisier agenceur à Bordeaux : dressings, bibliothèques, bureaux, rangements sous escalier et cuisines sur mesure, conception 3D, fabrication et pose. Restauration de fenêtres bois avec double vitrage.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: title, template: "%s | PK Agencement" },
  description,
  openGraph: { type: "website", locale: "fr_FR", siteName: "PK Agencement", title, description, images: ["/images/hero-arche.jpg"] },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#F9F6F1", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
