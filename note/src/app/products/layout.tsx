import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해 보세요',
};

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
