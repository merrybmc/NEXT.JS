import { GetServerSideProps } from './service/GetCountry';
import { useEffect } from 'react';
import { fetchCoutnries } from './api/data/api';

export default async function Home() {
  const { name } = await GetServerSideProps();
  const res = fetchCoutnries();
  console.log(res);
  return <div>{name}</div>;
}
