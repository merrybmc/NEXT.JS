'use client';
import React, { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css';

export default function MeowArticle() {
  // const res = await fetch('https://meowfacts.herokuapp.com', {
  //   next: { revalidate: 0 },
  // });

  // const { data } = await res.json();
  // const text = data[0];
  const [text, setText] = useState();

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then(({ data }) => setText(data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
