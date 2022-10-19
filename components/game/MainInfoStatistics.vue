<template>
  <div :class="$style.mainInfoStatisctics">
    <StatisticsItem value="10000" label="Items" />
    <StatisticsItem value="6578" label="Owners" />
    <StatisticsItem value="152k ETH" :change="0.7" label="Total volume" />
    <StatisticsItem value="22 ETH" :change="0.7" label="Floor price" />
    <StatisticsItem value="23.02.2021" label="Twitter creation date" />
    <StatisticsItem value="323 928" :change="0.7" label="Twitter followers" />
    <StatisticsItem label="Discord members" />
    <StatisticsItem label="Suspicious users" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import StatisticsItem from '@/components/game/StatisticsItem.vue';

export default Vue.extend({
  name: 'GameMainInfoStatistics',
  components: { StatisticsItem },
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
