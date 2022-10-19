<template>
  <Img :class="$style.image" file="game-mentions-most-popular-by.png" />
</template>

<script lang="ts">
import Vue from 'vue';

import Img from 'ui/Img/Img.vue';

export default Vue.extend({
  name: 'GameMentionsMostTweetsPopularBy',
  components: { Img },
});
</script>

<style lang="scss" module>
.image {
  width: 100%;
}
</style>
