// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue';
import modal from '@/utils/modal';

declare module 'vue/types/vue' {
  interface Vue {
    $style: { [key: string]: string };
    $modal: typeof modal;
    $auth: { loggedIn: () => boolean };
  }
}
