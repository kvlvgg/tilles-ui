// store.ts
import { Module } from 'vuex';
import { RootState } from '@/store';

import getters from '@/store/MetaMask/getters';
import mutations from '@/store/MetaMask/mutations';

import { METAMASK_STATUSES, METAMASK_ERRORS } from '@/constants/metamask';

export const namespaced = true;

export type ModuleState = {
  metamask: {
    status: typeof METAMASK_STATUSES[keyof typeof METAMASK_STATUSES] | null;
    error: typeof METAMASK_ERRORS[keyof typeof METAMASK_ERRORS] | null;
    walletAddress: string | null;
  };
};

export const state = () => ({
  metamask: {
    status: null,
    error: null,
    walletAddress: null,
  },
});

const storeModule: Module<ModuleState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
};

export default storeModule;
