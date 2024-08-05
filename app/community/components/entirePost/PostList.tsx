'use client';

import React, { useEffect } from 'react';
import Loading from '@/app/loading';
import axiosInstance from '@/app/utils/axiosInstance';
import useDebounce from '@/app/hooks/useDebounce';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import EmptyPostListItem from './EmptyPostListItem';
import PostListItem from './PostListItem';
import { PostInfo } from '@/app/types/post';

interface TagPostListProps {
  searchQuery: string;
}

// 시험 목록 반환 API (10개 게시글 단위로)
// const fetchExams = async ({ queryKey }: any) => {
//   const page = queryKey[1];
//   const searchQuery = queryKey[2];
//   const response = await axiosInstance.get(
//     `${process.env.NEXT_PUBLIC_API_VERSION}/assignment/?page=${page}&limit=10&sort=-createdAt&q=title,course,writer=${searchQuery}`
//   );
//   return response.data;
// };

export default function PostList({ searchQuery }: TagPostListProps) {
  const debouncedSearchQuery = useDebounce(searchQuery, 400);

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
      postId: 1,
      title: '여행 가기전 보기 좋은 방송 프로그램',
      content: '어쩌구 저쩌구~~~~~~~~~~',
      createdAt: '2024-07-02T00:00:00',
      postImagePathUrls: [
        'http://abc.com/upload/1.jpg',
        'http://abc.com/upload/2.jpg',
        'http://abc.com/upload/3.jpg',
      ],
      author: {
        memberId: 2,
        username: '홍길동',
        profileImagePathUrl:
          'https://avatars.githubusercontent.com/u/119295431?v=4',
      },
      tag: ['애니메이션', '원피스', '에그헤드'],
      views: 67,
      services: [
        {
          serviceId: 1,
          planIds: [1, 2],
          name: '넷플릭스',
          url: 'https://www.netflix.com/',
        },
        {
          serviceId: 4,
          planIds: [6],
          name: '라프텔',
          url: 'https://www.laftel.net',
        },
      ],
      comments: [
        {
          comment: '오! 정보 감사합니당😎😎',
          likeCount: 1,
          replies: [
            {
              reply: '도움이 되셨다니 기쁘네요ㅎㅎ',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 2,
                username: '홍길동',
                profileImagePathUrl: 'http://abc.com/upload/3.jpg',
              },
            },
            {
              reply: 'ㄹㅇ..',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 3,
                username: '아무개',
                profileImagePathUrl: 'http://abc.com/upload/5.jpg',
              },
            },
          ],
          createdAt: '2024-07-02T01:00:00',
          writer: {
            memberId: 2,
            username: '홍길동',
            profileImagePathUrl: 'http://abc.com/upload/3.jpg',
          },
        },
        {
          comment: '좋은 정보 감사합니다 :p',
          likeCount: 1,
          replies: [
            {
              reply: '넵 좋은 하루 되세요~~',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 2,
                username: '홍길동',
                profileImagePathUrl: 'http://abc.com/upload/3.jpg',
              },
            },
          ],
          createdAt: '2024-07-02T01:00:00',
          writer: {
            memberId: 25,
            username: '아인슈타인',
            profileImagePathUrl: 'http://abc.com/upload/65.jpg',
          },
        },
      ],
      likeCount: 2,
    },
    {
      postId: 1,
      title: '여행 가기전 보기 좋은 방송 프로그램',
      content: '어쩌구 저쩌구~~~~~~~~~~',
      createdAt: '2024-07-02T00:00:00',
      postImagePathUrls: [
        'http://abc.com/upload/1.jpg',
        'http://abc.com/upload/2.jpg',
        'http://abc.com/upload/3.jpg',
      ],
      author: {
        memberId: 2,
        username: '홍길동',
        profileImagePathUrl: 'http://abc.com/upload/3.jpg',
      },
      tag: ['애니메이션', '원피스', '에그헤드'],
      views: 67,
      services: [
        {
          serviceId: 1,
          planIds: [1, 2],
          name: '넷플릭스',
          url: 'https://www.netflix.com/',
        },
        {
          serviceId: 4,
          planIds: [6],
          name: '라프텔',
          url: 'https://www.laftel.net',
        },
      ],
      comments: [
        {
          comment: '오! 정보 감사합니당😎😎',
          likeCount: 1,
          replies: [
            {
              reply: '도움이 되셨다니 기쁘네요ㅎㅎ',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 2,
                username: '홍길동',
                profileImagePathUrl: 'http://abc.com/upload/3.jpg',
              },
            },
            {
              reply: 'ㄹㅇ..',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 3,
                username: '아무개',
                profileImagePathUrl: 'http://abc.com/upload/5.jpg',
              },
            },
          ],
          createdAt: '2024-07-02T01:00:00',
          writer: {
            memberId: 2,
            username: '홍길동',
            profileImagePathUrl: 'http://abc.com/upload/3.jpg',
          },
        },
        {
          comment: '좋은 정보 감사합니다 :p',
          likeCount: 1,
          replies: [
            {
              reply: '넵 좋은 하루 되세요~~',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 2,
                username: '홍길동',
                profileImagePathUrl: 'http://abc.com/upload/3.jpg',
              },
            },
          ],
          createdAt: '2024-07-02T01:00:00',
          writer: {
            memberId: 25,
            username: '아인슈타인',
            profileImagePathUrl: 'http://abc.com/upload/65.jpg',
          },
        },
      ],
      likeCount: 2,
    },
    {
      postId: 1,
      title: '여행 가기전 보기 좋은 방송 프로그램',
      content: '어쩌구 저쩌구~~~~~~~~~~',
      createdAt: '2024-07-02T00:00:00',
      postImagePathUrls: [
        'http://abc.com/upload/1.jpg',
        'http://abc.com/upload/2.jpg',
        'http://abc.com/upload/3.jpg',
      ],
      author: {
        memberId: 2,
        username: '홍길동',
        profileImagePathUrl: 'http://abc.com/upload/3.jpg',
      },
      tag: ['애니메이션', '원피스', '에그헤드'],
      views: 67,
      services: [
        {
          serviceId: 1,
          planIds: [1, 2],
          name: '넷플릭스',
          url: 'https://www.netflix.com/',
        },
        {
          serviceId: 4,
          planIds: [6],
          name: '라프텔',
          url: 'https://www.laftel.net',
        },
      ],
      comments: [
        {
          comment: '오! 정보 감사합니당😎😎',
          likeCount: 1,
          replies: [
            {
              reply: '도움이 되셨다니 기쁘네요ㅎㅎ',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 2,
                username: '홍길동',
                profileImagePathUrl: 'http://abc.com/upload/3.jpg',
              },
            },
            {
              reply: 'ㄹㅇ..',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 3,
                username: '아무개',
                profileImagePathUrl: 'http://abc.com/upload/5.jpg',
              },
            },
          ],
          createdAt: '2024-07-02T01:00:00',
          writer: {
            memberId: 2,
            username: '홍길동',
            profileImagePathUrl: 'http://abc.com/upload/3.jpg',
          },
        },
        {
          comment: '좋은 정보 감사합니다 :p',
          likeCount: 1,
          replies: [
            {
              reply: '넵 좋은 하루 되세요~~',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 2,
                username: '홍길동',
                profileImagePathUrl: 'http://abc.com/upload/3.jpg',
              },
            },
          ],
          createdAt: '2024-07-02T01:00:00',
          writer: {
            memberId: 25,
            username: '아인슈타인',
            profileImagePathUrl: 'http://abc.com/upload/65.jpg',
          },
        },
      ],
      likeCount: 2,
    },
    {
      postId: 1,
      title: '여행 가기전 보기 좋은 방송 프로그램',
      content: '어쩌구 저쩌구~~~~~~~~~~',
      createdAt: '2024-07-02T00:00:00',
      postImagePathUrls: [
        'http://abc.com/upload/1.jpg',
        'http://abc.com/upload/2.jpg',
        'http://abc.com/upload/3.jpg',
      ],
      author: {
        memberId: 2,
        username: '홍길동',
        profileImagePathUrl: 'http://abc.com/upload/3.jpg',
      },
      tag: ['애니메이션', '원피스', '에그헤드'],
      views: 67,
      services: [
        {
          serviceId: 1,
          planIds: [1, 2],
          name: '넷플릭스',
          url: 'https://www.netflix.com/',
        },
        {
          serviceId: 4,
          planIds: [6],
          name: '라프텔',
          url: 'https://www.laftel.net',
        },
      ],
      comments: [
        {
          comment: '오! 정보 감사합니당😎😎',
          likeCount: 1,
          replies: [
            {
              reply: '도움이 되셨다니 기쁘네요ㅎㅎ',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 2,
                username: '홍길동',
                profileImagePathUrl: 'http://abc.com/upload/3.jpg',
              },
            },
            {
              reply: 'ㄹㅇ..',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 3,
                username: '아무개',
                profileImagePathUrl: 'http://abc.com/upload/5.jpg',
              },
            },
          ],
          createdAt: '2024-07-02T01:00:00',
          writer: {
            memberId: 2,
            username: '홍길동',
            profileImagePathUrl: 'http://abc.com/upload/3.jpg',
          },
        },
        {
          comment: '좋은 정보 감사합니다 :p',
          likeCount: 1,
          replies: [
            {
              reply: '넵 좋은 하루 되세요~~',
              likeCount: 0,
              createdAt: '2024-07-02T01:00:00',
              writer: {
                memberId: 2,
                username: '홍길동',
                profileImagePathUrl: 'http://abc.com/upload/3.jpg',
              },
            },
          ],
          createdAt: '2024-07-02T01:00:00',
          writer: {
            memberId: 25,
            username: '아인슈타인',
            profileImagePathUrl: 'http://abc.com/upload/65.jpg',
          },
        },
      ],
      likeCount: 2,
    },
  ];

  // if (isPending) return <Loading />;

  return (
    <div className='mt-3 flex flex-col gap-y-3'>
      {resData?.length === 0 && <EmptyPostListItem />}
      {resData?.map((hotPostInfo: PostInfo, index: number) => (
        <PostListItem
          postInfo={hotPostInfo}
          key={index}
          index={index}
          length={resData.length}
        />
      ))}
    </div>
  );
}
