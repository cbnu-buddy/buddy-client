import { JoinPartySelectedPlanInfo } from '@/app/types/joinPartySelectedPlanInfo';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface StoreState {
  joinPartySelectedPlanInfo: JoinPartySelectedPlanInfo;
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

export const joinPartySelectedPlanInfoStore = create(
  devtools((set) => ({
    joinPartySelectedPlanInfo: initialState,
    updateSelectedPlanInfo: (
      newJoinPartySelectedPlanInfo: JoinPartySelectedPlanInfo
    ) =>
      set((state: StoreState) => ({
        joinPartySelectedPlanInfo: {
          ...state.joinPartySelectedPlanInfo,
          ...newJoinPartySelectedPlanInfo,
        },
      })),
    updateSelectedPlanName: (newSelectedPlanName: string) =>
      set((state: StoreState) => ({
        joinPartySelectedPlanInfo: {
          ...state.joinPartySelectedPlanInfo,
          selectedPlan: newSelectedPlanName,
        },
      })),
    removeSelectedPlanInfo: () =>
      set(() => ({
        joinPartySelectedPlanInfo: initialState,
      })),
  }))
);
