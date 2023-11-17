import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';
import styles from './layout.module.css';
import Link from 'next/link';
import { Open_Sans } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });
const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 곳입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={sans.className}>
      {/* <body className={inter.className}>{children}</body> */}
      <body className={styles.body}>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note App</h1>
          <nav className={styles.nav}>
            <Link href='/'>Home</Link>
            <Link href='/products'>Product</Link>
            <Link href='contact'>Contact</Link>
            <Link href='about'>About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
