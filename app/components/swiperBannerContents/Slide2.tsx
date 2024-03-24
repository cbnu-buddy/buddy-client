'use client';

import { FC, useEffect, useState } from 'react';

interface Slide2Props {
  handlePrev: () => void;
  handleNext: () => void;
}

// 한글 날짜 형식으로 변환하는 함수
const formatDate = (date: Date) => {
  // 날짜 객체에서 년, 월, 일, 시, 분 추출
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  // 시간을 오전/오후 형식으로 변경
  const ampm = hour < 12 ? '오전' : '오후';

  // 한글 형식으로 날짜 및 시간 조합
  const formattedDate = `${year}.${month < 10 ? '0' : ''}${month}.${
    day < 10 ? '0' : ''
  }${day} ${ampm} ${hour < 10 ? '0' : ''}${hour}:${
    minute < 10 ? '0' : ''
  }${minute} 기준`;

  return formattedDate;
};

export const Slide2: FC<Slide2Props> = ({ handlePrev, handleNext }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [randNum, setRandNum] = useState<number>(0);

  const currentTime = new Date();

  useEffect(() => {
    // 처음 렌더링될 때만 0부터 9까지의 임의의 값을 설정
    setRandNum(Math.floor(Math.random() * 10));
  }, []); // 빈 배열을 두어 한 번만 실행되도록 설정

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 1000); // 2초마다 토글되도록 설정

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-center w-full h-[32.5rem] bg-[#262626]'>
      <div className='flex flex-col items-start gap-8 mt-[5.75rem] w-[45rem]'>
        <div className='flex flex-col gap-4'>
          <h1 className='tracking-wide text-[2.75rem] leading-[1] text-white font-semibold'>
            파티장이 되어보세요!
          </h1>
          <h1 className='tracking-wide text-[2.75rem] leading-[1] text-white font-semibold'>
            지금 파티원은 매칭 대기중 🙋
          </h1>
        </div>
        <p className='text-base text-white'>
          사장, 회장, 반장보다 버디 파티장이 백만 배 쉽다구요. <br />더 파티만
          만들면 귀찮은 건 버디가 다 하니까요.
        </p>
        <button className='mt-3 px-7 py-[0.9rem] bg-white rounded-xl text-lg font-semibold duration-300 hover:drop-shadow-lg'>
          매치 대기 현황 보기
        </button>
        <div className='absolute bottom-[2.3rem] flex items-center gap-4 mt-2'>
          <div className='flex gap-[0.4rem] text-xs font-extralight'>
            <span className='font-medium text-white'>02</span>
            <span className='text-white'>|</span>
            <span className='text-white'>03</span>
          </div>
          <div className='flex items-center gap-[0.15rem]'>
            <button
              onClick={handlePrev}
              className='p-[0.425rem] rounded-md hover:bg-[#5c5c5c]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='20'
                viewBox='0 -960 960 960'
                width='20'
                className='relative left-1'
                fill='white'
              >
                <path d='m127.384-480 301.308 301.308q11.923 11.923 11.615 28.077-.308 16.153-12.231 28.076-11.922 11.923-28.076 11.923t-28.076-11.923L65.078-428.77Q54.23-439.616 49-453.077 43.77-466.539 43.77-480q0-13.461 5.23-26.923 5.231-13.461 16.078-24.307l306.846-306.846q11.922-11.923 28.384-11.616 16.461.308 28.384 12.231 11.923 11.923 11.923 28.076 0 16.154-11.923 28.077L127.384-480Z' />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className='p-[0.425rem] rounded-md hover:bg-[#5c5c5c]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='20'
                viewBox='0 -960 960 960'
                width='20'
                className='relative right-1 scale-x-[-1]'
                fill='white'
              >
                <path d='m127.384-480 301.308 301.308q11.923 11.923 11.615 28.077-.308 16.153-12.231 28.076-11.922 11.923-28.076 11.923t-28.076-11.923L65.078-428.77Q54.23-439.616 49-453.077 43.77-466.539 43.77-480q0-13.461 5.23-26.923 5.231-13.461 16.078-24.307l306.846-306.846q11.922-11.923 28.384-11.616 16.461.308 28.384 12.231 11.923 11.923 11.923 28.076 0 16.154-11.923 28.077L127.384-480Z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='relative right-12 flex flex-col gap-4 mb-auto mt-[5.5rem]'>
        <div className='relative flex items-end gap-[0.55rem]'>
          <div className='relative w-28 h-[9.5rem] flex justify-center items-center bg-black rounded-lg'>
            <span className='strech text-5xl text-[6.5rem] pt-1 pb-5 font-semibold leading-[1.75] text-white'>
              3
            </span>
            <hr className='w-full absolute top-[4.75rem] border-[1.5px] border-x-black border-y-black' />
          </div>
          <div className='relative w-28 h-[9.5rem] flex justify-center items-center bg-black rounded-lg'>
            <span className='text-5xl text-[6.5rem] pt-1 pb-5 font-semibold leading-[1.75] text-white'>
              {randNum}
            </span>
            <hr className='w-full absolute top-[4.75rem] border-[1.5px] border-x-black border-y-black' />
            <div className='absolute border-b-red-500 border-b-8' />
          </div>
          <span className='absolute right-[-2.75rem] ml-1 text-white text-4xl font-semibold'>
            명
          </span>
        </div>
        <button
          className={`border rounded-lg border-[#ffee8d] text-[#ffee8d] px-5 py-2 text-xl font-medium ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transition: 'opacity 1s ease-in-out' }}
        >
          파티원 대기 중
        </button>
        <p className='text-[#9d9d9d] text-xs font-extralight mt-1'>
          {formatDate(currentTime)}
        </p>
      </div>
    </div>
  );
};
