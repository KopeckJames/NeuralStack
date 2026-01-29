import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { Chatbot } from "@/components/chatbot";

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
        className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased min-h-screen flex flex-col relative`}
      >
        {/* Video Background Container */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            preload="auto"
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/lpv2.mp4" type="video/mp4" />
          </video>
          {/* Persistent Dark Overlay */}
          <div className="absolute inset-0 bg-[#0A0E45]/85" />
        </div>

        <div className="fixed inset-0 neural-grid opacity-20 pointer-events-none z-0" />
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
        <Chatbot />
      </body>
    </html>
  );
}
