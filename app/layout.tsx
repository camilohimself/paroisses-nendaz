import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import OrganizationSchema from "@/components/structured-data/OrganizationSchema";
import WebSiteSchema from "@/components/structured-data/WebSiteSchema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.paroisses-nendaz.ch'),
  title: {
    default: "Paroisses de Nendaz - Nendaz et Veysonnaz",
    template: "%s | Paroisses de Nendaz"
  },
  description: "Site officiel des paroisses de Nendaz et Veysonnaz. Horaires des messes, événements, sacrements et vie paroissiale.",
  keywords: ["paroisse", "Nendaz", "Veysonnaz", "messe", "église", "catholique", "Valais", "Suisse", "horaires messes", "sacrements", "baptême", "communion", "confirmation", "mariage"],
  authors: [{ name: "Paroisses de Nendaz" }],
  creator: "OSOM",
  publisher: "Paroisses de Nendaz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "https://www.paroisses-nendaz.ch",
    siteName: "Paroisses de Nendaz",
    title: "Paroisses de Nendaz - Nendaz et Veysonnaz",
    description: "Site officiel des paroisses de Nendaz et Veysonnaz. Horaires des messes, événements, sacrements et vie paroissiale.",
    images: [
      {
        url: "/logo-paroisses.png",
        width: 1080,
        height: 1350,
        alt: "Logo Paroisses de Nendaz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paroisses de Nendaz - Nendaz et Veysonnaz",
    description: "Site officiel des paroisses de Nendaz et Veysonnaz. Horaires des messes, événements, sacrements et vie paroissiale.",
    images: ["/logo-paroisses.png"],
  },
  verification: {
    google: "votre-code-google-search-console", // À remplacer lors de la configuration GSC
  },
  alternates: {
    canonical: "https://www.paroisses-nendaz.ch",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${playfair.variable} ${crimson.variable} ${inter.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Providers>
          <div className="min-h-screen flex flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-amber-500 focus:text-white focus:px-4 focus:py-2 focus:font-semibold focus:rounded"
            >
              Aller au contenu principal
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
