import MetaMaskOnboarding from '@metamask/onboarding';

import { ActionTree } from 'vuex';
import { RootState } from '@/store';
import { ModuleState } from '@/store/TwitterProject/index';
import { ACTIONS, MUTATIONS } from '@/store/MetaMask/constants';

import MetaMask from '@/utils/metamask';

import { STORE as USER_STORE } from '@/store/User/constants';
import { User } from '@/store/User/getters';

const actions: ActionTree<ModuleState, RootState> = {
  [ACTIONS.START_ONBOARDING]() {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) return;

    const onboarding = new MetaMaskOnboarding();
    onboarding.startOnboarding();
  },

  [ACTIONS.INIT]({ dispatch, commit }) {
    MetaMask.on('status', status => commit(MUTATIONS.SET_STATUS, status));
    MetaMask.on('error', error => commit(MUTATIONS.SET_STATUS, error));

    MetaMask.on('connected', account => {
      commit(MUTATIONS.SET_METAMASK_WALLET_ADDRESS, account);
      dispatch(USER_STORE.ACTIONS.LOAD_OR_CREATE_USER, account, { root: true });
    });

    MetaMask.on('disconnected', () => {
      commit(USER_STORE.MUTATIONS.CLEAR, null, { root: true });
      commit(MUTATIONS.CLEAR_METAMASK_WALLET_ADDRESS, null);
    });

    MetaMask.on('signed', signature => dispatch(USER_STORE.ACTIONS.AUTHENTICATE, signature, { root: true }));

    return MetaMask.init();
  },

  [ACTIONS.REQUEST_ACCOUNT]() {
    return MetaMask.init(true);
  },

  [ACTIONS.SIGN]({ rootGetters }) {
    const user: User | null = rootGetters[USER_STORE.GETTERS.USER];
    if (!user?.nonce) return;

    return MetaMask.sign(user.nonce);
  },
};

export default actions;
