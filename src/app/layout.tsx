import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/Providers";

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "linebyline.ru — домен продаётся",
  description: "Короткое имя. Пространство для большой идеи.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${sans.className} ${sans.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
