<template>
  <div>
    <Spacing :size="SIZE.XXL" />

    <Search />
    <Spacing :size="SIZE.XL" />

    <Filters @change-project-table="currentTable = $event" @change-time-filter="loadTwitterProjects($event)" />
    <Spacing :size="SIZE.XL" />

    <ReleasedProjectsTable v-if="currentTable === 'Released'" />
    <UpcomingProjectsTable v-if="currentTable === 'Upcoming'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Search from '@/components/platform/TrendingProjectsSearch.vue';
import Filters from '@/components/platform/TrendingProjectsFilters.vue';
import ReleasedProjectsTable from '@/components/platform/TrendingReleasedProjectsTable.vue';
import UpcomingProjectsTable from '@/components/platform/TrendingUpcomingProjectsTable.vue';

import Spacing from 'ui/Spacing/Spacing.vue';

import { SIZE } from 'ui/Spacing/constants';

import { STORE } from '@/store/TwitterProjects/constants';

export default Vue.extend({
  name: 'TillesPlatformTrendingProjects',
  components: { Spacing, Search, Filters, ReleasedProjectsTable, UpcomingProjectsTable },

  data() {
    return {
      SIZE,
      currentTable: 'Released',
      timeFilter: '7d',
    };
  },

  created() {
    this.loadTwitterProjects('7d');
  },

  methods: {
    loadTwitterProjects(event: string) {
      this.$store.commit(STORE.MUTATIONS.SET_PERIOD, event);
      this.$store.dispatch(STORE.ACTIONS.LOAD_TWITTER_PROJECTS);
    },
  },
});
</script>

<style lang="scss" module></style>
