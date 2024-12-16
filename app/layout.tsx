import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/nav/nav";
import Footer from "./components/footer/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export const metadata: Metadata = {
  title: "My portfolio site",
  description: "Steven's portfolio website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
