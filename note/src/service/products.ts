import path from 'path';
import { promises } from 'fs';

export type Product = {
  id: string;
  name: String;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  // path = 폴더와 파일 경로를 저장해주는 모듈
  // path.join = 여러 인자를 넣으면 하나의 경로로 합쳐줌, 상대경로 처리
  // process.cwd() = node 명령을 호출한 작업 디렉터리의 절대경로 (note)
  // note/data/products.json
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const data = await promises.readFile(filePath, 'utf-8');
  return JSON.parse(data);
  //   return ['shirt', 'pants', 'skirt', 'shoes', 'dress'];
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
