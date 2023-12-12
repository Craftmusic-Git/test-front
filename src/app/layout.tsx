import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbars/Navbar";
import NextAuthProvider from "@/providers/Next-Auth-Provider";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Vaillant",
  description: "Vaillant is a web application for Foxhole communities"
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${pacifico.className} ${inter.className}`}>
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
