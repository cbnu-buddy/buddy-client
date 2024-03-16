import Image from 'next/image';
import { FC } from 'react';
import myPartyImg from '@/public/images/myparty.png';

interface Slide1Props {
  handlePrev: () => void;
  handleNext: () => void;
}

export const Slide1: FC<Slide1Props> = ({ handlePrev, handleNext }) => {
  return (
    <div className='flex justify-center w-full h-[30rem] bg-[#ffee8d]'>
      <div className='flex flex-col items-start gap-8 mt-[5.75rem] w-[59.5rem]'>
        <div className='flex flex-col gap-4'>
          <h1 className='tracking-wide text-[2.75rem] leading-[1] text-[#13182c] font-bold'>
            모두가 함께하는
          </h1>
          <h1 className='tracking-wide text-[2.75rem] leading-[1] text-[#13182c] font-bold'>
            공동 구독 플랫폼
          </h1>
        </div>
        <p className='text-base'>
          넷플릭스부터 애플 뮤직까지. <br />더 안전하게 버디로 이용하세요!
        </p>
        <button className='mt-3 px-12 py-[0.9rem] bg-white rounded-xl text-lg font-semibold duration-300 hover:drop-shadow-lg'>
          버디 시작하기
        </button>
        <div className='absolute bottom-[2.3rem] flex items-center gap-4 mt-2'>
          <div className='flex gap-[0.4rem] text-xs font-extralight'>
            <span className='font-medium'>01</span>
            <span>|</span>
            <span>03</span>
          </div>
          <div className='flex items-center gap-[0.15rem]'>
            <button
              onClick={handlePrev}
              className='p-[0.425rem] rounded-md hover:bg-[#fff3b4]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='20'
                viewBox='0 -960 960 960'
                width='20'
                className='relative left-1'
              >
                <path d='m127.384-480 301.308 301.308q11.923 11.923 11.615 28.077-.308 16.153-12.231 28.076-11.922 11.923-28.076 11.923t-28.076-11.923L65.078-428.77Q54.23-439.616 49-453.077 43.77-466.539 43.77-480q0-13.461 5.23-26.923 5.231-13.461 16.078-24.307l306.846-306.846q11.922-11.923 28.384-11.616 16.461.308 28.384 12.231 11.923 11.923 11.923 28.076 0 16.154-11.923 28.077L127.384-480Z' />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className='p-[0.425rem] rounded-md hover:bg-[#fff3b4]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='20'
                viewBox='0 -960 960 960'
                width='20'
                className='relative right-1 scale-x-[-1]'
              >
                <path d='m127.384-480 301.308 301.308q11.923 11.923 11.615 28.077-.308 16.153-12.231 28.076-11.922 11.923-28.076 11.923t-28.076-11.923L65.078-428.77Q54.23-439.616 49-453.077 43.77-466.539 43.77-480q0-13.461 5.23-26.923 5.231-13.461 16.078-24.307l306.846-306.846q11.922-11.923 28.384-11.616 16.461.308 28.384 12.231 11.923 11.923 11.923 28.076 0 16.154-11.923 28.077L127.384-480Z' />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <Image
            src={myPartyImg}
            alt='myPartyImage'
            width={350}
            height={0}
            quality={100}
            className='absolute top-[2.5rem] right-[15rem]'
          />
        </div>
      </div>
    </div>
  );
};
