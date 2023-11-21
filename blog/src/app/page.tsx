import Image from 'next/image';
import Link from 'next/link';

import FeaturedPosts from '@/components/Posts/FeaturedPosts';
import Hero from '@/components/Home/Hero';
import CarouselPost from '@/components/Posts/CarouselPost';

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <Hero />
      <FeaturedPosts />
      <CarouselPost />
    </section>
  );
}
