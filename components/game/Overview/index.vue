<template>
  <div>
    <Spacing :size="SIZE.XL" />
    <TimeFilter v-model="timeFilterValue" :times="['1h', '24h', '7d', '30d', 'All time']" />
    <Spacing :size="SIZE.XL" />

    <div :class="$style.statistics">
      <StatisticsItem value="164" :change="0.7" label="Posts" />
      <StatisticsItem value="22" :change="0.7" label="Posts per day" />
      <StatisticsItem value="56" :change="0.7" label="New followers" />
      <StatisticsItem value="178" :change="-0.7" label="Recent unfollows" />
    </div>
    <Spacing :size="SIZE.LG" />

    <Chart />
    <Spacing :size="SIZE.LG" />

    <div :class="$style.grid2Columns">
      <MostPopularTweets />
      <MeetTheTeam />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import TimeFilter from 'ui/TimeFilter/TimeFilter.vue';

import StatisticsItem from '@/components/game/StatisticsItem.vue';
import Chart from '@/components/game/Overview/OverviewChart.vue';
import MostPopularTweets from '@/components/game/Overview/OverviewMostPopularTweets.vue';
import MeetTheTeam from '@/components/game/Overview/OverviewMeetTheTeam.vue';

import { SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'GameOverview',
  components: { Spacing, TimeFilter, StatisticsItem, Chart, MostPopularTweets, MeetTheTeam },

  data() {
    return {
      SIZE,

      timeFilterValue: '7d',
    };
  },
});
</script>

<style lang="scss" module>
.statistics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $gap-lg;
}

.grid2Columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $gap-lg;
}
</style>
