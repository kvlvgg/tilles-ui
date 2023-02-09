import StoreHelper from '@/utils/StoreHelper';

export const StoreName = 'TwitterProjects' as const;

export const GETTERS = {
  TWITTER_PROJECTS: 'TWITTER_PROJECTS',
} as const;

export const ACTIONS = {
  LOAD_TWITTER_PROJECTS: 'LOAD_TWITTER_PROJECTS',
} as const;

export const MUTATIONS = {
  SET_TWITTER_PROJECTS: 'SET_TWITTER_PROJECTS',
  SET_PERIOD: 'SET_PERIOD',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_SORT_FIELD: 'SET_SORT_FIELD',
} as const;

export const STORE = {
  GETTERS: StoreHelper.AddStorePrefix(StoreName, GETTERS),
  ACTIONS: StoreHelper.AddStorePrefix(StoreName, ACTIONS),
  MUTATIONS: StoreHelper.AddStorePrefix(StoreName, MUTATIONS),
};
