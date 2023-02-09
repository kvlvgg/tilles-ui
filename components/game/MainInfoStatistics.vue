<template>
  <div :class="$style.mainInfoStatisctics">
    <StatisticsItem :value="twitterProject.itemsCount" label="Items" />
    <StatisticsItem :value="twitterProject.ownersCount" label="Owners" />

    <StatisticsItem
      :value="twitterProject.totalVolume.value | compact | measure('ETH', { spacing: true })"
      :change="twitterProject.totalVolume.change"
      label="Total volume"
    />

    <StatisticsItem
      :value="twitterProject.floorPrice.value | compact | measure('ETH', { spacing: true })"
      :change="twitterProject.floorPrice.change"
      label="Floor price"
    />

    <StatisticsItem :value="twitterProject.twitterCreationDate | date" label="Twitter creation date" />

    <StatisticsItem
      :value="twitterProject.twitterAudience.value | thousandSeparator"
      :change="twitterProject.twitterAudience.change"
      label="Twitter followers"
    />

    <StatisticsItem label="Discord members" />
    <StatisticsItem label="Suspicious users" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import StatisticsItem from '@/components/game/StatisticsItem.vue';

import { STORE } from '@/store/TwitterProject/constants';
import { TwitterProject } from '@/store/TwitterProject/getters';

export default Vue.extend({
  name: 'GameMainInfoStatistics',
  components: { StatisticsItem },

  computed: {
    twitterProject(): TwitterProject {
      return this.$store.getters[STORE.GETTERS.TWITTER_PROJECT];
    },
  },
});
</script>

<style lang="scss" module>
.mainInfoStatisctics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $gap-lg;

  .statisticItem {
    padding: $gap-lg;
    border-radius: $border-radius;
    background-color: $bg-medium;
    text-align: center;

    .value {
      @include fontPoppinsMeduim(24);

      .change {
        @include fontPoppinsMeduim(18);
        color: $green;
      }
    }
  }
}
</style>
