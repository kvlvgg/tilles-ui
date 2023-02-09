import { parse } from 'cookie';

import { Plugin } from '@nuxt/types';
import { STORE } from '@/store/User/constants';

const plugin: Plugin = ({ store, req }, inject) => {
  if (process.server) {
    const cookie = parse(req.headers.cookie || '');
    const token = cookie.token || '';

    if (token) store.commit(STORE.MUTATIONS.SET_TOKEN, token);
  }

  inject('auth', { loggedIn: () => store.getters[STORE.GETTERS.IS_SIGNED_IN] });
};

export default plugin;
