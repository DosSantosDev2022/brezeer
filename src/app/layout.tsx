import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/auth";
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brezeer | Barbershops",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scrollbar scrollbar-thumb-zinc-900 " lang="en">
      <body className={`${inter.className} dark `}>
        <AuthProvider>
          <Header/>
          {children}
          <Toaster/>
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
