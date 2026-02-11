import type { Metadata } from "next";
import { DM_Serif_Display, Montserrat } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lari Stinu | Moda Artesanal del Istmo",
  description: "Conectando artesanos del Istmo de Tehuantepec con el mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dmSerif.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

