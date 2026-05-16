import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Employee Reference Checker — Verify Employment History Automatically',
  description: 'Automate employment verification by checking LinkedIn, company websites, and public records. Get comprehensive verification reports instantly.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2e04a1d1-1a9a-4677-8b95-cbd629e09f02"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
