import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimationProvider from "../components/AnimationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitga - Gérez votre boutique à distance",
  description: "Bitga vous permet de suivre votre stock, gérer vos vendeurs et générer des factures, même hors ligne.",
  icons: {
    icon: '/bitga-logo.svg',
    shortcut: '/bitga-logo.svg',
    apple: '/bitga-logo.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/bitga-logo.svg',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
