'use client';

import { AddPartyInfoStore } from '@/app/store/party/AddPartyInfo';
import InputAccount from './components/InputAccount';
import SelectRecruitmentNum from './components/SelectRecruitmentNum';
import SelectPartyDuration from './components/SelectPartyDuration';
import ConfirmPartyRule from './components/ConfirmPartyRule';

export default function AddPartyDetail() {
  const partyInfo = AddPartyInfoStore((state: any) => state.partyInfo);

  return (
    <div>
      {partyInfo.stepName === 'inputAccount' ? (
        <InputAccount />
      ) : partyInfo.stepName === 'selectRecruitmentNum' ? (
        <SelectRecruitmentNum />
      ) : partyInfo.stepName === 'selectPartyDuration' ? (
        <SelectPartyDuration />
      ) : partyInfo.stepName === 'confirmPartyRule' ? (
        <ConfirmPartyRule />
      ) : null}
    </div>
  );
}
