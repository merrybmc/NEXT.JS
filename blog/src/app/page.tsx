import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  return <main className='bg-gray-500'>Main</main>;
}
