import axios from 'axios';

type Nara = {
  code: string;
  commonName: string;
  flagEmoji: string;
  flagImg: string;
  capital: string[];
  region: string;
  population: number;
};

export async function fetchCoutnries() {
  const { data } = await axios.get('https://naras-api.vercel.app/all');
  return {
    props: {
      data,
    },
  };
}
