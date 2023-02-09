<template>
  <div>
    <h1>#1 tool to explore Twitter mentions</h1>
    <Spacing :size="SIZE.XXS" />
    <h3 :class="$style.textColorOrange">Web3 Projects & Communities Intelligence Platform</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';

import { SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TillesPlatformMission',
  components: { Spacing },

  data() {
    return {
      SIZE,
    };
  },
});
</script>

<style lang="scss" module>
.textColorOrange {
  color: $orange;
}
</style>
