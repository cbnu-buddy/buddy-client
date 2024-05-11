import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const LottieDotLoading = dynamic(
  () => import('./components/LottieDotLoading'),
  {
    ssr: false,
  }
);

export default function AddPartyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mt-[4.5rem] mb-[7.5rem] flex justify-center gap-x-[7rem]'>
      <div className='mt-16 flex flex-col gap-y-3 w-[16rem] text-[0.775rem] leading-[1.25] font-light'>
        <p className='flex justify-between bg-[#f5f5f5] p-4 rounded-[0.625rem] text-[#656565]'>
          <span className='text-inherit'>공유 서비스</span>
          <span className='font-medium'>넷플릭스 스탠다드</span>
        </p>
        <p className='relative flex justify-between bg-[#f5f5f5] p-4 rounded-[0.625rem] text-[#656565]'>
          <span className='text-[#3a8af9] font-semibold'>로그인 정보 입력</span>
          {/* <span className='font-medium text-center'>-</span> */}
          <LottieDotLoading />
        </p>
        <p className='flex justify-between bg-[#f5f5f5] p-4 rounded-[0.625rem] text-[#656565]'>
          <span className='text-inherit'>모집 인원 설정</span>
          <span className='font-medium'>-</span>
          {/* <span>5명</span> */}
        </p>
        <p className='flex justify-between bg-[#f5f5f5] p-4 rounded-[0.625rem] text-[#656565]'>
          <span>파티 기간 설정</span>
          <span className='font-medium'>-</span>
          {/* <span>2024.04.11~2024.10.10</span> */}
        </p>
        <p className='flex justify-between bg-[#f5f5f5] p-4 rounded-[0.625rem] text-[#656565]'>
          <span>파티 규칙 확인</span>
          <span className='font-medium'>-</span>
        </p>
      </div>
      {children}
    </div>
  );
}
