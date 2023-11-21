'use client';
import { Post } from '@/app/service/posts';
import React, { useState } from 'react';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = {
  postList: Post[];
  categories: string[];
};

const ALL_POSTS = 'All Posts';

export default function FilterablePost({ postList, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS ? postList : postList.filter((post) => post.category === selected);

  const onSelectedCategory = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    console.log(e.target);
  };
  return (
    <section className='flex'>
      <PostsGrid postList={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onSwitchCategory={setSelected}
      />
      {/* <div className='pr-16 pt-8'>
        <h2 className='text-xl border-b-4 border-blue-400 font-bold'>Category</h2>
        <p onClick={(e) => console.log(e)} className='cursor-pointer hover:text-blue-700'>
          All Posts
        </p>
        <p className='cursor-pointer hover:text-blue-700'>my story</p>
        <p className='cursor-pointer hover:text-blue-700'>frontend</p>
        <p className='cursor-pointer hover:text-blue-700'>backend</p>
        <p className='cursor-pointer hover:text-blue-700'>javascript</p>
      </div> */}
    </section>
  );
}
