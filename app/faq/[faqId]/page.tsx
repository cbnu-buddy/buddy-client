import Link from 'next/link';
import React from 'react';

interface DefaultProps {
  params: {
    faqId: string;
  };
}

export default function page(props: DefaultProps) {
  const faqId = props.params.faqId;

  const dataSet = [
    {
      title: '파티장의 파티 요금은 어떻게 산정되나요?',
      tags: ['파티장', '파티 요금'],
      content: ` <p>
      파티장의 파티 요금은{' '}
      <strong>
        모집한 파티원 수에 비례하여 매달 링키드 정산일에 링키드 머니를 통해
        적립
      </strong>
      돼요.
    </p>
    <p>
      파티원 1인 모집시 적립 금액은 파티 분담금(1인당 서비스 이용료)에서
      링키드 수수료를 차감한 금액이에요.
    </p>
    <p>
      <br />
    </p>
    <p>
      각 서비스 별 파티장의 파티 요금 관련 자세한 내용은 아래 표를 통해
      확인해 주세요.
    </p>
    <blockquote>
      <strong>
        파티장의 파티 요금 = (A. 파티 분담금 - B. 링키드 수수료) × C. 파티원
        수
      </strong>
    </blockquote>
    <ul>
      <li>A. 파티 분담금 : 파티원 1인당 서비스 이용 금액, 1/N 금액</li>
      <li>B. 링키드 수수료 : 파티원 1명 모집에 따른 링키드 이용료</li>
      <li>C. 파티원 수 : 서비스 별 모집 가능 파티 인원 상이</li>
    </ul>
    <p>
      <img src='https://storage.googleapis.com/linkidimage/Live/admin/파티장 파티 요금 정산 상세-1700719783052.png' />
    </p>`,
    },
  ];

  return (
    <div className='my-[5rem] w-[42.5rem] grid grid-cols-1 gap-y-3 mx-auto'>
      <Link href='/faq' className='flex items-center gap-x-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='18'
          viewBox='0 -960 960 960'
          width='18'
          fill='#656565'
        >
          <path d='M233-440h607q17 0 28.5-11.5T880-480q0-17-11.5-28.5T840-520H233l155-156q11-11 11.5-27.5T388-732q-11-11-28-11t-28 11L108-508q-6 6-8.5 13T97-480q0 8 2.5 15t8.5 13l224 224q11 11 27.5 11t28.5-11q12-12 12-28.5T388-285L233-440Z' />
        </svg>
        <span className='text-[#656565] text-xs font-light'>
          목록으로 돌아가기
        </span>
      </Link>

      <h1 className='mt-2 text-[1.375rem] leading-[2] font-semibold'>
        {dataSet[parseInt(faqId) - 1].title}
      </h1>

      <div className='flex gap-x-[0.375rem]'>
        {dataSet[parseInt(faqId) - 1].tags.map((tag: string) => (
          <span
            key={faqId}
            className='px-2 py-1 text-[#656565] bg-[#efefef] text-xs font-semibold rounded-[0.3rem]'
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className='mt-7 faq-content'
        dangerouslySetInnerHTML={{
          __html: dataSet[parseInt(faqId) - 1].content,
        }}
      />
    </div>
  );
}
