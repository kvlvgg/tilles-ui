import jsCookie, { CookieAttributes } from 'js-cookie';

import { ActionTree } from 'vuex';
import { RootState } from '@/store';
import { ModuleState } from '@/store/User/index';
import { GETTERS, ACTIONS, MUTATIONS } from '@/store/User/constants';

import { STORE as METAMASK_STORE } from '@/store/MetaMask/constants';
import { METAMASK_STATUSES } from '@/constants/metamask';

const { NOT_INSTALLED, NOT_CONNECTED, CONNECTING, CONNECTED } = METAMASK_STATUSES;

function removeCookie(items: string[], options: CookieAttributes = {}) {
  if (!Array.isArray(items)) return;
  if (process.env.domain) options.domain = `.${process.env.domain}`;
  items.forEach(name => {
    jsCookie.remove(name, options);
  });
}

function setCookie(items: Record<string, string>, options: CookieAttributes = {}) {
  if (typeof items !== 'object') return;
  if (process.env.domain) options.domain = `.${process.env.domain}`;
  Object.keys(items).forEach(key => {
    jsCookie.set(key, items[key], options);
  });
}

const actions: ActionTree<ModuleState, RootState> = {
  [ACTIONS.ON_SING_BUTTON_CLICK]({ getters, dispatch }) {
    if (getters[GETTERS.IS_SIGNED_IN]) return dispatch(ACTIONS.UNAUTHENTICATE);
    if (getters[GETTERS.METAMASK_STATUS] === NOT_INSTALLED) return dispatch(ACTIONS.METAMASK_START_ONBOARDING);
    if (getters[GETTERS.METAMASK_STATUS] === NOT_CONNECTED) return dispatch(ACTIONS.METAMASK_REQUEST_ACCOUNT);
    if (getters[GETTERS.METAMASK_STATUS] === CONNECTING) return dispatch(ACTIONS.METAMASK_REQUEST_ACCOUNT);
    if (getters[GETTERS.METAMASK_STATUS] === CONNECTED) return dispatch(ACTIONS.METAMASK_SIGN);
  },

  [ACTIONS.METAMASK_START_ONBOARDING]({ dispatch }) {
    dispatch(METAMASK_STORE.ACTIONS.START_ONBOARDING, null, { root: true });
  },

  [ACTIONS.METAMASK_INIT]({ dispatch }) {
    dispatch(METAMASK_STORE.ACTIONS.INIT, null, { root: true });
  },

  [ACTIONS.METAMASK_REQUEST_ACCOUNT]({ dispatch }) {
    dispatch(METAMASK_STORE.ACTIONS.REQUEST_ACCOUNT, null, { root: true });
  },

  [ACTIONS.METAMASK_SIGN]({ dispatch }) {
    dispatch(METAMASK_STORE.ACTIONS.SIGN, null, { root: true });
  },

  async [ACTIONS.LOAD_OR_CREATE_USER]({ commit }, payload: string) {
    let user = await this.$api.Users.getUser({ walletAddress: payload });

    if (user.status === 'FAILED') {
      const result = await this.$api.Users.createUser({ walletAddress: payload });
      if (result.status === 'FAILED') return;

      user = await this.$api.Users.getUser({ walletAddress: payload });
    }

    if (user.status === 'OK') commit(MUTATIONS.SET_USER, user.data);
  },

  async [ACTIONS.AUTHENTICATE]({ state, commit }, signature: string) {
    if (!state.user) return;
    const { walletAddress } = state.user;
    const result = await this.$api.Users.authenticate({ signature, walletAddress });

    if (result.status === 'FAILED') return;

    commit(MUTATIONS.SET_NONCE, result.data.nonce);
    commit(MUTATIONS.SET_TOKEN, result.data.token);
    setCookie({ token: result.data.token }, { expires: 7 });
  },

  [ACTIONS.UNAUTHENTICATE]({ commit }) {
    commit(MUTATIONS.SET_TOKEN, null);
    removeCookie(['token'], { expires: 7 });
  },
};

export default actions;
