import React, { useState } from 'react';
import { getAllPosts } from '../service/posts';
import PostsGrid from '@/components/Posts/PostsGrid';
import FilterList from '@/components/Posts/FilterList';
import FilterablePost from '@/components/Posts/FilterablePost';

export default async function PostsPage() {
  const postList = await getAllPosts();
  const categories = [...new Set(postList.map((post) => post.category))];
  return (
    <>
      <FilterablePost postList={postList} categories={categories} />
    </>
  );
}
