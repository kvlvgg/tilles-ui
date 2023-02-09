import type { NuxtAxiosInstance } from '@nuxtjs/axios';

export type TwitterProjects = {
  items: Array<{
    engagements: number | null;
    engagements_change: number | null;
    floor_price: number | null;
    floor_price_change: number | null;
    influencers_percent: number | null;
    influencers_percent_change: number | null;
    logo: string | null;
    mentions_count: number | null;
    mentions_count_change: number | null;
    name: string | null;
    slug: string | null;
    suspicious_count: number | null;
    suspicious_count_change: number | null;
    twitter_audience: number | null;
    twitter_audience_change: number | null;
  }>;

  page: number | null;
  pages: number | null;
  per_page: number | null;
  total: number | null;
};

export type TwitterProject = {
  description: string | null;
  floor_price: number | null;
  floor_price_change: number | null;
  items_count: number | null;
  logo: string | null;
  name: string | null;
  owners_count: number | null;
  slug: string | null;
  total_volume: number | null;
  total_volume_change: number | null;
  twitter_audience: number | null;
  twitter_audience_change: number | null;
  twitter_creation_date: string | null;
  username: string | null;
};

export default (axios: NuxtAxiosInstance) => ({
  getAll(params: { period: string; per_page: number; page: number; order_by: string }): Promise<TwitterProjects> {
    return axios.get('/twitter_projects/', { params }).then(x => x.data);
  },

  getBySlug(slug: string): Promise<TwitterProject> {
    return axios.get(`/twitter_projects/${slug}/`).then(x => x.data);
  },
});
