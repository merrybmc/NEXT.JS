import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Props) {
  return {
    title: `제품 이름: ${params.slug}`,
    description: `${params.slug}를 판매하는 페이지입니다.`,
  };
}

export default function PantsPage({ params }: Props) {
  const { slug } = params;
  if (slug === 'nothing') {
    return notFound();
  }
  return <div>{slug} 설명 페이지</div>;
}

export function generateStaticParams() {
  const products = ['woman', 'man'];
  return products.map((product) => ({
    slug: product,
  }));
}
