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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  
  /* Added custom font variables for easy swapping */
  --font-heading: ${GeistSans.style.fontFamily};
  --font-body: ${GeistSans.style.fontFamily};
  --font-accent: ${GeistSans.style.fontFamily};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
