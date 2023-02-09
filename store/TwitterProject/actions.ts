import { ActionTree } from 'vuex';
import { RootState } from '@/store';
import { ModuleState } from '@/store/TwitterProject/index';
import { ACTIONS, MUTATIONS } from '@/store/TwitterProject/constants';

const actions: ActionTree<ModuleState, RootState> = {
  async [ACTIONS.LOAD_TWITTER_PROJECT]({ commit }, payload: string) {
    try {
      const project = await this.$api.TwitterProjects.getBySlug(payload);
      commit(MUTATIONS.SET_TWITTER_PROJECT, project);
    } catch {
      throw new Error('Unable to load twitter project');
    }
  },
};

export default actions;
