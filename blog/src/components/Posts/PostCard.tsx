import { Post } from '@/app/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { post: Post };

export default function PostCard({ post: { title, description, date, category, path } }: Props) {
  return (
    <Link href={`/post/${path}`}>
      <Image src={`/images/posts/${path}.png`} alt={title} width={300} height={200} />
      <div className='flex flex-col items-center'>
        <p className='self-end pt-2 pr-2'>{date.toString()}</p>
        <h3 className='text-center font-semibold'>{title}</h3>
        <p className='text-center'>{description}</p>
        <span className='text-sm text-center bg-green-100 rounded-lg px-2 py-1'>{category}</span>
      </div>
    </Link>
  );
}
