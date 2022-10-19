<template>
  <div>
    <Mission />

    <Tabs>
      <Tab title="🔥 Trending projects">
        <TrendingProjects />
      </Tab>

      <Tab name="discord" disable isUpcoming />
      <Tab name="wallets" disable isUpcoming />
      <Tab name="influencers" disable isUpcoming />
      <Tab name="portfolio" disable isUpcoming />

      <template #discord-title>
        <span>🔥 Discord activity</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
        <span :class="$style.soon">Soon!</span>
      </template>

      <template #wallets-title>
        <span>👛 Wallets</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
        <span :class="$style.soon">Soon!</span>
      </template>

      <template #influencers-title>
        <span>⭐️ Influencers!</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
        <span :class="$style.soon">Soon!</span>
      </template>

      <template #portfolio-title>
        <span>💼 Portfolio</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
        <span :class="$style.soon">Soon!</span>
      </template>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TrendingProjects from '@/components/platform/TrendingProjects.vue';

import Tabs from 'ui/Tabs/Tabs.vue';
import Tab from 'ui/Tabs/Tab.vue';
import Spacing from 'ui/Spacing/Spacing.vue';

import Mission from '@/components/platform/Mission.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TilliesPlatform',
  components: { TrendingProjects, Mission, Tabs, Tab, Spacing },

  data() {
    return {
      ORIENTATION,
      SIZE,
    };
  },
});
</script>

<style lang="scss" module>
.soon {
  color: $text-color-primary;
}
</style>
