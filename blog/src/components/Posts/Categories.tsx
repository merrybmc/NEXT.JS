import React from 'react';

type Props = {
  categories: string[];
  selected: string;
  onSwitchCategory: (category: string) => void;
};

export default function Categories({ categories, selected, onSwitchCategory }: Props) {
  return (
    <section>
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onSwitchCategory(category)} className='cursor-pointer'>
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
