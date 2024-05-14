import { Modal } from 'flowbite-react';
import { AddPartyInfoStore } from '@/app/store/party/AddPartyInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface AskAddPartyModalProps {
  openAskAddPartyModal: string | undefined;
  setOpenAskAddPartyModal: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  setOpenNotifyAddedPartyModal: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

export default function AskAddPartyModal({
  openAskAddPartyModal,
  setOpenAskAddPartyModal,
  setOpenNotifyAddedPartyModal,
}: AskAddPartyModalProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Modal
      size='sm'
      show={openAskAddPartyModal === 'default'}
      data-aos='fade-zoom'
      data-aos-duration='300'
    >
      <Modal.Body className='flex flex-col gap-y-3 pb-0 spacing-y-28'>
        <p className='text-lg font-bold'>파티를 만드시겠어요?</p>

        <p className='h-[2.5rem] text-[0.8rem] text-[#727272] font-medium'>
          동의하신 규칙들이 지켜지지 않을 경우 파티가 자동으로 해체될 수 있으니
          이용에 주의하여 주세요.
        </p>
      </Modal.Body>
      <Modal.Footer className='border-none'>
        <button
          onClick={() => {
            setOpenAskAddPartyModal(undefined);
          }}
          className='w-full text-[#787878] text-[0.8rem] bg-[#efefef] hover:brightness-[96%] duration-150 ease-out p-[0.825rem] rounded-[0.45rem] font-bold box-shadow'
        >
          취소
        </button>
        <button
          onClick={() => {
            setOpenAskAddPartyModal(undefined);
            setOpenNotifyAddedPartyModal('default');
          }}
          className='w-full text-white text-[0.8rem] bg-[#3a8af9] hover:bg-[#1c6cdb] duration-150 ease-out p-[0.825rem] rounded-[0.45rem] font-bold box-shadow'
        >
          파티 만들기
        </button>
      </Modal.Footer>
    </Modal>
  );
}
