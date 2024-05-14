import { PartySelectedPlanInfo } from '@/app/types/PartySelectedPlanInfo';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface StoreState {
  partySelectedPlanInfo: PartySelectedPlanInfo;
}

const initialState = {
  iconImg: null,
  iconImgAlt: '',
  name: '',
  category: '',
  originPrice: 0,
  discountedPrice: 0,
  tag: '',
  planDetailInfos: [],
  selectedPlan: '',
};

export const PartySelectedPlanInfoStore = create(
  devtools((set) => ({
    partySelectedPlanInfo: initialState,

    updateSelectedPlanInfo: (newPartySelectedPlanInfo: PartySelectedPlanInfo) =>
      set((state: StoreState) => ({
        partySelectedPlanInfo: {
          ...state.partySelectedPlanInfo,
          ...newPartySelectedPlanInfo,
        },
      })),

    updateSelectedPlanName: (newSelectedPlanName: string) =>
      set((state: StoreState) => ({
        partySelectedPlanInfo: {
          ...state.partySelectedPlanInfo,
          selectedPlan: newSelectedPlanName,
        },
      })),

    removeSelectedPlanInfo: () =>
      set(() => ({
        partySelectedPlanInfo: initialState,
      })),
  }))
);
