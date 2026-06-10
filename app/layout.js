import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '600'] })

export const metadata = {
  title: 'TimingQuant | 時間狀態情報層',
  description: 'TimingQuant 將時間結構下的市場行為轉譯為系統化風險暴露層。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Noto+Sans+TC:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
