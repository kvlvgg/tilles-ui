<template>
  <div>
    <Spacing :size="SIZE.XXL" />

    <Search />
    <Spacing :size="SIZE.XL" />

    <Filters @change-project-table="currentTable = $event" />
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

export default Vue.extend({
  name: 'TillesPlatformTrendingProjects',
  components: { Spacing, Search, Filters, ReleasedProjectsTable, UpcomingProjectsTable },

  data() {
    return {
      SIZE,
      currentTable: 'Released',
    };
  },
});
</script>

<style lang="scss" module></style>
