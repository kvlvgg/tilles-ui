<template>
  <div :class="$style.mainInfo">
    <MainInfoLogo />

    <Spacing :size="SIZE.LG" />

    <div :class="$style.mission">
      {{ twitterProject.description }}
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

import { STORE } from '@/store/TwitterProject/constants';
import { TwitterProject } from '@/store/TwitterProject/getters';

export default Vue.extend({
  name: 'GameMainInfo',
  components: { Spacing, MainInfoLogo, MainInfoStatistics },

  data() {
    return {
      SIZE,
    };
  },

  computed: {
    twitterProject(): TwitterProject {
      return this.$store.getters[STORE.GETTERS.TWITTER_PROJECT];
    },
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
