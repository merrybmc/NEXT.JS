import Counter from '@/components/Counter';
import { Metadata } from 'next';

export default function Home() {
  console.log('안녕');

  return (
    <h1>
      홈페이지다!
      <Counter />
    </h1>
  );
}
