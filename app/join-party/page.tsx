'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import netflixImg from '@/public/images/netflix.png';
import waveImg from '@/public/images/wave.png';
import watchaImg from '@/public/images/watcha.png';
import laftelImg from '@/public/images/laftel.png';
import tvingImg from '@/public/images/tving.png';
import disneyPlusImg from '@/public/images/disney_plus.png';
import youtubePremiumImg from '@/public/images/youtube_premium.png';
import coupangPlayImg from '@/public/images/coupang_play.png';
import ridiBooksImg from '@/public/images/ridi_books.png';
import miliImg from '@/public/images/mili.png';
import yes24Img from '@/public/images/yes24.png';
import spotifyImg from '@/public/images/spotify.png';
import appleMusicImg from '@/public/images/apple_music.png';
import hotImg from '@/public/images/hot.png';
import eventImg from '@/public/images/event.png';
import newImg from '@/public/images/new.png';
import { JoinPartySelectedPlanInfo } from '../types/joinPartySelectedPlanInfo';
import SelectMembershipPlanModal from './components/SelectMembershipPlanModal';
import { joinPartySelectedPlanInfoStore } from '../store/join-party/JoinPartySelectedPlanInfo';

export default function JoinParty() {
  const [categoryTabName, setCategoryTabName] = useState('all');

  const joinPartySelectedPlanInfos: JoinPartySelectedPlanInfo[] = [
    {
      iconImg: netflixImg,
      iconImgAlt: 'netflix image',
      name: '넷플릭스',
      category: 'media',
      originPrice: 17000,
      discountedPrice: 7000,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '넷플릭스 추가공유',
          price: 9000,
        },
        {
          name: '넷플릭스 가구공유',
          price: 7000,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: waveImg,
      iconImgAlt: 'wave image',
      name: '웨이브',
      category: 'media',
      originPrice: 13900,
      discountedPrice: 4475,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '웨이브 프리미엄',
          price: 4475,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: watchaImg,
      iconImgAlt: 'watcha image',
      name: '왓챠',
      category: 'media',
      originPrice: 12900,
      discountedPrice: 4225,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '왓챠 프리미엄',
          price: 4225,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: laftelImg,
      iconImgAlt: 'laftel image',
      name: '라프텔',
      category: 'media',
      originPrice: 14900,
      discountedPrice: 3725,
      tag: '',
      planDetailInfos: [
        {
          name: '라프텔 프리미엄',
          price: 3725,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: tvingImg,
      iconImgAlt: 'tving image',
      name: '티빙',
      category: 'media',
      originPrice: 17000,
      discountedPrice: 5250,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '왓챠 프리미엄',
          price: 5250,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: disneyPlusImg,
      iconImgAlt: 'disney plus image',
      name: '디즈니+',
      category: 'media',
      originPrice: 13900,
      discountedPrice: 4475,
      tag: '',
      planDetailInfos: [
        {
          name: '디즈니플러스 프리미엄',
          price: 4475,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: youtubePremiumImg,
      iconImgAlt: 'youtube premium image',
      name: '유튜브 프리미엄',
      category: 'media',
      originPrice: 14900,
      discountedPrice: 4250,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '유튜브 프리미엄',
          price: 4250,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: coupangPlayImg,
      iconImgAlt: 'coupang play image',
      name: '쿠팡 플레이',
      category: 'media',
      originPrice: 4900,
      discountedPrice: 1247,
      tag: 'new',
      planDetailInfos: [
        {
          name: '쿠팡플레이 프리미엄',
          price: 1247,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: ridiBooksImg,
      iconImgAlt: 'ridi books image',
      name: '리디북스',
      category: 'book',
      originPrice: 9500,
      discountedPrice: 2375,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '리디북스 프리미엄',
          price: 2375,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: miliImg,
      iconImgAlt: 'mili image',
      name: '밀리의 서재',
      category: 'book',
      originPrice: 6100,
      discountedPrice: 3050,
      tag: 'event',
      planDetailInfos: [
        {
          name: '밀리 프리미엄',
          price: 3050,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: yes24Img,
      iconImgAlt: 'yes24 image',
      name: '예스24 북클럽',
      category: 'book',
      originPrice: 7900,
      discountedPrice: 3950,
      tag: '',
      planDetailInfos: [
        {
          name: '예스24 프리미엄',
          price: 3950,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: spotifyImg,
      iconImgAlt: 'spotify image',
      name: '스포티파이',
      category: 'music',
      originPrice: 9100,
      discountedPrice: 2275,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '스포티파이 프리미엄',
          price: 2275,
        },
      ],
      selectedPlan: '',
    },
    {
      iconImg: appleMusicImg,
      iconImgAlt: 'apple music image',
      name: '애플 뮤직',
      category: 'music',
      originPrice: 8900,
      discountedPrice: 2225,
      tag: '',
      planDetailInfos: [
        {
          name: '애플뮤직 프리미엄',
          price: 2225,
        },
      ],
      selectedPlan: '',
    },
  ];

  const updateSelectedPlanInfo = joinPartySelectedPlanInfoStore(
    (state: any) => state.updateSelectedPlanInfo
  );

  const [openSelectMembershipPlanModal, setOpenSelectMembershipPlanModal] =
    useState<string | undefined>();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex justify-center bg-[#f4f4f9] text-center'>
      <div className='w-[55rem] mt-10 mb-[7.5rem]'>
        <h1 className='text-[1.375rem] leading-[2] font-semibold'>
          어떤 파티를 찾고 있나요?
        </h1>

        <div className='relative mx-auto w-fit'>
          <div className='w-full mt-6 flex justify-center items-center gap-x-1 text-center'>
            <button
              className={`${
                categoryTabName === 'all'
                  ? 'text-blue-700 font-semibold'
                  : 'text-[#4a4a4a]'
              } w-20 py-2 duration-300`}
              onClick={() => setCategoryTabName('all')}
            >
              전체
            </button>
            <button
              className={`${
                categoryTabName === 'media'
                  ? 'text-blue-700 font-semibold'
                  : 'text-[#4a4a4a]'
              } w-20 py-2`}
              onClick={() => setCategoryTabName('media')}
            >
              영상
            </button>
            <button
              className={`${
                categoryTabName === 'book'
                  ? 'text-blue-700 font-semibold'
                  : 'text-[#4a4a4a]'
              } w-20 py-2`}
              onClick={() => setCategoryTabName('book')}
            >
              도서
            </button>
            <button
              className={`${
                categoryTabName === 'music'
                  ? 'text-blue-700 font-semibold'
                  : 'text-[#4a4a4a]'
              } w-20 py-2`}
              onClick={() => setCategoryTabName('music')}
            >
              음악
            </button>
          </div>
          <div
            className={`absolute border-b-2 border-blue-700 w-7 duration-300 rounded-md ${
              categoryTabName === 'all'
                ? 'left-[1.625rem]'
                : categoryTabName === 'media'
                ? 'left-[6.85rem]'
                : categoryTabName === 'book'
                ? 'left-[12.075rem]'
                : 'left-[17.35rem]'
            }`}
          />
        </div>

        <div
          className='grid grid-cols-6 gap-x-3 gap-y-3 mt-7'
          data-aos='fade-up'
          data-aos-easing='ease-out'
          data-aos-duration='250'
        >
          {joinPartySelectedPlanInfos.map(
            (joinPartySelectedPlanInfo: JoinPartySelectedPlanInfo, idx) =>
              (categoryTabName === joinPartySelectedPlanInfo.category ||
                categoryTabName === 'all') && (
                <button
                  key={idx}
                  className='flex flex-col items-center p-2 bg-white rounded-lg h-44 w-32 hover:scale-105 duration-300 ease-out'
                  onClick={() => {
                    setOpenSelectMembershipPlanModal('default');
                    updateSelectedPlanInfo(joinPartySelectedPlanInfo);
                  }}
                >
                  <Image
                    src={joinPartySelectedPlanInfo.iconImg}
                    alt={joinPartySelectedPlanInfo.iconImgAlt}
                    width={85}
                    height={0}
                    quality={100}
                    className='
          mt-3'
                  />
                  <p className='mt-3'>{joinPartySelectedPlanInfo.name}</p>
                  <p className='mt-[0.375rem] text-[#8b8b8b] text-[0.5rem] leading-[1] line-through font-extralight'>
                    월 {joinPartySelectedPlanInfo.originPrice.toLocaleString()}
                    원
                  </p>
                  <p className='flex items-center gap-1 mt-1 text-[#656565] text-xs font-medium'>
                    {joinPartySelectedPlanInfo.discountedPrice.toLocaleString()}
                    원{' '}
                    {joinPartySelectedPlanInfo.tag === 'hot' ? (
                      <span>
                        <Image
                          src={hotImg}
                          alt='hot image'
                          width={35}
                          height={0}
                          quality={100}
                          className=''
                        />
                      </span>
                    ) : joinPartySelectedPlanInfo.tag === 'event' ? (
                      <span>
                        <Image
                          src={eventImg}
                          alt='event image'
                          width={35}
                          height={0}
                          quality={100}
                          className=''
                        />
                      </span>
                    ) : null}
                  </p>
                </button>
              )
          )}

          {openSelectMembershipPlanModal && (
            <SelectMembershipPlanModal
              openSelectMembershipPlanModal={openSelectMembershipPlanModal}
              setOpenSelectMembershipPlanModal={
                setOpenSelectMembershipPlanModal
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
