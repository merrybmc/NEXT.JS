import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  console.log(post);
  return (
    <>
      {post.title}
      <p>{post.content}</p>
    </>
  );
}
