<template>
  <header :class="$style.header">
    <Img file="logo.svg" />

    <div :class="$style.left">
      <a @click="onSignClick">{{ signButtonText }}</a>
      <Spacing :size="SIZE.XXL" :orientation="ORIENTATION.HORIZONTAL" />

      <nuxt-link to="/">Signals</nuxt-link>
      <Spacing :size="SIZE.XXL" :orientation="ORIENTATION.HORIZONTAL" />

      <nuxt-link to="/">Premium</nuxt-link>
      <Spacing :size="SIZE.XXL" :orientation="ORIENTATION.HORIZONTAL" />

      <nuxt-link to="/">
        ⭐️ Tillies PRO
        <Spacing :size="SIZE.XXXS" :orientation="ORIENTATION.HORIZONTAL" />
        <Badge value="Soon!" />
      </nuxt-link>

      <Spacing :size="SIZE.XXL" :orientation="ORIENTATION.HORIZONTAL" />
      <Spacing :size="SIZE.XXL" :orientation="ORIENTATION.HORIZONTAL" />

      <ProfileLink />

      <Spacing :size="SIZE.XXL" :orientation="ORIENTATION.HORIZONTAL" />

      <Img file="twitter-logo.svg" />
      <Spacing :size="SIZE.XXXS" :orientation="ORIENTATION.HORIZONTAL" />
      <Img file="discord-logo.svg" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

import ProfileLink from '@/components/default-layout/ProfileLink.vue';

import Img from 'ui/Img/Img.vue';
import Spacing from 'ui/Spacing/Spacing.vue';
import Badge from 'ui/Badge/Badge.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

import { STORE as USER_STORE } from '@/store/User/constants';

export default Vue.extend({
  name: 'TillesHeader',
  components: { ProfileLink, Img, Spacing, Badge },

  data() {
    return {
      ORIENTATION,
      SIZE,
    };
  },

  computed: {
    signButtonText(): string {
      return this.$store.getters[USER_STORE.GETTERS.SIGN_BUTTON_TEXT];
    },
  },

  methods: {
    onSignClick() {
      this.$store.dispatch(USER_STORE.ACTIONS.ON_SING_BUTTON_CLICK);
    },
  },
});
</script>

<style lang="scss" module>
.header {
  height: $header-height;
  background-color: $bg-medium;
  padding: 18px 70px;
  z-index: 951;
  @include flex(space-between);

  .left {
    @include flex();
  }
}
</style>
