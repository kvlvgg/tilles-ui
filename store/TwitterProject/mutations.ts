import { MutationTree } from 'vuex';
import { ModuleState } from '@/store/TwitterProject/index';
import { MUTATIONS } from '@/store/TwitterProject/constants';

import { TwitterProject } from '@/api/twitter_projects';

const mutations: MutationTree<ModuleState> = {
  [MUTATIONS.SET_TWITTER_PROJECT](state, payload: TwitterProject) {
    state.project = payload;
  },
};
export default mutations;
