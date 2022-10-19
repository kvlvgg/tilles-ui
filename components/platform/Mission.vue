<template>
  <div>
    <h1>Web3 Community Intelligence Platform</h1>
    <Spacing :size="SIZE.XXS" />
    <h3 :class="$style.textColorOrange">#1 bridge between communities and projects</h3>
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
