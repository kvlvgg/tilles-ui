import { Plugin } from '@nuxt/types';
import Factory from '@/api';

const plugin: Plugin = (context, inject) => {
  inject('api', Factory(context.$axios));
};

export default plugin;
