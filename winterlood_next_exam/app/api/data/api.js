'use client';
import axios from 'axios';

export async function fetchCoutnries() {
  const res = await axios.get('https://naras-api.vercel.app/all');
  return res;
}
