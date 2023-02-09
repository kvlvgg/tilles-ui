import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { ModuleState } from '@/store/TwitterProjects/index';
import { GETTERS } from '@/store/TwitterProjects/constants';

export type TwitterProjects = {
  items: Array<{
    slug: string;
    name: string;
    logo: string;
    floorPrice: { value: number; change: number };
    twitterAudience: { value: number; change: number };
    influencers: { percent: number; change: number };
    mentions: { value: number; change: number };
    engagements: { value: number; change: number };
    suspicious: { value: number; change: number };
    actions: { isFavorite: boolean };
  }>;

  total: number;
  page: number;
  pages: number;
};

const getters: GetterTree<ModuleState, RootState> = {
  [GETTERS.TWITTER_PROJECTS]: ({ projects }): TwitterProjects => ({
    items:
      projects?.items.map(item => ({
        slug: item.slug ?? '',
        name: item.name ?? '',
        logo: item.logo ?? '',
        floorPrice: { value: item.floor_price ?? 0, change: item.floor_price_change ?? 0 },
        twitterAudience: { value: item.twitter_audience ?? 0, change: item.twitter_audience_change ?? 0 },
        influencers: { percent: item.influencers_percent ?? 0, change: item.influencers_percent_change ?? 0 },
        mentions: { value: item.mentions_count ?? 0, change: item.mentions_count_change ?? 0 },
        engagements: { value: item.engagements ?? 0, change: item.engagements_change ?? 0 },
        suspicious: { value: item.suspicious_count ?? 0, change: item.suspicious_count_change ?? 0 },
        actions: { isFavorite: !!Math.floor(Math.random() * 2) },
      })) ?? [],

    total: projects?.total ?? 0,
    page: projects?.page ?? 0,
    pages: projects?.pages ?? 0,
  }),
};

export default getters;
