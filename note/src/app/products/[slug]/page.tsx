import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';
import React from 'react';

// revalidate = 몇 초 간격으로 SSG를 서버 상에서 다시 만들지 결정
export const revalidate = 3;

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품 이름: ${slug}`,
    description: `${slug}를 판매하는 페이지입니다.`,
  };
}

export default async function ProductsPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    return notFound();
  }

  // 서버 파일에 있는 데이터중에 해당 제품의 정보를 찾아서 보여줌
  return <div>{product.name} 설명 페이지</div>;
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  // const products = ['woman', 'man'];
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
