'use client';

import React, { useEffect } from 'react';
import Loading from '@/app/loading';
import axiosInstance from '@/app/utils/axiosInstance';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { TagInfo } from '@/app/types/tag';
import HotTagListItem from './HotTagListItem';
import EmptyHotTagListItem from './EmptyHotTagListItem';

// 시험 목록 반환 API (10개 게시글 단위로)
// const fetchExams = async ({ queryKey }: any) => {
//   const page = queryKey[1];
//   const searchQuery = queryKey[2];
//   const response = await axiosInstance.get(
//     `${process.env.NEXT_PUBLIC_API_VERSION}/assignment/?page=${page}&limit=10&sort=-createdAt&q=title,course,writer=${searchQuery}`
//   );
//   return response.data;
// };

export default function HotTagList() {
  const params = useSearchParams();

  const page = Number(params?.get('page')) || 1;

  // const { isPending, data } = useQuery({
  //   queryKey: ['examList', page, debouncedSearchQuery],
  //   queryFn: fetchExams,
  // });

  const router = useRouter();

  // const resData = data?.data;
  const resData = [
    {
      tagId: 5,
      tag: '런닝맨 런닝맨 런닝맨 런닝맨',
    },
    {
      tagId: 5,
      tag: '런닝맨',
    },
    {
      tagId: 5,
      tag: '런닝맨',
    },
    {
      tagId: 5,
      tag: '런닝맨',
    },
    {
      tagId: 5,
      tag: '런닝맨',
    },
    {
      tagId: 5,
      tag: '런닝맨',
    },
    {
      tagId: 5,
      tag: '런닝맨',
    },
    {
      tagId: 5,
      tag: '런닝맨',
    },
    {
      tagId: 5,
      tag: '런닝맨',
    },
    {
      tagId: 5,
      tag: '런닝맨',
    },
  ];

  // if (isPending) return <Loading />;

  return (
    <div className='mt-2 grid grid-cols-2'>
      {resData?.length === 0 && <EmptyHotTagListItem />}
      {resData?.map((tagInfo: TagInfo, index: number) => (
        <HotTagListItem tagInfo={tagInfo} key={index} />
      ))}
    </div>
  );
}
