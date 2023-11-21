import React from 'react';

export default function FilterList() {
  return (
    <div className='pr-16 pt-8'>
      <h2 className='text-xl border-b-4 border-blue-400 font-bold'>Category</h2>
      <p className='cursor-pointer hover:text-blue-700'>All Posts</p>
      <p className='cursor-pointer hover:text-blue-700'>my story</p>
      <p className='cursor-pointer hover:text-blue-700'>frontend</p>
      <p className='cursor-pointer hover:text-blue-700'>backend</p>
      <p className='cursor-pointer hover:text-blue-700'>javascript</p>
    </div>
  );
}
