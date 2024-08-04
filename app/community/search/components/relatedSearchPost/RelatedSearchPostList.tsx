'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Loading from '@/app/loading';
import useDebounce from '@/app/hooks/useDebounce';
import { useRouter, useSearchParams } from 'next/navigation';
import EmptyRelatedSearchPostListItem from './EmptyRelatedSearchPostListItem';
import RelatedSearchPostListItem from './RelatedSearchPostListItem';
import { PostInfo } from '@/app/types/post';

interface RelatedSearchPostListProps {
  searchQuery: string;
}

export default function RelatedSearchPostList({
  searchQuery,
}: RelatedSearchPostListProps) {
  const debouncedSearchQuery = useDebounce(searchQuery, 400);

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

  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<PostInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastPostElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setLoading(true);
    const newPosts = resData.slice((page - 1) * 3, page * 3);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setHasMore(newPosts.length > 0);
    setLoading(false);
  }, [page]);

  return (
    <div className='mt-2'>
      {posts.length === 0 ? (
        <EmptyRelatedSearchPostListItem />
      ) : (
        <div className='flex flex-col gap-y-3'>
          {posts.map((postInfo: PostInfo, index: number) => {
            if (posts.length === index + 1) {
              return (
                <div ref={lastPostElementRef} key={postInfo.postId}>
                  <RelatedSearchPostListItem
                    postInfo={postInfo}
                    index={index}
                    length={posts.length}
                  />
                </div>
              );
            } else {
              return (
                <RelatedSearchPostListItem
                  postInfo={postInfo}
                  key={postInfo.postId}
                  index={index}
                  length={posts.length}
                />
              );
            }
          })}
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
}
