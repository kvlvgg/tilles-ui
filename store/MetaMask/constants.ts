import StoreHelper from '@/utils/StoreHelper';

export const StoreName = 'MetaMask' as const;

export const GETTERS = {
  STATUS: 'STATUS',
  ERROR: 'ERROR',
  WALLET_ADDRESS: 'WALLET_ADDRESS',
} as const;

export const ACTIONS = {
  START_ONBOARDING: 'START_ONBOARDING',
  INIT: 'INIT',
  REQUEST_ACCOUNT: 'REQUEST_ACCOUNT',
  SIGN: 'SIGN',
} as const;

export const MUTATIONS = {
  SET_STATUS: 'SET_STATUS',
  SET_ERROR: 'SET_ERROR',
  SET_METAMASK_WALLET_ADDRESS: 'SET_METAMASK_WALLET_ADDRESS',
  CLEAR_METAMASK_WALLET_ADDRESS: 'CLEAR_METAMASK_WALLET_ADDRESS',
} as const;

export const STORE = {
  GETTERS: StoreHelper.AddStorePrefix(StoreName, GETTERS),
  ACTIONS: StoreHelper.AddStorePrefix(StoreName, ACTIONS),
  MUTATIONS: StoreHelper.AddStorePrefix(StoreName, MUTATIONS),
};
