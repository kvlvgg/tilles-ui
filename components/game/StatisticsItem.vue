<template>
  <div :class="{ [$style.statisticItem]: true, [$style.notProvided]: value === '--' }">
    <div :class="$style.value">
      <span v-text="value" />

      <span v-if="change" :class="$style.change">({{ change | change }})</span>
    </div>
    <div v-text="label" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GameStatisticsItem',
  props: {
    value: {
      type: String,
      default: '--',
    },
    change: {
      type: Number,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
});
</script>

<style lang="scss" module>
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

  &.notProvided {
    color: $text-color-secondary;
  }
}
</style>
