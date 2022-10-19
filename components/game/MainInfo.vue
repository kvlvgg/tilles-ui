<template>
  <div :class="$style.mainInfo">
    <MainInfoLogo />

    <Spacing :size="SIZE.LG" />

    <div :class="$style.mission">
      A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors,
      traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and
      activations paid for by the Doodles Community Treasury.
    </div>

    <Spacing :size="SIZE.LG" />

    <MainInfoStatistics />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';

import MainInfoLogo from '@/components/game/MainInfoLogo.vue';
import MainInfoStatistics from '@/components/game/MainInfoStatistics.vue';

import { SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'GameMainInfo',
  components: { Spacing, MainInfoLogo, MainInfoStatistics },

  data() {
    return {
      SIZE,
    };
  },
});
</script>

<style lang="scss" module>
.mainInfo {
  padding: $gap-lg;
  border: 2px solid $bg-medium;
  border-radius: $border-radius;

  .mission {
    max-width: 820px;
  }
}
</style>
