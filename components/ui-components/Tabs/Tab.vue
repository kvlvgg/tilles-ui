<template>
  <div v-if="visible" role="tab">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UniTab',
  props: {
    name: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: null,
    },

    active: {
      type: Boolean,
      default: false,
    },

    disable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isTab: true,
      visible: false,
    };
  },

  mounted() {
    this.visible = this.active;
  },
});
</script>

<style lang="scss" module></style>
