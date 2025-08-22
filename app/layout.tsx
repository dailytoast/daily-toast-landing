import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Daily Toast - Local news, perfectly toasted",
  description:
    "Singapore headlines with the perfect texture of light, crispy and substantial. From the team that built Asia's largest tech publication.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://www.dailytoast.sg",
  },
  openGraph: {
    title: "Daily Toast - Local news, perfectly toasted",
    description: "Singapore headlines with the perfect texture of light, crispy and substantial. From the team that built Asia's largest tech publication.",
    url: "https://www.dailytoast.sg",
    siteName: "Daily Toast",
    images: [
      {
        url: "https://www.dailytoast.sg/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Daily Toast - Singapore news platform",
      },
    ],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Toast - Local news, perfectly toasted",
    description: "Singapore headlines with the perfect texture of light, crispy and substantial.",
    images: ["https://www.dailytoast.sg/hero-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" 
          rel="stylesheet" 
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6Y900TELXC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6Y900TELXC');
            `,
          }}
        />
        <style>{`
html {
  font-family: 'Inter', ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  
  /* Updated custom font variables for Google Fonts */
  --font-heading: 'DM Serif Display', serif;
  --font-body: 'Inter', sans-serif;
  --font-accent: 'Inter', sans-serif;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
