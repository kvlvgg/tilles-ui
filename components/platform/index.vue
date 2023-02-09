<template>
  <div>
    <SignInNotification v-if="!$auth.loggedIn() && isSignInNotification" @close="isSignInNotification = false" />
    <Spacing v-if="!$auth.loggedIn() && isSignInNotification" :size="SIZE.XXL" :orientation="ORIENTATION.HORIZONTAL" />
    <Mission />
    <TrendingProjects />

    <!-- <Tabs>
      <Tab title="🔥 Trending projects">
        <TrendingProjects />
      </Tab>

      <Tab name="discord" disable />
      <Tab name="wallets" disable />
      <Tab name="influencers" disable />
      <Tab name="portfolio" disable />

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
    </Tabs> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SignInNotification from '@/components/platform/SignInNotification.vue';
import TrendingProjects from '@/components/platform/TrendingProjects.vue';

// import Tabs from 'ui/Tabs/Tabs.vue';
// import Tab from 'ui/Tabs/Tab.vue';
import Spacing from 'ui/Spacing/Spacing.vue';

import Mission from '@/components/platform/Mission.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TilliesPlatform',
  components: { SignInNotification, TrendingProjects, Mission, Spacing },

  data() {
    return {
      ORIENTATION,
      SIZE,

      isSignInNotification: true,
    };
  },
});
</script>

<style lang="scss" module>
.soon {
  color: $text-color-primary;
}
</style>
