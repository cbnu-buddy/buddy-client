import React from 'react';

export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto mt-16 w-[42.5rem] mb-24'>
      <h1 className='text-2xl font-semibold'>공지사항</h1>
      {children}
    </div>
  );
}
