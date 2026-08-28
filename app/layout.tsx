import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NORYX WorkOS",
  description: "AI Operating System for Work"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
