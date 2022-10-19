<template>
  <nuxt-link :class="$style.profileLink" to="/">
    <Img file="profile-link.svg" />
    <Spacing :size="SIZE.XXXS" :orientation="ORIENTATION.HORIZONTAL" />
    <span v-text="walletId" />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

import Img from 'ui/Img/Img.vue';
import Spacing from 'ui/Spacing/Spacing.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TillesProfileLink',
  components: { Img, Spacing },

  data() {
    return {
      ORIENTATION,
      SIZE,
      walletId: '0x96bd...d1DD',
    };
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
