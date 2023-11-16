import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <menu className={styles.menu}>
        <Link href='/products/woman'>남성옷</Link>
        <Link href='/products/man'>여성옷</Link>
      </menu>
      {children}
    </div>
  );
}
