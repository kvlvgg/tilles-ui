<template>
  <TilliesProfileConnect />
</template>

<script lang="ts">
import Vue from 'vue';

import TilliesProfileConnect from '@/components/profile/connect/index.vue';

export default Vue.extend({
  name: 'TilliesPageProfileConnect',
  components: { TilliesProfileConnect },
});
</script>

<style lang="scss" module></style>
