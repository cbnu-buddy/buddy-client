'use client';

import React, { FormEvent, useState } from 'react';
import PrivacyPolicyModal from '../components/PrivacyPolicyModal';
import { useRouter } from 'next/navigation';
import { Label } from 'flowbite-react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [isEmailValidFail, setIsEmailValidFail] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValidFail, setIsPasswordValidFail] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isRepeatPasswordValidFail, setIsRepeatPasswordValidFail] =
    useState(false);
  const [username, setUsername] = useState('');
  const [isUsernameValidFail, setIsUsernameValidFail] = useState(false);
  const [openPrivacyPolicyModal, setOpenPrivacyPolicyModal] = useState<
    string | undefined
  >();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailValidFail(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsPasswordValidFail(false);
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
    setIsRepeatPasswordValidFail(false);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setIsUsernameValidFail(false);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('제목을 입력해 주세요');
      setIsEmailValidFail(true);
      return;
    }

    if (!password) {
      alert('비밀번호를 입력해 주세요');
      setIsPasswordValidFail(true);
      return;
    }

    if (!repeatPassword) {
      alert('비밀번호 확인을 완료해 주세요');
      setIsRepeatPasswordValidFail(true);
      return;
    }

    if (password !== repeatPassword) {
      alert('비밀번호가 일치하지 않습니다');
      setIsRepeatPasswordValidFail(true);
      true;
      return;
    }

    if (!email) {
      alert('이름을 입력해 주세요');
      setIsUsernameValidFail(true);
      return;
    }

    alert('개발 예정입니다.');
  };

  return (
    <div className='h-[35.5rem] mt-12 px-5 2lg:px-0 overflow-x-auto'>
      <div className='flex flex-col w-[20rem] mx-auto'>
        <form
          onSubmit={handleFormSubmit}
          className='flex max-w-md flex-col gap-4'
        >
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='email'
                value='이메일'
                className={`after:content-['*'] after:text-red-500 after:ml-[0.05rem]`}
              />
            </div>
            <input
              placeholder='abc@naver.com'
              type='text'
              value={email}
              onChange={handleEmailChange}
              className={`placeholder-[#b6b7bf] bg-[#f9fafb rounded-lg border-[1.5px] border-${
                isEmailValidFail ? 'red-500' : '[#828283]'
              } w-full`}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='password'
                value='비밀번호'
                className={`after:content-['*'] after:text-red-500 after:ml-[0.05rem]`}
              />
            </div>
            <input
              required
              type='password'
              value={password}
              onChange={handlePasswordChange}
              className={`placeholder-[#b6b7bf] bg-[#f9fafb rounded-lg border-[1.5px] border-${
                isPasswordValidFail ? 'red-500' : '[#828283]'
              } w-full`}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='repeat-password'
                value='비밀번호 확인'
                className={`after:content-['*'] after:text-red-500 after:ml-[0.05rem]`}
              />
            </div>
            <input
              required
              type='password'
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              className={`placeholder-[#b6b7bf] bg-[#f9fafb rounded-lg border-[1.5px] border-${
                isRepeatPasswordValidFail ? 'red-500' : '[#828283]'
              } w-full`}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='username'
                value='이름'
                className={`after:content-['*'] after:text-red-500 after:ml-[0.05rem]`}
              />
            </div>
            <input
              required
              type='text'
              value={username}
              onChange={handleUsernameChange}
              className={`placeholder-[#b6b7bf] bg-[#f9fafb rounded-lg border-[1.5px] border-${
                isUsernameValidFail ? 'red-500' : '[#828283]'
              } w-full`}
            />
          </div>

          <div className='flex items-center  text-xs'>
            <input
              type='checkbox'
              className='rounded-[0.2rem] text-sm'
              required
              onChange={(e) => null}
            />
            <button className='text-cyan-600 hover:underline dark:text-cyan-500 ml-2'>
              <span onClick={() => setOpenPrivacyPolicyModal('default')}>
                개인정보 수집 및 이용
              </span>
              {openPrivacyPolicyModal ? (
                <PrivacyPolicyModal
                  openPrivacyPolicyModal={openPrivacyPolicyModal}
                  setOpenPrivacyPolicyModal={setOpenPrivacyPolicyModal}
                />
              ) : null}
            </button>
            <span>에 동의합니다</span>
          </div>
          <button
            type='submit'
            className='mt-5 bg-[#3870e0] text-white px-4 py-[0.6rem] rounded-md focus:bg-[#3464c2] hover:bg-[#3464c2] box-shadow'
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
