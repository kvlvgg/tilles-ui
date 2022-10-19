<template>
  <div>
    <BackLink to="/platform" />
    <Spacing :size="SIZE.MD" />

    <MainInfo />
    <Spacing :size="SIZE.XXL" />

    <Tabs>
      <Tab name="overview">
        <Overview />
      </Tab>

      <Tab name="mentions">
        <Mentions />
      </Tab>

      <Tab name="members" />
      <Tab name="discord" disable />
      <Tab title="👛 Wallets" disable />
      <Tab title="👥 Compare communities" disable />

      <template #overview-title>
        <Img file="twitter-tab-logo.svg" />
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
        <span>Overview</span>
      </template>

      <template #mentions-title>
        <Img file="twitter-tab-logo.svg" />
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
        <span>Mentions</span>
      </template>

      <template #members-title>
        <Img file="twitter-tab-logo.svg" />
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
        <span>Members</span>
      </template>

      <template #discord-title>
        <Img file="discord-tab-logo.svg" />
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
        <span>Discord activity</span>
      </template>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Tabs from 'ui/Tabs/Tabs.vue';
import Tab from 'ui/Tabs/Tab.vue';
import Img from 'ui/Img/Img.vue';

import BackLink from 'ui/Link/BackLink.vue';
import Spacing from 'ui/Spacing/Spacing.vue';
import MainInfo from '@/components/game/MainInfo.vue';
import Overview from '@/components/game/Overview/index.vue';
import Mentions from '@/components/game/Mentions/index.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TillesGame',
  components: { Tabs, Tab, Img, BackLink, Spacing, MainInfo, Overview, Mentions },

  data() {
    return {
      ORIENTATION,
      SIZE,
    };
  },
});
</script>

<style lang="scss" module></style>
