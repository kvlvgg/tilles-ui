// store.ts
import { Module } from 'vuex';
import { RootState } from '@/store';

import getters from '@/store/User/getters';
import mutations from '@/store/User/mutations';

import { User } from '@/api/users';

export const namespaced = true;

export type ModuleState = {
  user: User['OK']['data'] | null;
  token: string | null;
};

export const state = () => ({
  token: null,
  user: null,
});

const storeModule: Module<ModuleState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
};

export default storeModule;
