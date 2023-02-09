import { MutationTree } from 'vuex';
import { ModuleState } from '@/store/MetaMask/index';
import { MUTATIONS } from '@/store/MetaMask/constants';

import { METAMASK_STATUSES, METAMASK_ERRORS } from '@/constants/metamask';

const mutations: MutationTree<ModuleState> = {
  [MUTATIONS.CLEAR_METAMASK_WALLET_ADDRESS](state) {
    state.metamask.walletAddress = null;
  },

  [MUTATIONS.SET_STATUS](state, payload: typeof METAMASK_STATUSES[keyof typeof METAMASK_STATUSES]) {
    state.metamask.status = payload;
  },

  [MUTATIONS.SET_ERROR](state, payload: typeof METAMASK_ERRORS[keyof typeof METAMASK_ERRORS]) {
    state.metamask.error = payload;
  },

  [MUTATIONS.SET_METAMASK_WALLET_ADDRESS](state, payload: string) {
    state.metamask.walletAddress = payload;
  },
};
export default mutations;
