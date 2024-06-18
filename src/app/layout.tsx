import type { Metadata } from "next";
import "./globals.css";
import { Comfortaa } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: "Godavi Store",
  description: "Emerging online e-commerce enterprise dedicated to scaling and expanding through strategic partnerships and the reselling of established brand products.",
};

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
})

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.variable}>
        {children}
      </body>
    </html>
  )
}