import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "Next.js Image Gallery",
  description: "Youtube tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar></Navbar>
        <main className="max-w-6xl mx-auto">
        {children}
        </main>
        </body>
    </html>
  );
}
