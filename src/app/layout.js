import { Suspense } from 'react'
import './globals.css'
import Loading from './loading'

export const metadata = {
  title: 'Movies',
  description: 'Movie app listing popular and favourite movies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
