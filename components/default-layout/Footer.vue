<template>
  <div :class="$style.footer">
    <Img file="logo.svg" />

    <div :class="$style.companyInfo">
      <div :class="$style.email">info@metalabs.io</div>
      <div :class="$style.rights">©2022 Metalabs. All Rights Reserved.</div>
    </div>

    <div :class="$style.socialMediaLinks">
      <Img file="twitter-logo.svg" />
      <Img file="discord-logo.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Img from 'ui/Img/Img.vue';

export default Vue.extend({
  name: 'TillesFooter',
  components: { Img },
});
</script>

<style lang="scss" module>
.footer {
  height: $footer-height;
  background-color: $bg-medium;
  padding: 22px 70px;
  @include flex(space-between);

  .companyInfo {
    text-align: center;

    .email {
      @include fontInterRegular(14);
    }

    .rights {
      @include fontInterRegular(10);
    }
  }

  .socialMediaLinks {
    @include flex();
  }
}
</style>
