<template>
  <input
    v-bind="$attrs"
    :value="value"
    :class="$style.input"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UniInput',

  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
});
</script>

<style lang="scss" module>
.input {
  color: $input-text-color;
  background-color: $input-bg;
  border-radius: $input-radius;

  &[size='md'] {
    @include fontInterRegular($input-font-size-md);
    height: $input-height-md;
    padding: $input-padding-md;
  }
}

::placeholder {
  color: $text-color-secondary;
}
</style>
