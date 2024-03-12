import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import { ModeProvider } from "./context/ModeCotext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testing Quiz",
  description: "Testing Quiz authors: Guga and Ninuca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModeProvider>
          <Header />
          {children}
        </ModeProvider>
      </body>
    </html>
  );
}
