import React from 'react';
import styles from './layout.module.css';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <menu className={styles.menu}>
        <a href=''>남성옷</a>
        <a href=''>여성옷</a>
      </menu>
      {children}
    </div>
  );
}
