import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Jacqueline Borges — Psicóloga Clínica | Atendimento online",
  description:
    "Psicóloga clínica especializada em saúde emocional e autoconhecimento. Um espaço de escuta e acolhimento — atendimento online para todo o Brasil, com presencial em Araruama e Rio das Ostras, RJ. Conversa inicial pelo WhatsApp.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Jacqueline Borges — Psicóloga Clínica",
    description:
      "Um espaço de escuta e acolhimento para quem vive entre cobranças e silêncios. Online para todo o Brasil · Presencial em Araruama e Rio das Ostras, RJ.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jacqueline Borges — Psicóloga Clínica",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
