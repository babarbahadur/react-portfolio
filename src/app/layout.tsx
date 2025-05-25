import AppCursor from "@/components/AppCursor";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Babar's Portfolio",
  keywords: ["Niaz Babar Bahadur", "Portfolio", "Mobile App Developer", "React Native", "Next.js", "JavaScript", "TypeScript", 'Redux', 'React Query', 'CI/CD', 'Zustand', 'Unit Testing', 'Jest', 'Swift'],
  description: "Niaz Babar Bahadur's portfolio showcasing his skills and experience as a Mobile App Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppCursor />
        {children}
      </body>
    </html>
  );
}
