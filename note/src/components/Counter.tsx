'use client';
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);

  const onIncreaseCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={onIncreaseCount}>숫자 증가 시키기</button>
    </div>
  );
}
