import { StaticImageData } from 'next/image';

export interface PartySelectedPlanInfo {
  iconImg: StaticImageData;
  iconImgAlt: string;
  name: string;
  category: string;
  tag: string;
  planDetailInfos: {
    name: string;
    price: number;
    maxPartyMemberNum: number;
    description: (string | undefined)[];
  }[];
  selectedPlan: string;
  partyLeaderGuides: {
    subtitle: string;
    description: string;
  }[];
}
