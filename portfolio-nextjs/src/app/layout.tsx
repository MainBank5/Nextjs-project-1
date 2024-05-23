import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import {Providers} from './providers'
import Footer from "@/components/Footer";
const poppins = Poppins({ subsets: ["latin"], weight:[
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
] });

export const metadata: Metadata = {
  title: "Eliud Karuga | Software Developer",
  description: "Backend Developer",
  icons: {
    icon: "/eliud.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>

        <Providers>
          <Navbar/>
          <main>
            {children}
          </main>
          
        </Providers>
        <Footer/>
        <Analytics />
        </body>
    </html>
  );
}
