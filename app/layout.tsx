import './globals.css'

export const metadata = {
  title: 'Trello 2.0',
  description: 'Created by Kartik Goel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}


 