import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "My Portfolio",
  description: "Software Engineer & DevOps Specialist Portfolio",
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
