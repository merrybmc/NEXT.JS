import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    slug: string;
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
