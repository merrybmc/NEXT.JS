import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

export default function ProductsPage() {
  const products = ['shirt', 'pants', 'skirt', 'shoes'];
  return (
    <div>
      제품 소개 페이지
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`} className={styles.link}>
              {product}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
