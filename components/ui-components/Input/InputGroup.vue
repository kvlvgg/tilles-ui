<template>
  <div :class="$style.inputGroup">
    <slot name="left"></slot>

    <Input
      v-bind="$attrs"
      :value="value"
      :class="$style.input"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />

    <slot name="right"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Input from 'ui/Input/Input.vue';

export default Vue.extend({
  name: 'UniInputGroup',
  components: { Input },

  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
});
</script>

<style lang="scss" module>
.inputGroup {
  @include flex();
  background-color: $bg-medium;
  border-radius: $input-radius;
  padding: $input-padding-md;

  .input {
    @include fontInterRegular(24);
    background-color: transparent;
    padding: 0;
    border-radius: 0;

    &:not(:first-child) {
      margin-left: $gap-sm;
    }
  }
}
</style>
