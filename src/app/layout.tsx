import type { Metadata } from "next";
import "./globals.css";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Godavi Store",
  description:
    "Emerging online e-commerce enterprise dedicated to scaling and expanding through strategic partnerships and the reselling of established brand products.",
};

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.variable}>
        <div className="min-h-screen flex flex-col">
          <div className="bg-blue-900">
            <Header />
          </div>
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
