<template>
  <img :src="src" :alt="file" :style="imgStyle" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UniImg',
  props: {
    file: {
      type: String,
      default: 'picture',
    },

    url: {
      type: String,
      default: null,
    },

    width: {
      type: String,
      default: null,
    },

    height: {
      type: String,
      default: null,
    },

    borderRadius: {
      type: String,
      default: null,
    },
  },

  computed: {
    src(): string {
      const domain = this.$nuxt.$axios.defaults.baseURL?.replace(/api\/v\d\//, '');
      if (this.url) return domain + this.url;
      const [fileName, extension] = this.file.split('.');
      const directory = extension === 'png' ? 'icons' : 'svg';
      return `/${directory}/${fileName}.${extension}`;
    },

    imgStyle(): Record<string, string> {
      return {
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius,
      };
    },
  },
});
</script>
