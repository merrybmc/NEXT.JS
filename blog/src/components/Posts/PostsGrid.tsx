import { Post } from '@/app/service/posts';
import React from 'react';
import PostCard from './PostCard';

type Props = { postList: Post[] };

export default function PostsGrid({ postList }: Props) {
  return (
    <ul className='flex flex-wrap gap-4 max-w-7xl justify-between p-8'>
      {postList.map((post, index) => (
        <li
          key={index}
          className='flex flex-col w-72 bg-white shadow-md cursor-pointer hover:shadow-lg pb-2'
        >
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
