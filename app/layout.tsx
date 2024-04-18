import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/Navbar";


const playfair = Playfair({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.className}>
      <body >
        <Providers>
         <Navbar ></Navbar>
        {children}
        </Providers>
      
        </body>
    </html>
  );
}
