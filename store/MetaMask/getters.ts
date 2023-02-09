import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { ModuleState } from '@/store/MetaMask/index';
import { GETTERS } from '@/store/MetaMask/constants';

const getters: GetterTree<ModuleState, RootState> = {
  [GETTERS.STATUS]: ({ metamask }) => metamask.status,
  [GETTERS.WALLET_ADDRESS]: ({ metamask }) => metamask.walletAddress,
};

export default getters;
