<template>
  <span :class="checkBoxClasses" @click="inputValue">
    <span :class="iconClasses" />
    <span @mousedown.prevent>{{ label }}</span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TillesCheckBox',
  props: {
    value: {
      type: Boolean,
      default: false,
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
    checkBoxClasses(): Record<string, boolean> {
      return {
        [this.$style.checkbox]: true,
        [this.$style.disable]: this.disable,
      };
    },

    iconClasses(): Record<string, boolean> {
      return {
        [this.$style.checkboxIcon]: true,
        [this.$style.checked]: this.value,
        [this.$style.disable]: this.disable,
      };
    },
  },

  methods: {
    inputValue() {
      if (this.disable) return;
      this.$emit('input', !this.value);
    },
  },
});
</script>

<style lang="scss" module>
.checkbox {
  @include fontInterMedium(16);
  @include flex(flex-start);
  display: inline-flex;
  cursor: pointer;

  :first-child {
    margin-right: $gap-xxs;
  }

  &.disable {
    color: $text-color-secondary;
  }
}

.checkboxIcon {
  @include icon-checkbox-unchecked();

  &.disable {
    @include icon-checkbox-unchecked($text-color-secondary);
  }

  &.checked {
    @include icon-checkbox-checked();

    &.disable {
      @include icon-checkbox-checked($text-color-secondary);
    }
  }
}
</style>
