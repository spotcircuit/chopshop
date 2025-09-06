import type { Metadata } from "next";
import { Inter, Bebas_Neue, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Chop Shop - Custom Bachelorette Experiences in Scottsdale",
  description: "Scottsdale's premier bachelorette party planning service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}