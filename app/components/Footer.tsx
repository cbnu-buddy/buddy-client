import Link from 'next/link';
import React from 'react';

export default function Footer() {
  // 현재 년도를 가져오기
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full flex justify-start mt-auto font-light text-[10px] py-5 px-3 leading-[1.175rem] bg-[#1e1e1e]'>
      <div className='flex flex-col gap-10 mx-auto w-[47.5rem] py-10'>
        <div className='flex justify-between w-full'>
          <h1 className='text-white text-3xl font-semibold'>BUDDY</h1>
          <div className='flex flex-col gap-4 text-[0.77rem] leading-[1.25]'>
            <span className='text-[#9d9d9d] font-semibold'>서비스</span>
            <Link href='/notices' className='text-white hover:underline'>
              공지사항
            </Link>
            <Link href='/faq' className='text-white hover:underline'>
              자주 묻는 질문
            </Link>
          </div>
        </div>

        <div className='text-xs grid grid-cols-1 gap-y-5 mt-24'>
          <span className='text-[0.77rem] leading-[1.25] text-[#9d9d9d] font-semibold'>
            (주)버디
          </span>
          <p className='flex flex-col gap-y-[0.1rem] tracking-wide'>
            <span className=' text-[#9d9d9d]'>
              호스팅 서비스 : 주식회사 버디 | 통신판매업 신고번호 :
              2024-청주개신-06612
            </span>
            <span className=' text-[#9d9d9d]'>
              (28644) 충북 청주시 서원구 충대로 1, 충북대학교 전자정보대학
              소프트웨어학부 S4-1동
            </span>
          </p>
          <p className='flex gap-5'>
            <button className='text-white'>서비스 이용약관</button>
            <button className='text-white'>개인정보 처리방침</button>
          </p>
        </div>
      </div>
    </div>
  );
}
