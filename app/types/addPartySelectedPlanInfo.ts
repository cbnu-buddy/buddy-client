import { StaticImageData } from 'next/image';

export interface AddPartySelectedPlanInfo {
  iconImg: StaticImageData;
  iconImgAlt: string;
  name: string;
  category: string;
  originPrice: number;
  discountedPrice: number;
  tag: string;
  planDetailInfos: {
    name: string;
    description: (string | undefined)[];
  }[];
  selectedPlan: string;
  partyLeaderGuides: {
    subtitle: string;
    description: string;
  }[];
}
