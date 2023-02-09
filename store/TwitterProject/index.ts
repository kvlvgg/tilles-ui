// store.ts
import { Module } from 'vuex';
import { RootState } from '@/store';

import getters from '@/store/TwitterProject/getters';
import mutations from '@/store/TwitterProject/mutations';

import { TwitterProject } from '@/api/twitter_projects';

export const namespaced = true;

export type ModuleState = {
  project: TwitterProject | null;
};

export const state = () => ({
  project: null,
});

const storeModule: Module<ModuleState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
};

export default storeModule;
