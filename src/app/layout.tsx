import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Viveon Global Health",
  description: "Connecting international patients with world-class medical services in India.",
  icons: {
  icon: "/favicon.png",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className="font-sans bg-white text-gray-800">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    );
}
