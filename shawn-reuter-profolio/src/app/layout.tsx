import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar.jsx";
import Footer from "@/components/footer/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shawn Reuter Profolio",
  description: "Web Developer with a passion for serving others through the creation of specifically curated website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
