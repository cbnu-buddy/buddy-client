import { Modal } from 'flowbite-react';
import { PartySelectedPlanInfoStore } from '@/app/store/party/PartySelectedPlanInfo';
import { PartySelectedPlanInfo } from '@/app/types/PartySelectedPlanInfo';

interface AskInputValidAccountInfoModalProps {
  openAskInputValidAccountInfoModal: string | undefined;
  setOpenAskInputValidAccountInfoModal: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

export default function AskInputValidAccountInfoModal({
  openAskInputValidAccountInfoModal,
  setOpenAskInputValidAccountInfoModal,
}: AskInputValidAccountInfoModalProps) {
  const partySelectedPlanInfo: PartySelectedPlanInfo =
    PartySelectedPlanInfoStore((state: any) => state.partySelectedPlanInfo);
  const updateSelectedPlanName = PartySelectedPlanInfoStore(
    (state: any) => state.updateSelectedPlanName
  );

  return (
    <Modal
      size='sm'
      show={openAskInputValidAccountInfoModal === 'default'}
      onClose={() => setOpenAskInputValidAccountInfoModal(undefined)}
    >
      <Modal.Body className='flex flex-col gap-y-3 pb-0 spacing-y-28'>
        <p className='text-lg font-semibold'>
          🔐 정확한 로그인 정보를 입력하셨나요?
        </p>

        <p className='texst-sm h-[4.25rem] text-[#727272]'>
          잘못된 로그인 정보 공유로 인한 책임은 파티장에게 있어요. 현재 입력한
          정보가 맞는지 티빙에서 한번 더 확인해 주세요.
        </p>
      </Modal.Body>
      <Modal.Footer className='border-none'>
        <button
          onClick={() => {
            setOpenAskInputValidAccountInfoModal(undefined);
          }}
          className='w-full text-[#787878] text-xs bg-[#efefef] p-[0.825rem] rounded-[0.45rem] font-semibold box-shadow'
        >
          다시 입력하기
        </button>
        <button
          onClick={() => {
            setOpenAskInputValidAccountInfoModal(undefined);
          }}
          className='w-full text-white text-xs bg-[#3a8af9] p-[0.825rem] rounded-[0.45rem] font-semibold box-shadow'
        >
          확인했어요
        </button>
      </Modal.Footer>
    </Modal>
  );
}
