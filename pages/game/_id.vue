<template>
  <Game />
</template>

<script lang="ts">
import Vue from 'vue';

import Game from '@/components/game/index.vue';

export default Vue.extend({
  name: 'TillesGamePage',
  components: { Game },
});
</script>
