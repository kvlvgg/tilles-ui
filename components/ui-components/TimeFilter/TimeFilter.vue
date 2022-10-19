<template>
  <div :class="timeFilterClasses">
    <Button
      v-for="(time, i) in times"
      :key="i"
      :class="{ [$style.selected]: time === value }"
      @click="$emit('input', time)"
    >
      {{ time }}
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropType } from 'vue/types/v3-component-props';

export default Vue.extend({
  name: 'TillesTimeFilter',
  props: {
    value: {
      type: String,
      default: null,
    },

    times: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },

    disable: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    timeFilterClasses(): Record<string, boolean> {
      return {
        [this.$style.timeFilter]: true,
        [this.$style.disabled]: this.disable,
      };
    },
  },
});
</script>

<style lang="scss" module>
.timeFilter {
  @include flex();
  display: inline-flex;

  button {
    @include fontInterRegular(14);
    background-color: transparent;
    color: $text-color-primary;
    padding: $gap-sm $gap-md;
    border: 1px solid $bg-medium;
    border-radius: 0;
    white-space: nowrap;

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    &.selected {
      background-color: $bg-medium;
    }
  }

  &.disabled {
    button {
      border: 1px solid $bg-medium;
      color: $text-color-secondary;
    }
  }
}
</style>
