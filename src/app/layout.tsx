"use client"

import Header from "@/components/Header"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Instant Gaming</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
