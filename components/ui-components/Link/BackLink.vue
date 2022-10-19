<template>
  <nuxt-link :class="$style.backLink" :to="to">
    <i :class="$style.arrowLeft" />
    <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.SM" />
    <span>Back</span>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';

import { SIZE, ORIENTATION } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TilliesBackLink',
  components: { Spacing },

  props: {
    to: {
      type: [String, Object],
      default: '/',
    },
  },

  data() {
    return {
      SIZE,
      ORIENTATION,
    };
  },
});
</script>

<style lang="scss" module>
.backLink {
  @include flex();
  display: inline-flex;

  .arrowLeft {
    @include icon-select-arrow();
    transform: rotate(90deg);
    width: 22px;
    height: 12px;
  }
}
</style>
