import { getAllPosts, getFeaturedPosts } from '@/app/service/posts';
import Image from 'next/image';
import React from 'react';

export default async function FeaturedPosts() {
  const postList = await getFeaturedPosts();

  return (
    <div className='flex flex-col'>
      <p>Featured Posts</p>

      <div className='flex flex-wrap gap-4 max-w-7xl bg-slate-400 justify-between p-8'>
        {postList.map((data, index) => (
          <div
            key={index}
            className='flex flex-col w-72 bg-white shadow-md cursor-pointer hover:shadow-lg'
          >
            <Image src={''} alt='image' className='w-full h-40' />
            <p className='text-right pt-2 pr-2'>{data.date}</p>
            <p className='text-center font-semibold'>{data.title}</p>
            <p className='text-center'>{data.description}</p>
            <p className='text-center'>{data.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
