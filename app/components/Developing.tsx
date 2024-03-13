'use client';

import React, { useEffect, useState } from 'react';

export default function Developing() {
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-center'>
      <h1 className='mt-[15rem] font-thin text-[2.25rem] w-[22.5rem]'>
        개발 중인 페이지입니다
        <span>{loadingDots}</span>
      </h1>
    </div>
  );
}
