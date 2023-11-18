import { GetServerSideProps } from './service/GetCountry';
import { useEffect } from 'react';
import { fetchCoutnries } from './api/data/api';

type Nara = {
  code: string;
  commonName: string;
  flagEmoji: string;
  flagImg: string;
  capital: string[];
  region: string;
  population: number;
};

type Props = {
  data: Nara[];
};

export default async function Home() {
  const { name } = await GetServerSideProps();
  const res = fetchCoutnries<Props>();
  console.log('123', res);
  return <div></div>;
}
