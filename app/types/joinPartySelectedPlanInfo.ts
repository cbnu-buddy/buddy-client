import { StaticImageData } from 'next/image';

export interface JoinPartySelectedPlanInfo {
  iconImg: StaticImageData;
  iconImgAlt: string;
  name: string;
  category: string;
  originPrice: number;
  discountedPrice: number;
  tag: string;
  planDetailInfos: {
    name: string;
    price: number;
  }[];
  selectedPlan: string;
}
