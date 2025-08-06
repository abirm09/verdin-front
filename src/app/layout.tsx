import { inter, quicksand } from "@/fonts";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "../styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    default: "Verdin - Nature Starts Here",
    template: "%s | Verdin - Nature Starts Here",
  },
  description:
    "Verdin is your one-stop e-commerce destination for modern plant-growing solutions. Explore eco-friendly tools, GrowSeries products, and gardening gear designed to help you grow greener—naturally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
