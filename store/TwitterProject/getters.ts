import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { ModuleState } from '@/store/TwitterProject/index';
import { GETTERS } from '@/store/TwitterProject/constants';

export type TwitterProject = {
  slug: string;
  name: string;
  logo: string;
  description: string;
  username: string;
  itemsCount: number;
  ownersCount: number;
  totalVolume: { value: number; change: number };
  floorPrice: { value: number; change: number };
  twitterAudience: { value: number; change: number };
  twitterCreationDate: string;
};

const getters: GetterTree<ModuleState, RootState> = {
  [GETTERS.TWITTER_PROJECT]: ({ project }): TwitterProject => ({
    slug: project?.slug ?? '',
    name: project?.name ?? '',
    logo: project?.logo ?? '',
    description: project?.description ?? '',
    username: project?.username ?? '',
    itemsCount: project?.items_count ?? 0,
    ownersCount: project?.owners_count ?? 0,
    totalVolume: { value: project?.total_volume ?? 0, change: project?.total_volume_change ?? 0 },
    floorPrice: { value: project?.floor_price ?? 0, change: project?.floor_price_change ?? 0 },
    twitterAudience: { value: project?.twitter_audience ?? 0, change: project?.twitter_audience_change ?? 0 },
    twitterCreationDate: project?.twitter_creation_date ?? '',
  }),
};

export default getters;
