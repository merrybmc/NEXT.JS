import { getAllPosts, getFeaturedPosts } from '@/app/service/posts';
import Image from 'next/image';
import React from 'react';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const postList = await getFeaturedPosts();

  return (
    <section className='flex flex-col'>
      <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
      <PostsGrid postList={postList} />
    </section>
  );
}
