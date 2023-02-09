<template>
  <nuxt-link :class="$style.profileLink" to="/">
    <Img file="profile-link.svg" />
    <Spacing :size="SIZE.XXXS" :orientation="ORIENTATION.HORIZONTAL" />
    <span v-text="walletAddress" />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

import Img from 'ui/Img/Img.vue';
import Spacing from 'ui/Spacing/Spacing.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

import { STORE } from '@/store/User/constants';

export default Vue.extend({
  name: 'TillesProfileLink',
  components: { Img, Spacing },

  data() {
    return {
      ORIENTATION,
      SIZE,
    };
  },

  computed: {
    walletAddress() {
      const walletAddress: string = this.$store.getters[STORE.GETTERS.WALLET_ADDRESS];
      return `${walletAddress.slice(0, 6)}...${walletAddress.slice(walletAddress.length - 4, walletAddress.length)}`;
    },
  },
});
</script>

<style lang="scss" module>
.profileLink {
  @include flex();
  display: inline-flex;
  padding: $gap-xxs $gap-sm;
  border: 2px solid $border-color;
  border-radius: $border-radius;
  font-weight: 700;
}
</style>
