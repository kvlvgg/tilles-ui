<template>
  <span :class="$style.badge" v-text="value" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TillesBadge',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
.badge {
  color: $orange;
  background-color: #3f2f28;
  padding: $gap-xxxs $gap-xs;
  border-radius: 12px;
}
</style>
