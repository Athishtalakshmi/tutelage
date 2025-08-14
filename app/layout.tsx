import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tutelage - CBSE Computer Science Learning Platform",
  description:
    "Comprehensive CBSE Computer Science learning platform with notes, practicals, MCQs, and online tuition services for Class 11 and 12 students.",
  keywords: "CBSE, Computer Science, Class 11, Class 12, Python, Programming, Notes, Practicals, MCQs, Online Tuition",
  authors: [{ name: "Tutelage" }],
  creator: "Tutelage",
  publisher: "Tutelage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tutelage.vercel.app"),
  openGraph: {
    title: "Tutelage - CBSE Computer Science Learning Platform",
    description:
      "Comprehensive CBSE Computer Science learning platform with notes, practicals, MCQs, and online tuition services.",
    url: "https://tutelage.vercel.app",
    siteName: "Tutelage",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutelage - CBSE Computer Science Learning Platform",
    description:
      "Comprehensive CBSE Computer Science learning platform with notes, practicals, MCQs, and online tuition services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
