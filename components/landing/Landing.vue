<template>
  <div :class="$style.landingImageWrapper">
    <Img :class="$style.landingImage" file="landing.png" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Img from 'ui/Img/Img.vue'

export default Vue.extend({
  name: 'TillesLanding',
  components: { Img },
})
</script>

<style lang="scss" module>
.landingImageWrapper {
  background-color: #242731;

  .landingImage {
    width: 100%;
  }
}
</style>
