'use client';

import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import TagEditor from './components/TagEditor';

const CustomCKEditor = dynamic(
  () => import('@/app/components/CustomCKEditor'),
  { ssr: false, loading: () => <Loading /> }
);

export default function CreateCommunityPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [isTitleValidFail, setIsTitleValidFail] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsTitleValidFail(false);
  };

  const handleCancelContestRegister = () => {
    const userResponse = confirm('게시글 작성을 취소하시겠습니까?');
    if (!userResponse) return;

    router.back();
  };

  const handleRegisterContest = () => {
    if (!title) {
      alert('제목을 입력해 주세요');
      window.scrollTo(0, 0);
      titleRef.current?.focus();
      setIsTitleValidFail(true);
      return;
    }

    if (!content) {
      alert('본문을 입력해 주세요');
      window.scrollTo(0, 0);
      return;
    }

    // 등록 로직 추가
  };

  return (
    <div className='mt-6 px-5 2lg:px-0'>
      <div className='flex flex-col w-[50rem] mx-auto'>
        <p className='text-2xl font-semibold'>글 쓰기</p>
        <div className='flex flex-col relative z-0 w-1/2 group mt-5 mb-8'>
          <input
            type='text'
            name='floating_first_name'
            className={`block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-${
              isTitleValidFail ? 'pink' : 'blue'
            }-500 focus:border-${
              isTitleValidFail ? 'red' : 'blue'
            }-500 focus:outline-none focus:ring-0 peer`}
            placeholder=' '
            required
            value={title}
            ref={titleRef}
            onChange={handleTitleChange}
          />
          <label
            htmlFor='floating_first_name'
            className={`peer-focus:font-light absolute text-base left-[0.1rem] font-light text-${
              isTitleValidFail ? 'red' : 'gray'
            }-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-${
              isTitleValidFail ? 'red' : 'blue'
            }-600 peer-focus:dark:text-${
              isTitleValidFail ? 'red' : 'blue'
            }-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]`}
          >
            게시글 제목
          </label>
          <p
            className={`text-${
              isTitleValidFail ? 'red' : 'gray'
            }-500 text-xs tracking-widest font-light mt-1`}
          >
            제목을 입력해 주세요
          </p>
        </div>

        <div className='w-full mx-auto overflow-auto'>
          <CustomCKEditor initEditorContent={''} onEditorChange={setContent} />
        </div>

        <div className='mt-8'>
          <div className='flex flex-col gap-y-1'>
            <p className='text-base font-semibold'>태그</p>
            <TagEditor />

            <div className='mt-14 pb-2 flex justify-end gap-3'>
              <button
                onClick={handleCancelContestRegister}
                className='px-4 py-[0.5rem] rounded-[6px] font-light'
              >
                취소
              </button>
              <button
                onClick={handleRegisterContest}
                className='text-[#f9fafb] bg-[#3a8af9] px-4 py-[0.5rem] rounded-[6px] focus:bg-[#1c6cdb] hover:bg-[#1c6cdb]'
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
