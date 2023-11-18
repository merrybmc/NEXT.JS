'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Routing() {
  const router = useRouter();

  const onClickButton = () => {
    router.push('/search');
  };

  return <button onClick={onClickButton}>Search 페이지 이동</button>;
}
