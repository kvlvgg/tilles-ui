<template>
  <Landing />
</template>

<script lang="ts">
import Vue from 'vue';
import Landing from '@/components/landing/Landing.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: { Landing },
  layout: 'empty',
});
</script>
