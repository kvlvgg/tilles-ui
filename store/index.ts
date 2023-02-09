import { GetterTree, MutationTree, ActionTree, StoreOptions } from 'vuex';

export const state = () => {};

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {};

export const mutations: MutationTree<RootState> = {};

export const actions: ActionTree<RootState, RootState> = {};

const store: StoreOptions<RootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default store;
