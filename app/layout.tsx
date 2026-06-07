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
  title: "Jacqueline Borges — Psicóloga Clínica | Atendimento online e presencial",
  description:
    "Psicóloga clínica para mulheres que vivem entre cobranças e silêncios. Um espaço de escuta e acolhimento — online e presencial. Conversa inicial pelo WhatsApp.",
  openGraph: {
    title: "Jacqueline Borges — Psicóloga Clínica",
    description:
      "Um espaço de escuta e acolhimento para mulheres que vivem entre cobranças e silêncios.",
    locale: "pt_BR",
    type: "website",
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
