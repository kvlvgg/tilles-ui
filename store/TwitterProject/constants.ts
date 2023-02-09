import StoreHelper from '@/utils/StoreHelper';

export const StoreName = 'TwitterProject' as const;

export const GETTERS = {
  TWITTER_PROJECT: 'TWITTER_PROJECT',
  //   COINS: 'COINS',
  //   BREED_NUMBER: 'BREED_NUMBER',
  //   PARENT_ITEMS: 'PARENT_ITEMS',
  //   CHILD_ITEMS: 'CHILD_ITEMS',
  //   TOTAL_COST: 'TOTAL_COST',
  //   TOTAL_SALES: 'TOTAL_SALES',
  //   PROFIT: 'PROFIT',
  //   PARENT_ITEMS_BREED_POINT_MIN: 'PARENT_ITEMS_BREED_POINT_MIN',
} as const;

export const ACTIONS = {
  LOAD_TWITTER_PROJECT: 'LOAD_TWITTER_PROJECT',
} as const;

export const MUTATIONS = {
  SET_TWITTER_PROJECT: 'SET_TWITTER_PROJECT',
  //   RESET_BREEDING_CALC: 'RESET_BREEDING_CALC',
  //   SET_BREED_NUMBER: 'SET_BREED_NUMBER',
  //   SET_CHILD_PROPERTY: 'SET_CHILD_PROPERTY',
  //   SET_PARENT_PROPERTY: 'SET_PARENT_PROPERTY',
} as const;

export const STORE = {
  GETTERS: StoreHelper.AddStorePrefix(StoreName, GETTERS),
  ACTIONS: StoreHelper.AddStorePrefix(StoreName, ACTIONS),
  MUTATIONS: StoreHelper.AddStorePrefix(StoreName, MUTATIONS),
};
