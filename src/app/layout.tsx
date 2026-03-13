import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HawkSavvy | Sovereign AI Systems for Enterprise Execution",
    template: "%s | HawkSavvy",
  },
  description:
    "HawkSavvy designs, deploys, and governs sovereign AI systems for enterprise operations, customer communication, workflow automation, and sector-specific execution.",
  openGraph: {
    type: "website",
    siteName: "HawkSavvy",
    title: "HawkSavvy | Sovereign AI Systems for Enterprise Execution",
    description:
      "HawkSavvy designs, deploys, and governs sovereign AI systems for enterprise operations, customer communication, workflow automation, and sector-specific execution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HawkSavvy | Sovereign AI Systems for Enterprise Execution",
    description:
      "HawkSavvy designs, deploys, and governs sovereign AI systems for enterprise operations, customer communication, workflow automation, and sector-specific execution.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <ThemeProvider>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
