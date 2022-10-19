<template>
  <span :class="radioButtonClasses" @click="inputValue">
    <span :class="iconClasses" />
    <span @mousedown.prevent>{{ label }}</span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TillesRadioButton',
  props: {
    value: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    disable: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    radioButtonClasses(): Record<string, boolean> {
      return {
        [this.$style.radiobutton]: true,
        [this.$style.disabled]: this.disable,
      };
    },

    iconClasses(): Record<string, boolean> {
      return {
        [this.$style.radiobuttonIcon]: true,
        [this.$style.checked]: this.value === this.label,
        [this.$style.disabled]: this.disable,
      };
    },
  },

  methods: {
    inputValue() {
      if (this.disable) return;
      this.$emit('input', this.label);
    },
  },
});
</script>

<style lang="scss" module>
.radiobutton {
  @include fontInterMedium(16);
  @include flex(flex-start);
  cursor: pointer;

  :first-child {
    margin-right: $gap-xxs;
  }

  &.disabled {
    color: $text-color-secondary;
  }
}

.radiobuttonIcon {
  @include icon-radiobutton-unchecked();

  &.disabled {
    @include icon-radiobutton-unchecked($text-color-secondary);
  }

  &.checked {
    @include icon-radiobutton-checked();

    &.disabled {
      @include icon-radiobutton-checked($text-color-secondary);
    }
  }
}
</style>
