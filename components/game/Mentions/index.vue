<template>
  <div :class="$style.mentions">
    <!-- <Spacing :size="SIZE.XL" />
    <TimeFilter v-model="timeFilterValue" :times="['1h', '24h', '7d', '30d', 'All time']" disable />
    <Badge :class="$style.premiumBadge" value="premium" />
    <Spacing :size="SIZE.XL" />

    <Chart />
    <Spacing :size="SIZE.LG" />

    <MostTweetsPopularBy /> -->

    <Spacing :size="SIZE.LG" />
    <TimeFilter v-model="timeFilterValue" :times="['1h', '24h', '7d', '30d', 'All time']" />
    <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.LG" />
    <TimeFilter v-model="category" :times="['Last', 'Followers', 'Likes', 'Replies', 'Retweets']" />
    <Spacing :size="SIZE.LG" />

    <Tweets />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import TimeFilter from 'ui/TimeFilter/TimeFilter.vue';
// import Badge from 'ui/Badge/Badge.vue';

// import Chart from '@/components/game/Mentions/MentionsChart.vue';
// import MostTweetsPopularBy from '@/components/game/Mentions/MentionsMostTweetsPopularBy.vue';
import Tweets from '@/components/game/Mentions/MentionsTweets.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'GameMentions',
  components: { Spacing, TimeFilter, Tweets },

  data() {
    return {
      SIZE,
      ORIENTATION,
      timeFilterValue: '7d',
      category: 'Likes',
    };
  },
});
</script>

<style lang="scss" module>
.mentions {
  position: relative;

  .premiumBadge {
    position: absolute;
    top: 16px;
    left: 270px;
  }
}
</style>
