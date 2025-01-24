import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/CartProvider";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Shopping",
  description: "A demo shopping app created with NextJs",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <CartContextProvider>
          <Header />
          {children}
          <Footer />
        </CartContextProvider>
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
