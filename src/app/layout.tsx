import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LayoutWrapper from "@/components/LayoutWrapper";
import { client } from "@/sanity/lib/client";
import { authorQuery } from "@/lib/sanity-queries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://tijani-usman.vercel.app"), // Replace with your production URL
  title: "My Portfolio",
  description: "Software Engineer & DevOps Specialist Portfolio",
  openGraph: {
    title: "My Portfolio",
    description: "Software Engineer & DevOps Specialist Portfolio",
    url: "/",
    siteName: "My Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "My Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "Software Engineer & DevOps Specialist Portfolio",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/profile.jpg" },
      { url: "/profile.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const author = await client.fetch(authorQuery);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VKVG2ZZZJT"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VKVG2ZZZJT');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper socialLinks={author?.socialLinks}>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
