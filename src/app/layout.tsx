import type { Metadata } from "next";
import { Montserrat, Roboto_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300','400', '500', '700', '900'],
  variable: "--font-roboto",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ['100', '300','400', '500', '700'],
  variable: "--font-roboto-mono",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['100', '300','400', '500', '700'],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Marcela Sarturato",
  description: "Marcela Sarturato Atelie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${roboto_mono.className} ${montserrat.className} bg-background font-sans`}>
       <Navbar />
       {children}
       <Footer />
      </body>
    </html>
  );
}
