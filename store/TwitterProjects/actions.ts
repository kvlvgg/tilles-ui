import { ActionTree } from 'vuex';
import { RootState } from '@/store';
import { ModuleState } from '@/store/TwitterProjects/index';
import { ACTIONS, MUTATIONS } from '@/store/TwitterProjects/constants';

const actions: ActionTree<ModuleState, RootState> = {
  async [ACTIONS.LOAD_TWITTER_PROJECTS]({ state, commit }) {
    try {
      const projects = await this.$api.TwitterProjects.getAll({
        period: state.period,
        per_page: state.rowsPerPage,
        page: state.currentPage,
        order_by: state.sortField,
      });

      commit(MUTATIONS.SET_TWITTER_PROJECTS, projects);
    } catch {
      throw new Error('Unable to load twitter projects');
    }
  },
};

export default actions;
