'use client';

import { userInfoStore } from '@/app/store/UserInfo';
import axiosInstance from '@/app/utils/axiosInstance';
import { fetchCurrentUserInfo } from '@/app/utils/fetchCurrentUserInfo';
import tossPaymentAxiosInstance from '@/app/utils/tossPaymentAxiosInstance';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import defaultProfileImg from '@/public/images/default_profile_img.png';

interface PaymentInfoType {
  orderId: string;
  paymentKey: string;
  amount: number;
}

// 결제 승인 확인 API
const fetchPaymenyConfirm = ({ queryKey }: any) => {
  const paymentKey = queryKey[1];
  return tossPaymentAxiosInstance.get(`/${paymentKey}`);
};

// 결제 정보 추가 API
const addPaymentInfo = (paymentInfo: PaymentInfoType) => {
  const reqBody = {
    orderId: paymentInfo.orderId,
    paymentKey: paymentInfo.paymentKey,
    category: 'point',
    item: '버디 포인트',
    amount: paymentInfo.amount,
  };
  return axiosInstance.post('/private/member/payment', reqBody);
};

// 포인트 충전 API
const addPoint = (point: number) => {
  const reqBody = {
    point,
    category: 'recharge',
    item: '결제',
  };
  return axiosInstance.post('/private/member/point', reqBody);
};

export default function PaymentsSuccess() {
  const userInfo = userInfoStore((state: any) => state.userInfo);
  const updateUserInfo = userInfoStore((state: any) => state.updateUserInfo);

  const params = useSearchParams();
  const router = useRouter();

  const orderId = params.get('orderId') ?? '';
  const paymentKey = params.get('paymentKey') ?? '';
  const amount = Number(params.get('amount') ?? '0');

  const { isPending, data } = useQuery({
    queryKey: ['paymenyConfirm', paymentKey],
    queryFn: fetchPaymenyConfirm,
  });

  const resData = data?.data;

  const addPaymentInfoMutation = useMutation({
    mutationFn: addPaymentInfo,
    onMutate: () => {},
    onError: (error: AxiosError) => {
      const resData: any = error.response;
      switch (resData?.status) {
        case 409:
          switch (resData?.data.error.status) {
            case 'CONFLICT':
              alert('이미 처리된 결제 정보입니다.');
              router.push('/my-page');
              break;
            default:
              alert('정의되지 않은 http code입니다.');
          }
          break;
        default:
          alert('정의되지 않은 http status code입니다');
      }
    },
    onSuccess: (data) => {
      addPointMutation.mutate(Number(amount));
    },
    onSettled: () => {},
  });

  const addPointMutation = useMutation({
    mutationFn: addPoint,
    onMutate: () => {},
    onError: (error: AxiosError) => {
      const resData: any = error.response;
      switch (resData?.status) {
        case 400:
          switch (resData?.data.error.status) {
            // case 'BAD_REQUEST':
            //   setpasswordInputAnnouceMsg(
            //     '아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해 주세요'
            //   );
            //   break;
            default:
              alert('정의되지 않은 http code입니다.');
          }
          break;
        default:
          alert('정의되지 않은 http status code입니다');
      }
    },
    onSuccess: (data) => {
      alert('포인트가 충전되었습니다.');
      fetchCurrentUserInfo(updateUserInfo);
      router.push('/my-page');
    },
    onSettled: () => {},
  });

  useEffect(() => {
    if (resData) addPaymentInfoMutation.mutate({ orderId, paymentKey, amount });
  }, [resData]);

  return (
    <div className='w-[30rem] flex flex-col gap-y-3'>
      <div className='w-full flex flex-col gap-y-4'>
        <div className='w-full flex flex-col items-center gap-y-[0.375rem] bg-white px-5 pt-6 pb-7 rounded-[0.6rem]'>
          <Image
            src={defaultProfileImg}
            alt='default_Image'
            width={77.5}
            height={0}
            quality={100}
            className='rounded-full'
          />

          <p className='mt-[0.1rem] font-semibold text-base'>
            {userInfo.username}
          </p>

          <button onClick={() => router.push('/my-page/manage-account')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <circle cx='12' cy='12' r='12' fill='#efefef' />
              <g>
                <g>
                  <path
                    fill='none'
                    d='M0 0H16V16H0z'
                    transform='translate(4 4) translate(0 0)'
                  />
                </g>
                <g>
                  <g>
                    <path
                      d='M14.058 8.493a2.671 2.671 0 0 0 0-3.771l-.7-.7a2.67 2.67 0 0 0-3.771 0L4.254 9.36c-.013.013-.018.031-.03.045a.643.643 0 0 0-.071.107.616.616 0 0 0-.056.123c-.005.017-.017.029-.021.047l-1.058 4.583a.667.667 0 0 0 .649.817.676.676 0 0 0 .15-.017L8.4 14.007c.017 0 .03-.016.047-.021a.652.652 0 0 0 .121-.055.634.634 0 0 0 .111-.074c.013-.011.03-.016.043-.029zm-1.64-3.526l.7.7a1.336 1.336 0 0 1 0 1.886l-.095.095-2.586-2.587.095-.095a1.336 1.336 0 0 1 1.886.001zm-7.086 5.2L9.494 6l2.583 2.583-4.163 4.168-3.358.775z'
                      transform='translate(4 4) translate(2.012 2.151) translate(-3.001 -3.244)'
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
