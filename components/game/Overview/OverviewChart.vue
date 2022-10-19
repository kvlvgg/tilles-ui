<template>
  <div :class="$style.overviewChart">
    <div :class="$style.filters">
      <div
        v-for="(filter, i) in filters"
        :key="i"
        :class="{
          [$style.filter]: true,
          [$style.selected]: filter.label === selectedFilter,
          [$style.disable]: filter.disable,
        }"
        @click="switchFilter(filter.label)"
      >
        <span v-text="filter.label" />
        <span :class="$style.value" v-text="filter.value" />
      </div>
    </div>

    <Img file="game-overview-twitter-tab.png" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Img from 'ui/Img/Img.vue';

export default Vue.extend({
  name: 'GameOverviewChart',
  components: { Img },

  data() {
    return {
      selectedFilter: 'All',
    };
  },

  computed: {
    filters() {
      return [
        { label: 'All', value: 10000 },
        { label: 'Tweets', value: 10000 },
        { label: 'Retweets', value: 10000 },
        { label: 'Replies', value: 10000 },
        { label: 'Giveaways / Airdrops', value: '--', disable: true },
      ];
    },
  },

  methods: {
    switchFilter(label: string) {
      this.selectedFilter = label;
    },
  },
});
</script>

<style lang="scss" module>
.overviewChart {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: $gap-lg;

  .filters {
    display: grid;
    grid-template-columns: 1fr;
    gap: $gap-xs;

    .filter {
      @include flex(space-between);
      padding: $gap-md $gap-xl;
      border: 2px solid $bg-medium;
      border-radius: $border-radius;
      cursor: pointer;

      &.selected {
        position: relative;
        background-color: $bg-medium;

        &::after {
          content: '';
          position: absolute;
          top: calc(50% - 20px);
          right: -16px;
          border-top: 20px solid transparent;
          border-bottom: 20px solid transparent;
          border-left: 20px solid $bg-medium;
        }
      }

      &.disable {
        color: $text-color-secondary;
      }

      .value {
        @include fontInterRegular(24);
        line-height: 100%;
      }
    }
  }

  img {
    width: 100%;
  }
}
</style>
