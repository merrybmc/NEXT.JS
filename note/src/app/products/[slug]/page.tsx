import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';
import React from 'react';
import jeans from '../../../../public/images/jeans.jpg';
import shoes from '../../../../public/images/shoes.jpg';
import tshirt from '../../../../public/images/tshirt.jpg';
import Image, { StaticImageData } from 'next/image';

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
  // 서버 파일에 있는 데이터중에 해당 제품의 정보를 찾아서 보여줌
  const product = await getProduct(slug);

  if (!product) {
    return notFound();
  }

  // const imgFile = (): StaticImageData | string => {
  //   switch (product.name) {
  //     case '티셔츠':
  //       return tshirt;
  //     case '청바지':
  //       return jeans;
  //     case '부츠':
  //       return shoes;
  //     default:
  //       return 'null';
  //   }
  // };
  return (
    <>
      <div>{product.name} 설명 페이지</div>
      {/* <Image src={imgFile()} alt='productImg' width={300} height={300} priority /> */}
      <Image src={`/images/${product.image}`} alt={`${product.name}`} width='300' height='300' />
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  // const products = ['woman', 'man'];
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
