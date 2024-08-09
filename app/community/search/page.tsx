'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import HotTagList from './components/hotTag/HotTagList';
import HotPostList from './components/hotPost/HotPostList';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import RelatedSearchTagList from './components/relatedSearchTag/RelatedSearchTagList';
import SwiperBanner from './components/SwiperBanner';
import SearchTagList from './components/searchedTag/SearchTagList';
import useDebounce from '@/app/hooks/useDebounce';
import RelatedSearchPostList from './components/relatedSearchPost/RelatedSearchPostList';

export default function Search() {
  const resData = [
    {
      tagId: 1,
      tag: '가족',
    },
    {
      tagId: 2,
      tag: '가을',
    },
    {
      tagId: 3,
      tag: '가비',
    },
    {
      tagId: 4,
      tag: '런닝맨',
    },
  ];

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isOpenSearchedResultList, setIsOpenSearchedResultList] =
    useState<boolean>(false);
  const [isSuccessSearchResult, setIsSUccessSearchResult] =
    useState<boolean>(false);

  const searchedResultListRef = useRef<HTMLInputElement>(null);

  const params = useSearchParams();
  const router = useRouter();

  const query: string = params?.get('q') || '';
  const tagQuery: string = params?.get('tag') || '';

  const debouncedSearchQuery = useDebounce(searchQuery, 400);

  useEffect(() => {
    if (searchQuery) setIsOpenSearchedResultList(true);
  }, [searchQuery]);

  const handleInputSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery: string = e.target.value;
    setSearchQuery(searchQuery);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      searchedResultListRef.current &&
      !searchedResultListRef.current.contains(event.target as Node)
    ) {
      setIsOpenSearchedResultList(false);
    }
  }, []);

  const handleEscKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpenSearchedResultList(false);
    }
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (searchQuery !== debouncedSearchQuery) return;
      if (!isOpenSearchedResultList || !resData.length) return;

      const activeElement = document.activeElement;
      const itemList = document.querySelectorAll('.search-result-item');
      let currentIndex = Array.prototype.indexOf.call(itemList, activeElement);

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % itemList.length;
        (itemList[nextIndex] as HTMLElement).focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prevIndex =
          (currentIndex - 1 + itemList.length) % itemList.length;
        (itemList[prevIndex] as HTMLElement).focus();
      }
    },
    [debouncedSearchQuery, searchQuery, resData, isOpenSearchedResultList]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscKeyPress);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [handleClickOutside, handleEscKeyPress]);

  useEffect(() => {
    if (isOpenSearchedResultList) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenSearchedResultList, handleKeyDown]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchQuery) return;
    router.push(`/community/search?q=${searchQuery}`);
    setIsOpenSearchedResultList(false);
  };

  return (
    <div className='flex flex-col gap-y-14 w-[30rem] mx-auto pt-10 pb-24'>
      <div className='relative'>
        <div className='w-full h-[2.625rem] flex items-center px-3 outline outline-1 outline-[#e6e8ea] rounded-lg hover:outline-[#93bcfa] hover:outline-2 focus-within:outline-[#93bcfa] focus-within:outline-2'>
          <svg
            fill='none'
            width='21'
            height='21'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m19.59 18.41-3.205-3.203c1.0712-1.3712 1.579-3.0994 1.4197-4.832-.1593-1.73274-.9735-3.3394-2.2767-4.49233s-2.9972-1.76527-4.7364-1.71212c-1.73913.05315-3.39252.76779-4.62288 1.99815s-1.945 2.88375-1.99815 4.6229c-.05316 1.7392.55918 3.4332 1.71211 4.7364s2.7596 2.1174 4.49232 2.2767c1.7327.1592 3.4608-.3485 4.832-1.4197l3.204 3.204c.1567.1541.3678.24.5876.2391.2197-.0009.4302-.0886.5856-.2439.1554-.1554.243-.3659.2439-.5856.001-.2198-.085-.431-.2391-.5876zm-4.886-3.808c-.0183.0156-.036.032-.053.049-.042.044-.042.044-.08.092-.91.886-2.197 1.424-3.571 1.424-1.19232.0001-2.348-.4121-3.27107-1.1668s-1.55672-1.8055-1.79352-2.974c-.2368-1.1686-.06217-2.38311.49428-3.43762s1.46047-1.88413 2.55878-2.34819c1.09833-.46405 2.32333-.53398 3.46733-.19793s2.1365 1.0574 2.8094 2.04174c.6728.98434.9845 2.1711.8822 3.359-.1022 1.1879-.6122 2.3039-1.4434 3.1588z'
              fill='#8994a2'
            ></path>
          </svg>
          <form onSubmit={handleSubmit} className='w-full'>
            <input
              value={searchQuery}
              ref={searchedResultListRef}
              onFocus={() => {
                setIsOpenSearchedResultList(true);
              }}
              onClick={() => {
                setIsOpenSearchedResultList(true);
              }}
              onChange={handleInputSearchQuery}
              className='w-full h-[2.625rem] pl-[0.625rem] pr-[1.8rem] outline-none placeholder-[#888e96] text-[0.825rem] font-extralight'
              placeholder='궁금한 것을 검색해 보세요.'
            />
          </form>
          {searchQuery && (
            <button
              onClick={(e) => {
                setSearchQuery('');
                setIsOpenSearchedResultList(false);
              }}
              className='absolute top-[0.35rem] right-3 p-1'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='25'
                viewBox='0 -960 960 960'
                width='25'
                fill='#a2a4a9'
              >
                <path d='M480-437.847 277.076-234.924q-8.307 8.308-20.884 8.5-12.576.193-21.268-8.5-8.693-8.692-8.693-21.076t8.693-21.076L437.847-480 234.924-682.924q-8.308-8.307-8.5-20.884-.193-12.576 8.5-21.268 8.692-8.693 21.076-8.693t21.076 8.693L480-522.153l202.924-202.923q8.307-8.308 20.884-8.5 12.576-.193 21.268 8.5 8.693 8.692 8.693 21.076t-8.693 21.076L522.153-480l202.923 202.924q8.308 8.307 8.5 20.884.193 12.576-8.5 21.268-8.692 8.693-21.076 8.693t-21.076-8.693L480-437.847Z'></path>
              </svg>
            </button>
          )}
        </div>

        {isOpenSearchedResultList && (
          <div className='z-10 absolute top-[3.05rem] bg-white w-full flex flex-col p-[0.4rem] rounded-md text-[#4e5968] window'>
            <SearchTagList
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setIsSUccessSearchResult={setIsSUccessSearchResult}
              resData={resData}
              debouncedSearchQuery={debouncedSearchQuery}
            />
          </div>
        )}
      </div>

      {!isSuccessSearchResult && (query || tagQuery) && (
        <div className='flex flex-col items-center gap-y-2 mt-2 mb-12'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 200 100'
            width='200'
            height='100'
            preserveAspectRatio='xMidYMid meet'
            style={{
              width: '35%',
              height: '17.5%',
              transform: 'translate3d(0px, 0px, 0px)',
            }}
          >
            <defs>
              <clipPath id='__lottie_element_2'>
                <rect width='200' height='100' x='0' y='0' />
              </clipPath>
            </defs>
            <g clip-path='url(#__lottie_element_2)'>
              <g
                transform='matrix(1,0,0,1,77.94700622558594,31.194000244140625)'
                opacity='1'
                style={{ display: 'block' }}
              >
                <g
                  opacity='1'
                  transform='matrix(1,0,0,1,19.92099952697754,23.868999481201172)'
                >
                  <path
                    fill='rgb(128,132,144)'
                    fill-opacity='0.3'
                    d=' M4.734000205993652,23.618000030517578 C4.734000205993652,23.618000030517578 -17.270999908447266,23.618000030517578 -17.270999908447266,23.618000030517578 C-18.59600067138672,23.618000030517578 -19.672000885009766,22.54400062561035 -19.672000885009766,21.2189998626709 C-19.672000885009766,21.2189998626709 -19.672000885009766,-21.2189998626709 -19.672000885009766,-21.2189998626709 C-19.672000885009766,-22.54400062561035 -18.59600067138672,-23.618000030517578 -17.270999908447266,-23.618000030517578 C-17.270999908447266,-23.618000030517578 17.273000717163086,-23.618000030517578 17.273000717163086,-23.618000030517578 C18.597999572753906,-23.618000030517578 19.672000885009766,-22.54400062561035 19.672000885009766,-21.2189998626709 C19.672000885009766,-21.2189998626709 19.672000885009766,8.680000305175781 19.672000885009766,8.680000305175781 C19.672000885009766,8.680000305175781 4.734000205993652,23.618000030517578 4.734000205993652,23.618000030517578z'
                  ></path>
                </g>
                <g
                  opacity='1'
                  transform='matrix(1,0,0,1,32.124000549316406,40.018001556396484)'
                >
                  <path
                    fill='rgb(128,132,144)'
                    fill-opacity='0.3'
                    d=' M-7.468999862670898,7.468999862670898 C-7.468999862670898,7.468999862670898 -7.468999862670898,-5.070000171661377 -7.468999862670898,-5.070000171661377 C-7.468999862670898,-6.395999908447266 -6.394999980926514,-7.468999862670898 -5.070000171661377,-7.468999862670898 C-5.070000171661377,-7.468999862670898 7.468999862670898,-7.468999862670898 7.468999862670898,-7.468999862670898 C7.468999862670898,-7.468999862670898 -7.468999862670898,7.468999862670898 -7.468999862670898,7.468999862670898z'
                  ></path>
                </g>
              </g>
              <g
                transform='matrix(1,0,0,1,66.20800018310547,17.06999969482422)'
                opacity='1'
                style={{ display: 'block' }}
              >
                <g opacity='1' transform='matrix(1,0,0,1,14.25,14.25)'>
                  <path
                    fill='rgb(128,132,144)'
                    fill-opacity='1'
                    d=' M14,0 C14,7.730999946594238 7.730999946594238,14 0,14 C-7.73199987411499,14 -14,7.730999946594238 -14,0 C-14,-7.73199987411499 -7.73199987411499,-14 0,-14 C7.730999946594238,-14 14,-7.73199987411499 14,0z'
                  ></path>
                </g>
                <g
                  opacity='1'
                  transform='matrix(1,0,0,1,14.440999984741211,12.168000221252441)'
                >
                  <path
                    fill='rgb(51,60,74)'
                    fill-opacity='1'
                    d=' M0.8309999704360962,5.138000011444092 C0.8309999704360962,5.138000011444092 -1.0779999494552612,5.138000011444092 -1.0779999494552612,5.138000011444092 C-1.0779999494552612,5.138000011444092 -1.0779999494552612,4.151000022888184 -1.0779999494552612,4.151000022888184 C-1.0779999494552612,2.2130000591278076 0.12600000202655792,1.444000005722046 1.0049999952316284,0.8809999823570251 C1.7549999952316284,0.4020000100135803 2.184999942779541,0.09600000083446503 2.3499999046325684,-0.621999979019165 C2.493000030517578,-1.2430000305175781 2.378999948501587,-1.7940000295639038 2.009999990463257,-2.257999897003174 C1.5379999876022339,-2.8469998836517334 0.7020000219345093,-3.2290000915527344 -0.12300000339746475,-3.2290000915527344 C-1.475000023841858,-3.2290000915527344 -2.572999954223633,-2.13100004196167 -2.572999954223633,-0.7799999713897705 C-2.572999954223633,-0.7799999713897705 -4.48199987411499,-0.7799999713897705 -4.48199987411499,-0.7799999713897705 C-4.48199987411499,-3.183000087738037 -2.5269999504089355,-5.138000011444092 -0.12300000339746475,-5.138000011444092 C1.281999945640564,-5.138000011444092 2.671999931335449,-4.489999771118164 3.502000093460083,-3.447000026702881 C4.230999946594238,-2.5309998989105225 4.48199987411499,-1.3760000467300415 4.210999965667725,-0.1940000057220459 C3.864000082015991,1.319000005722046 2.805999994277954,1.9950000047683716 2.0339999198913574,2.490000009536743 C1.2000000476837158,3.0230000019073486 0.8309999704360962,3.2939999103546143 0.8309999704360962,4.151000022888184 C0.8309999704360962,4.151000022888184 0.8309999704360962,5.138000011444092 0.8309999704360962,5.138000011444092z'
                  ></path>
                </g>
                <g
                  opacity='1'
                  transform='matrix(1,0,0,1,14.336999893188477,20.33799934387207)'
                >
                  <path
                    fill='rgb(51,60,74)'
                    fill-opacity='1'
                    d=' M0,-1.5269999504089355 C-0.843999981880188,-1.5269999504089355 -1.5269999504089355,-0.8429999947547913 -1.5269999504089355,0 C-1.5269999504089355,0.8429999947547913 -0.843999981880188,1.5269999504089355 0,1.5269999504089355 C0.843999981880188,1.5269999504089355 1.5269999504089355,0.8429999947547913 1.5269999504089355,0 C1.5269999504089355,-0.8429999947547913 0.843999981880188,-1.5269999504089355 0,-1.5269999504089355z'
                  ></path>
                </g>
              </g>
            </g>
          </svg>

          <p className='text-[#4e5968] text-xl text-center font-semibold'>
            검색 결과가 없어요
          </p>
          <p className='text-[#6b7684] font-light text-[0.9rem] text-center leading-6'>
            단어의 철자를 다시 확인해 주세요. <br />
            또는 단어의 수를 줄이거나, 일반적인 검색어로 다시 검색해 보세요.
          </p>
        </div>
      )}

      {isSuccessSearchResult && tagQuery && (
        <div>
          <h2 className='font-bold text-lg text-[#333d4b]'>검색된 태그</h2>
          <Link
            href={`/community/feed?tag=${'테스트'}`}
            className='w-full flex justify-between items-center mt-3 bg-[#f9fafb] p-4 rounded-md'
          >
            <div className='flex items-center gap-x-3'>
              <div
                className='w-fit flex justify-center items-center p-1 rounded-full'
                style={{ background: 'rgba(2, 32, 71, 0.05' }}
              >
                <svg
                  width='24'
                  height='24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  data-v-9b82dcfc=''
                  className=''
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M10.216 5.015a1 1 0 00-1.159.812L8.69 7.909H7a1 1 0 100 2h1.337l-.705 4H6a1 1 0 100 2h1.28l-.307 1.735a1 1 0 001.97.348l.367-2.083h3.969l-.306 1.735a1 1 0 101.97.348l.367-2.083H17a1 1 0 100-2h-1.338l.705-4h1.634a1 1 0 100-2h-1.28l.305-1.735a1 1 0 10-1.97-.347l-.367 2.082h-3.968l.306-1.735a1 1 0 00-.811-1.159zm3.415 8.894l.706-4h-3.969l-.705 4h3.968z'
                    fill='#98A4B7'
                    data-v-9b82dcfc=''
                  ></path>
                </svg>
              </div>
              <div className='flex flex-col items-start text-[#333d4b] font-medium'>
                <span className='text-sm'>{tagQuery}</span>
                <span className='text-xs font-light'>게시글 3개</span>
              </div>
            </div>

            <button className='flex justify-center items-center gap-x-[0.175rem] px-4 py-2 rounded-md bg-[#3a8af9] hover:bg-[#1b64da]'>
              <span className='text-[0.8rem] font-medium text-white'>
                구독하기
              </span>
            </button>
          </Link>
        </div>
      )}

      {isSuccessSearchResult && (query || tagQuery) && (
        <div className='mt-1'>
          <h2 className='font-bold text-lg text-[#333d4b]'>연관 검색 태그</h2>
          <RelatedSearchTagList />
        </div>
      )}

      {isSuccessSearchResult && (query || tagQuery) && (
        <div>
          <h2 className='font-bold text-lg text-[#333d4b]'>커뮤니티 게시글</h2>
          <RelatedSearchPostList searchQuery={searchQuery} />
        </div>
      )}

      {!isSuccessSearchResult && (
        <>
          <div>
            <h2 className='font-bold text-lg text-[#333d4b]'>HOT 태그</h2>
            <HotTagList />
          </div>

          <SwiperBanner />

          <div>
            <h2 className='font-bold text-lg text-[#333d4b]'>실시간 인기 글</h2>
            <HotPostList searchQuery={searchQuery} />
          </div>
        </>
      )}
    </div>
  );
}
