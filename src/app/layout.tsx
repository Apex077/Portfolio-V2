import type { Metadata } from "next";
import "@/app/globals.css"; // Ensure the path is correct

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio website built with Next.js, TypeScript, and TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
