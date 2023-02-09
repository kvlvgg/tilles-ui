/* eslint-disable @typescript-eslint/no-unused-vars */
import Vuex from 'vuex';
import Factory from '@/api';
declare module 'vuex/types/index' {
  interface Store<S> {
    $api: ReturnType<typeof Factory>;
  }
}
