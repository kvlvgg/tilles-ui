<template>
  <img :src="src" :alt="file" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UniImg',
  props: {
    file: {
      type: String,
      required: true,
    },
  },

  computed: {
    src(): string {
      const [fileName, extension] = this.file.split('.');
      const directory = extension === 'png' ? 'icons' : 'svg';
      return `/${directory}/${fileName}.${extension}`;
    },
  },
});
</script>
