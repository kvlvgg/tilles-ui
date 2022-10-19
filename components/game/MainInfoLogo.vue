<template>
  <div :class="$style.mainInfoLogo">
    <div :class="$style.logo">
      <Img file="game-main-info-logo.png" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.LG" />
      <div>
        <h2>Doodles</h2>
        <span>@doodles</span>
      </div>
    </div>

    <div :class="$style.links">
      <Button variant="primary" size="sm">
        <span>Website</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
        <i :class="$style.copyIcon" />
      </Button>

      <Button variant="primary" size="sm">
        <span>Twitter</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
        <i :class="$style.copyIcon" />
      </Button>

      <Button variant="primary" size="sm">
        <span>Discord</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
        <i :class="$style.copyIcon" />
      </Button>

      <Button variant="primary" size="sm">
        <span>Etherscan</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
        <i :class="$style.copyIcon" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Img from 'ui/Img/Img.vue';
import Button from 'ui/Button/Button.vue';
import Spacing from 'ui/Spacing/Spacing.vue';

import { SIZE, ORIENTATION } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'GameMainInfoLogo',
  components: { Img, Button, Spacing },

  data() {
    return {
      SIZE,
      ORIENTATION,
    };
  },
});
</script>

<style lang="scss" module>
.mainInfoLogo {
  @include flex(space-between);

  .logo {
    @include flex();
  }

  .links {
    @include flex();
    gap: $gap-xs;

    button {
      @include flex();
      padding: 0 $gap-lg;

      .copyIcon {
        @include icon-open();
      }
    }
  }
}
</style>
