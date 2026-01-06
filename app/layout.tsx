import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tutr - Find Your Perfect AP & IB Tutor",
  description: "Expert AP & IB tutors, matched instantly. Connect with vetted tutors for AP Biology, IB Math, SAT Prep, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  );
}

