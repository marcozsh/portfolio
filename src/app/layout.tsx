import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { comfortaa } from "./fonts";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Marcozsh",
  description: "Marco Peña portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body className={`${comfortaa.className} antialiased w-screen`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
