import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return (
    readFile(filePath, 'utf-8')
      .then<Post[]>((data) => JSON.parse(data))
      // a post에 있는 date가 b에 있는 post의 date보다 크다면 최신이 앞에 오도록 정렬
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((post) => post.filter((post) => post.featured));
}
