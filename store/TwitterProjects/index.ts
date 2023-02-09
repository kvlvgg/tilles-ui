// store.ts
import { Module } from 'vuex';
import { RootState } from '@/store';

import getters from '@/store/TwitterProjects/getters';
import mutations from '@/store/TwitterProjects/mutations';

import { TwitterProjects } from '@/api/twitter_projects';

export const namespaced = true;

export type ModuleState = {
  projects: TwitterProjects | null;
  period: string;
  sortField: string;
  currentPage: number;
  rowsPerPage: number;
};

export const state = () => ({
  projects: null,
  period: '7d',
  sortField: 'default',
  currentPage: 1,
  rowsPerPage: 10,
});

const storeModule: Module<ModuleState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
};

export default storeModule;
