<template>
  <div v-if="orientation === ORIENTATION.VERTICAL" :class="spacingClasses" />
  <span v-else :class="[spacingClasses, $style.inlineBlock]" />
</template>

<script lang="ts">
import Vue from 'vue';
import { PropType } from 'vue/types/options';

import { ORIENTATION } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'UniSpacing',
  props: {
    orientation: {
      type: String as PropType<keyof typeof ORIENTATION>,
      default: ORIENTATION.VERTICAL,
    },

    size: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      ORIENTATION,
    };
  },

  computed: {
    spacingClasses(): Record<string, boolean> {
      return {
        [this.$style[`h-${this.size}`]]: this.orientation === ORIENTATION.VERTICAL,

        [this.$style[`w-${this.size}`]]: this.orientation === ORIENTATION.HORIZONTAL,
      };
    },
  },
});
</script>

<style lang="scss" module>
.inlineBlock {
  display: inline-block;
}

$gap-list: (
  xxxs: $gap-xxxs,
  xxs: $gap-xxs,
  xs: $gap-xs,
  sm: $gap-sm,
  md: $gap-md,
  lg: $gap-lg,
  xl: $gap-xl,
  xxl: $gap-xxl,
  xxxl: $gap-xxxl,
);

@each $name, $value in $gap-list {
  .h-#{$name} {
    height: #{$value};
  }

  .w-#{$name} {
    width: #{$value};
  }
}
</style>
