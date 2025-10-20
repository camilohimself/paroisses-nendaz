import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://paroisses-nendaz.vercel.app'),
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
    url: "https://paroisses-nendaz.vercel.app",
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
    canonical: "https://paroisses-nendaz.vercel.app",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
