import { AddPartySelectedPlanInfo } from '@/app/types/addPartySelectedPlanInfo';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface StoreState {
  addPartySelectedPlanInfo: AddPartySelectedPlanInfo;
}

const initialState = {
  iconImg: null,
  iconImgAlt: '',
  name: '',
  category: '',
  originPrice: 0,
  discountedPrice: 0,
  tag: '',
  planInfos: [],
  selectedPlan: '',
};

export const addPartySelectedPlanInfoStore = create(
  devtools((set) => ({
    addPartySelectedPlanInfo: initialState,
    updateSelectedPlanInfo: (
      newAddPartySelectedPlanInfo: AddPartySelectedPlanInfo
    ) =>
      set((state: StoreState) => ({
        addPartySelectedPlanInfo: {
          ...state.addPartySelectedPlanInfo,
          ...newAddPartySelectedPlanInfo,
        },
      })),
    updateSelectedPlanName: (newSelectedPlanName: string) =>
      set((state: StoreState) => ({
        addPartySelectedPlanInfo: {
          ...state.addPartySelectedPlanInfo,
          selectedPlan: newSelectedPlanName,
        },
      })),
    removeSelectedPlanInfo: () =>
      set(() => ({
        addPartySelectedPlanInfo: initialState,
      })),
  }))
);
