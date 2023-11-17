import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import { Product, getProducts } from '@/service/products';

export default async function ProductsPage() {
  // const products = ['shirt', 'pants', 'skirt', 'shoes'];

  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 보여주기
  const products = await getProducts();

  return (
    <div>
      제품 소개 페이지
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`} className={styles.link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
