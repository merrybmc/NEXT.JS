import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import { Product, getProducts } from '@/service/products';

// revalidate = 몇 초 간격으로 SSG를 서버 상에서 다시 만들지 결정
export const revalidate = 3;

export default async function ProductsPage() {
  // const products = ['shirt', 'pants', 'skirt', 'shoes'];
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // 3초마다 API에서 데이터를 가져옴
    // next: { revalidate: 3 },

    // 페이지를 요청할 때마다 렌더링
    // 요청이 올 때마다 HTML을 새롭게 만듦, SSR
    next: { revalidate: 0 },
  });

  const { data } = await res.json();
  const text = data[0];

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
      <article className={styles.article}>{text}</article>
    </div>
  );
}
