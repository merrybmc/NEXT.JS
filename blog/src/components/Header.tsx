import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='flex p-4 bg-slate-300 items-center'>
      <h1 className='text-4xl font-bold'>Byeong Min`s Blog</h1>
      <div className='ml-auto flex gap-4'>
        <Link href={'/'}>home</Link>
        <Link href={'/about'}>about</Link>
        <Link href={'/posts'}>posts</Link>
        <Link href={'/contact'}>contact</Link>
      </div>
    </header>
  );
}
