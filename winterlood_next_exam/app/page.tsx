import Link from 'next/link';
import Routing from './service/Routing';

export default function Home() {
  const code = 'KOR';

  return (
    <div>
      홈페이지
      <div>
        <Routing />
        {/* <Link href={'/search'}>Search 페이지 이동</Link> */}
        <Link href={'/country'}>Country 페이지 이동</Link>
        <Link href={`/country/${code}`}>KOR 페이지 이동</Link>
        <Link href={'/about'}>About 페이지 이동</Link>
      </div>
    </div>
  );
}
