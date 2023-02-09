import { MutationTree } from 'vuex';
import { ModuleState } from '@/store/User/index';
import { MUTATIONS } from '@/store/User/constants';

import { User } from '@/api/users';

const mutations: MutationTree<ModuleState> = {
  [MUTATIONS.CLEAR](state) {
    state.user = null;
  },

  [MUTATIONS.SET_TOKEN](state, payload: string) {
    state.token = payload;
  },

  [MUTATIONS.SET_USER](state, payload: User['OK']['data']) {
    state.user = payload;
  },

  [MUTATIONS.SET_NONCE](state, payload: number) {
    if (!state.user) return;
    state.user.nonce = payload;
  },
};
export default mutations;
