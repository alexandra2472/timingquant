import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ShiShi Quant Studio | 时势量化工作室',
  description: 'Professional quantitative investment research and training services. 专业的量化投资研究与培训服务。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
