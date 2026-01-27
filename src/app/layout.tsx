import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fontHeading = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontBody = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neural Stack | AI/ML + Full-Stack Web Development",
  description: "Specialized generalist agency bridging the gap between advanced AI implementation and premium web development in Austin, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 neural-grid opacity-20 pointer-events-none" />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
