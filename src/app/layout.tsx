import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css'; // Global styles

const anton = localFont({
  src: '../../public/fonts/Anton-Regular.ttf',
  variable: '--font-anton',
  display: 'swap',
});

const montserrat = localFont({
  src: [
    {path: '../../public/fonts/Montserrat-300.ttf', weight: '300', style: 'normal'},
    {path: '../../public/fonts/Montserrat-400.ttf', weight: '400', style: 'normal'},
    {path: '../../public/fonts/Montserrat-500.ttf', weight: '500', style: 'normal'},
    {path: '../../public/fonts/Montserrat-600.ttf', weight: '600', style: 'normal'},
    {path: '../../public/fonts/Montserrat-700.ttf', weight: '700', style: 'normal'},
  ],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EcoStock - Giải Phóng Hàng Tồn',
  description: 'Hệ thống AI Agent tự động định giá và điều phối thực phẩm cận date.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi">
      <body className={`${anton.variable} ${montserrat.variable} font-montserrat bg-[#F3F3F3] text-[#0766AD] antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
