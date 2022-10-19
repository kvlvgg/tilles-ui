<template>
  <div :class="rootClasses">
    <label :class="labelClasses">{{ label }}</label>
    <Spacing v-if="!isFlex" :size="gap" />

    <div :class="contentClasses">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';

import { SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'UniFormGroup',
  components: { Spacing },
  props: {
    label: {
      type: String,
      default: null,
    },

    labelCols: {
      type: String,
      default: '12',
    },

    gap: {
      type: String,
      default: SIZE.XXS,
    },

    contentClass: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      SIZE,
    };
  },

  computed: {
    isFlex(): boolean {
      return !!this.labelCols && Number.parseInt(this.labelCols) < 12;
    },

    rootClasses(): Record<string, boolean> {
      return {
        [this.$style.wrapper]: true,
        [this.$style.flex]: this.isFlex,
      };
    },

    labelClasses(): Record<string, boolean> {
      return {
        [this.$style.label]: true,
        [this.$style[`col-${this.labelCols}`]]: this.isFlex,
      };
    },

    contentClasses(): string[] {
      return [this.$style.content, this.contentClass ? this.contentClass : ''];
    },
  },
});
</script>

<style lang="scss" module>
.wrapper {
  .label {
    @include fontInterRegular(16);
    color: $text-color-primary;
  }

  &:not(.flex) {
    .label {
      display: block;
    }
  }

  &.flex {
    @include flex(normal, center);

    .label {
      padding-right: 5px;

      $cols: (
        '1': 8.3%,
        '2': 16.6%,
        '3': 25%,
        '4': 33.3%,
        '5': 41.6%,
        '6': 50%,
        '7': 58.3%,
        '8': 66.6%,
        '9': 75%,
        '10': 83.3%,
        '11': 91.6%,
        '12': 100%,
      );

      @each $col, $value in $cols {
        &.col-#{$col} {
          flex: 0 0 $value;
        }
      }
    }

    .content {
      flex: 1 1 0px;
      padding-left: 5px;
    }
  }
}
</style>
