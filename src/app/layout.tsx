import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Flowbite, ThemeModeScript } from 'flowbite-react'
import CustomNavbar from './components/layouts/navbar'
import CustomFooter from './components/layouts/footer'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'My Tools',
  description: 'Some useful tools that will increase your productivity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript></ThemeModeScript>
      </head>
      <Flowbite>
        <body className={montserrat.className + "bg-white dark:bg-gray-900"}>
          <CustomNavbar></CustomNavbar>
          {children}
          <CustomFooter></CustomFooter>
        </body>
      </Flowbite>
    </html>
  )
}
