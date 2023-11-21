import { getNonFeaturedPosts } from '@/app/service/posts';
import React from 'react';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPost() {
  const NonFeaturedPostList = await getNonFeaturedPosts();
  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>You May Like</h2>
      <MultiCarousel>
        {NonFeaturedPostList.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
