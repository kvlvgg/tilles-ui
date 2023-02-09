import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { ModuleState } from '@/store/User/index';
import { GETTERS } from '@/store/User/constants';

import { STORE as METAMASK_STORE } from '@/store/MetaMask/constants';
import { METAMASK_STATUSES } from '@/constants/metamask';

const { NOT_INSTALLED, NOT_CONNECTED, CONNECTING, CONNECTED } = METAMASK_STATUSES;

export type User = {
  id: string;
  nonce: number;
  data: {};
  createdAt: string;
  updatedAt: string;
  walletAddress: string;
};

const getters: GetterTree<ModuleState, RootState> = {
  [GETTERS.USER]: (state): User | null => state.user,
  [GETTERS.IS_SIGNED_IN]: (state): boolean => !!state.token,
  [GETTERS.WALLET_ADDRESS]: (state): string => state.user?.walletAddress ?? '',
  [GETTERS.METAMASK_STATUS]: (_0, _1, _2, rootGetters) => rootGetters[METAMASK_STORE.GETTERS.STATUS],
  [GETTERS.SIGN_BUTTON_TEXT]: (_, getters) => {
    if (getters[GETTERS.IS_SIGNED_IN]) return 'Sign out';
    if (getters[GETTERS.METAMASK_STATUS] === NOT_INSTALLED) return 'Install MetaMask';
    if (getters[GETTERS.METAMASK_STATUS] === NOT_CONNECTED) return 'Connect';
    if (getters[GETTERS.METAMASK_STATUS] === CONNECTING) return 'Connecting...';
    if (getters[GETTERS.METAMASK_STATUS] === CONNECTED) return 'Sign in';

    return null;
  },
};

export default getters;
