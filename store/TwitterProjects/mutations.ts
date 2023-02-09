import { MutationTree } from 'vuex';
import { ModuleState } from '@/store/TwitterProjects/index';
import { MUTATIONS } from '@/store/TwitterProjects/constants';

import { TwitterProjects } from '@/api/twitter_projects';

const mutations: MutationTree<ModuleState> = {
  [MUTATIONS.SET_TWITTER_PROJECTS](state, payload: TwitterProjects) {
    state.projects = payload;
  },

  [MUTATIONS.SET_PERIOD](state, payload: string) {
    state.period = payload;
  },

  [MUTATIONS.SET_CURRENT_PAGE](state, payload: number) {
    state.currentPage = payload;
  },

  [MUTATIONS.SET_SORT_FIELD](state, payload: string) {
    state.sortField = payload;
  },
};
export default mutations;
