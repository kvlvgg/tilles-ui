<template>
  <textarea :class="$style.textarea" :style="textAreaStyle" v-bind="$attrs" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TillesTextArea',
  props: {
    height: {
      type: Number,
      default: 140,
    },
  },

  computed: {
    textAreaStyle(): Record<string, string> {
      return {
        height: `${this.height}px`,
      };
    },
  },
});
</script>

<style lang="scss" module>
.textarea {
  resize: none;
  outline: none;
  border: none;
  width: 100%;
  padding: 0 $gap-sm;
  background-color: $bg-light;
  color: $text-color-primary;
  border-radius: $border-radius;

  @include fontInterRegular(16);
}
</style>
