<template>
  <button :class="$style.button" v-on="$listeners" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UniButton',
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
  },

  methods: {
    onClick() {
      if (!this.to) return;
      this.$router.push(this.to);
    },
  },
});
</script>

<style lang="scss" module>
.button {
  @include fontInterRegular($button-font-size-md);
  color: $button-text-color;
  border-radius: $button-radius;

  &[size='sm'] {
    height: $button-height-sm;

    &[square] {
      @include flex();
      width: $button-height-sm;
    }
  }

  &[size='md'] {
    height: $button-height-md;

    &[square] {
      @include flex();
      width: $button-height-md;
    }
  }

  &[variant='primary'] {
    background-color: $button-primary-bg;
    border: 2px solid $button-primary-bg;
  }

  &[variant='secondary'] {
    background-color: $button-secondary-bg;
    border: 2px solid $button-secondary-bg;
  }

  &[variant='alternative'] {
    background-color: $button-alternative-bg;
    border: 2px solid $button-alternative-bg;
  }

  &[variant='outlined'] {
    background-color: transparent;
    border: 2px solid $grey;
  }

  &[variant='text'] {
    background-color: transparent;
    border: none;
  }
}
</style>
