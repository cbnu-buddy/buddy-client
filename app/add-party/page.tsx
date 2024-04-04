'use client';

import Image from 'next/image';
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
import SelectMembershipPlanModal from './components/\bSelectMembershipPlanModal';
import { AddPartySelectedPlanInfo } from '../types/addPartySelectedPlanInfo';
import { addPartySelectedPlanInfoStore } from '../store/add-party/AddPartySelectedPlanInfo';
import PartyLeaderGuideModal from './components/PartyLeaderGuideModal';

export default function AddParty() {
  const [categoryTabName, setCategoryTabName] = useState('all');

  const addPartySelectedPlanInfos: AddPartySelectedPlanInfo[] = [
    {
      iconImg: netflixImg,
      iconImgAlt: 'netflix image',
      name: '넷플릭스',
      category: 'media',
      originPrice: 17000,
      discountedPrice: 9000,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '넷플릭스 추가공유',
          description: [
            `파티원 1~2명 모집 가능`,
            `파티원 1명당 매달 8,505원 적립! <br />
      (파티 분담금 9,000원-버디 수수료 495원)`,
            ,
            `최대 인원(2명) 모집하면, 매달 최대 17,010원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
        {
          name: '넷플릭스 가구공유',
          description: [
            `같은 주소에 거주중인 파티원 최대 3명 모집 가능`,
            `버디 수수료 0원 / 파티 위약금 0원`,
            ,
            `파티 요금 정산 여부 설정 가능`,
            `파티 요금 정산 시 매달 최대 12,750원 적립 <br /> <img
          src='/images/warning_icon.png'
          alt='warning icon image'
          width='20px'
          style="position: relative; display: inline; bottom: 2px"
        /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: "'한국' 넷플릭스 계정만 공유할 수 있어요.",
          description:
            '🇰🇷 넷플릭스 정책에 따라 파티장과 파티원의 국가가 같아야만 공유를 할 수 있어요.',
        },
        {
          subtitle:
            '통신사 제휴 요금을 이용중이라면 넷플릭스 추가공유 파티를 만들 수 없어요.',
          description:
            '⛔️ 통신사 제휴 요금 등 넷플릭스 파트너사를 통해 결제/이용중인 경우 추가 회원 자리를 구매할 수 없어요.',
        },
        {
          subtitle:
            '파티 시작일에 넷플릭스 프리미엄 이용권과 추가 회원 자리를 구매해 주세요.',
          description:
            '💰 넷플릭스 정책에 따라, 가구 외 구성원과 함께 이용하려면 추가 회원 자리를 구매해야 해요.',
        },
        {
          subtitle: '24시간 이내 파티원을 추가 회원으로 초대해 주세요.',
          description:
            '💁 파티원이 들어오면 푸시/알림톡/문자를 통해 알려드려요. 24시간 내 파티원의 버디 아이디 메일(@buddy.net)로 초대를 진행하지 않으면 파티원이 넷플릭스를 이용할 수 없어요.',
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
    },
    {
      iconImg: waveImg,
      iconImgAlt: 'wave image',
      name: '웨이브',
      category: 'media',
      originPrice: 13900,
      discountedPrice: 3475,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '웨이브 프리미엄',
          description: [
            `파티원 1~3명 모집 가능`,
            ,
            `파티원 1명당 매달 3,275원 적립! <br />
          (파티 분담금 3,475원-버디 수수료 200원)`,
            `최대 인원(3명) 모집하면, 매달 최대 9,825원 적립 <br /> <img
            src='/images/warning_icon.png'
            alt='warning icon image'
            width='20px'
            style="position: relative; display: inline; bottom: 2px"
          /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },
        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 '웨이브 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 '웨이브 프리미엄' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
    },
    {
      iconImg: watchaImg,
      iconImgAlt: 'watcha image',
      name: '왓챠',
      category: 'media',
      originPrice: 12900,
      discountedPrice: 3225,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '왓챠 프리미엄',
          description: [
            `파티원 1~3명 모집 가능`,
            `파티원 1명당 매달 3,025원 적립! <br />
      (파티 분담금 3,225원-버디 수수료 200원)`,
            ,
            `최대 인원(3명) 모집하면, 매달 최대 9,075원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 '왓챠 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 '왓챠 프리미엄' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
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
          description: [
            `파티원 1~3명 모집 가능`,
            `파티원 1명당 매달 3,525원 적립! <br />
      (파티 분담금 3,725원-버디 수수료 200원)`,
            ,
            `최대 인원(3명) 모집하면, 매달 최대 10,575원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },
        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 '라프텔 프리미엄' 요금제를 결제해 주세요.",
          description:
            " 파티장이 '라프텔 프리미엄' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
    },
    {
      iconImg: tvingImg,
      iconImgAlt: 'tving image',
      name: '티빙',
      category: 'media',
      originPrice: 17000,
      discountedPrice: 4250,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '티빙 프리미엄',
          description: [
            `파티원 1~3명 모집 가능`,
            `파티원 1명당 매달 4,050원 적립! <br />
      (파티 분담금 4,250원-버디 수수료 200원)`,
            ,
            `최대 인원(3명) 모집하면, 매달 최대 12,150원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },

        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 '티빙 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 '티빙 프리미엄' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
    },
    {
      iconImg: disneyPlusImg,
      iconImgAlt: 'disney plus image',
      name: '디즈니+',
      category: 'media',
      originPrice: 13900,
      discountedPrice: 3475,
      tag: '',
      planDetailInfos: [
        {
          name: '디즈니플러스 프리미엄',
          description: [
            `파티원 1~2명 모집 가능`,
            `파티원 1명당 매달 3,275원 적립! <br />
      (파티 분담금 3,475원-버디 수수료 200원)`,
            ,
            `최대 인원(3명) 모집하면, 매달 최대 9,825원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: "'디즈니플러스의 ID를 버디 메일로 변경해 주세요.",
          description:
            '💌 왜 버디 메일을 사용하나요? 디즈니플러스 로그인 보안 관련 파티장의 번거로움(2차 인증번호 확인 등)을 버디 메일을 통해 해결하기 위한 정책이에요.',
        },
        {
          subtitle: "'한국' 디즈니플러스 계정만 공유할 수 있어요.",
          description:
            '🇰🇷 디즈니플러스 정책상 나라별로 지원하는 콘텐츠가 다르기 때문에 꼭 한국 디즈니플러스 계정을 공유해 주셔야 해요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 '디즈니 플러스' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 '디즈니 플러스' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
    },
    {
      iconImg: youtubePremiumImg,
      iconImgAlt: 'youtube premium image',
      name: '유튜브 프리미엄',
      category: 'media',
      originPrice: 14900,
      discountedPrice: 3725,
      tag: 'hot',
      planDetailInfos: [
        {
          name: '유튜브 프리미엄',
          description: [
            `파티원 1~3명 모집 가능`,
            `파티원 1명당 매달 8,505원 적립! <br />
      (파티 분담금 9,000원-버디 수수료 495원)`,
            ,
            `최대 인원(2명) 모집하면, 매달 최대 17,010원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },

        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 ‘유튜브 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 ‘유튜브 프리미엄' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
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
          description: [
            `파티원 1~2명 모집 가능`,
            `파티원 1명당 매달 8,505원 적립! <br />
      (파티 분담금 9,000원-버디 수수료 495원)`,
            ,
            `최대 인원(2명) 모집하면, 매달 최대 17,010원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },

        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 ‘쿠팡플레이 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 ‘쿠팡플레이 프리미엄' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
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
          description: [
            `파티원 1~2명 모집 가능`,
            `파티원 1명당 매달 8,505원 적립! <br />
      (파티 분담금 9,000원-버디 수수료 495원)`,
            ,
            `최대 인원(2명) 모집하면, 매달 최대 17,010원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },

        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 ‘리디북스 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 ‘리디북스 프리미엄' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
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
          description: [
            `파티원 1~2명 모집 가능`,
            `파티원 1명당 매달 8,505원 적립! <br />
      (파티 분담금 9,000원-버디 수수료 495원)`,
            ,
            `최대 인원(2명) 모집하면, 매달 최대 17,010원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },

        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 ‘밀리 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 ‘밀리 프리미엄' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
    },
    {
      iconImg: yes24Img,
      iconImgAlt: 'yes24 image',
      name: '예스24 북클럽',
      category: 'book',
      originPrice: 6100,
      discountedPrice: 3050,
      tag: '',
      planDetailInfos: [
        {
          name: '예스24 프리미엄',
          description: [
            `파티원 1~2명 모집 가능`,
            `파티원 1명당 매달 8,505원 적립! <br />
      (파티 분담금 9,000원-버디 수수료 495원)`,
            ,
            `최대 인원(2명) 모집하면, 매달 최대 17,010원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },

        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 ‘예스24 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 ‘예스24 프리미엄' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
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
          description: [
            `파티원 1~2명 모집 가능`,
            `파티원 1명당 매달 8,505원 적립! <br />
      (파티 분담금 9,000원-버디 수수료 495원)`,
            ,
            `최대 인원(2명) 모집하면, 매달 최대 17,010원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },

        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 ‘스포티파이 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 ‘스포티파이' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
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
          description: [
            `파티원 1~2명 모집 가능`,
            `파티원 1명당 매달 8,505원 적립! <br />
      (파티 분담금 9,000원-버디 수수료 495원)`,
            ,
            `최대 인원(2명) 모집하면, 매달 최대 17,010원 적립 <br /> <img
        src='/images/warning_icon.png'
        alt='warning icon image'
        width='20px'
        style="position: relative; display: inline; bottom: 2px"
      /> 원단위 절삭으로 5원 이내 차이가 있을 수 있어요.`,
          ],
        },
      ],
      selectedPlan: '',
      partyLeaderGuides: [
        {
          subtitle: '공유해도 안전한 비밀번호를 사용해 주세요.',
          description:
            '🔐 파티장의 계정을 파티원과 함께 사용하게 될거예요. 평소에 자주 쓰는 비밀번호를 공유하면 안돼요.',
        },

        {
          subtitle: '소셜 로그인 계정은 공유할 수 없어요.',
          description:
            '🙅‍♂️ 개인정보 보호를 위해 소셜 로그인 계정 공유를 금지하고 있어요.',
        },
        {
          subtitle: '성인 인증을 완료해 주세요.',
          description:
            '🔞 파티장이 성인 인증을 하지 않으면, 파티원이 성인 콘텐츠 시청을 할 수 없어요.',
        },
        {
          subtitle:
            "파티장은 파티 시작일에 맞춰 ‘애플뮤직 프리미엄' 요금제를 결제해 주세요.",
          description:
            "🎫 파티장이 ‘애플뮤직' 요금제를 먼저 결제하여 파티원과 공유하면, 버디가 매달 파티 요금을 적립해 드려요.",
        },
        {
          subtitle: '결제 카드 등록이 필요해요. 카드를 준비해 주세요.',
          description:
            '🪙 파티장 귀책사유 발생시 위약금을 부과하기 위해 결제 카드 등록이 필요해요. 등록 과정에서 100원이 결제된 후 바로 취소될 거예요.',
        },
      ],
    },
  ];

  const updateSelectedPlanInfo = addPartySelectedPlanInfoStore(
    (state: any) => state.updateSelectedPlanInfo
  );

  const [openSelectMembershipPlanModal, setOpenSelectMembershipPlanModal] =
    useState<string | undefined>();

  const [openPartyLeaderGuideModal, setOpenPartyLeaderGuideModalModal] =
    useState<string | undefined>();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex justify-center bg-[#f4f4f9] text-center'>
      <div className='w-[55rem] mt-10 mb-[7.5rem]'>
        <h1 className='text-[1.375rem] leading-[2] font-semibold'>
          어떤 파티를 만드시겠어요?
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
          {addPartySelectedPlanInfos.map(
            (addPartySelectedPlanInfo: AddPartySelectedPlanInfo, idx) =>
              (categoryTabName === addPartySelectedPlanInfo.category ||
                categoryTabName === 'all') && (
                <button
                  key={idx}
                  className='flex flex-col items-center p-2 bg-white rounded-lg h-44 w-32 hover:scale-105 duration-300 ease-out'
                  onClick={() => {
                    setOpenSelectMembershipPlanModal('default');
                    updateSelectedPlanInfo(addPartySelectedPlanInfo);
                  }}
                >
                  <Image
                    src={addPartySelectedPlanInfo.iconImg}
                    alt={addPartySelectedPlanInfo.iconImgAlt}
                    width={85}
                    height={0}
                    quality={100}
                    className='
          mt-3'
                  />
                  <p className='mt-3'>{addPartySelectedPlanInfo.name}</p>
                  <p className='mt-[0.375rem] text-[#8b8b8b] text-[0.5rem] leading-[1] line-through font-extralight'>
                    월 {addPartySelectedPlanInfo.originPrice.toLocaleString()}원
                  </p>
                  <p className='flex items-center gap-1 mt-1 text-[#656565] text-xs font-medium'>
                    {addPartySelectedPlanInfo.discountedPrice.toLocaleString()}
                    원{' '}
                    {addPartySelectedPlanInfo.tag === 'hot' ? (
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
                    ) : addPartySelectedPlanInfo.tag === 'event' ? (
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
              setOpenPartyLeaderGuideModal={setOpenPartyLeaderGuideModalModal}
            />
          )}

          {openPartyLeaderGuideModal && (
            <PartyLeaderGuideModal
              openPartyLeaderGuideModal={openPartyLeaderGuideModal}
              setOpenPartyLeaderGuideModal={setOpenPartyLeaderGuideModalModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}
