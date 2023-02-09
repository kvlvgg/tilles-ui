<template>
  <div :class="$style.signInModal">
    <div :class="$style.imageWrapper">
      <Img file="sign-in-image.png" />
    </div>

    <h2>Sign in</h2>
    <Spacing :size="SIZE.SM" />
    <span>Connect your wallet</span>
    <Spacing :size="SIZE.XL" />

    <div :class="$style.buttonWrapper">
      <Button variant="primary" size="md" @click="$emit('close')">Close</Button>
      <Spacing :size="SIZE.MD" :orientation="ORIENTATION.HORIZONTAL" />
      <Button variant="secondary" size="md" @click="onSignClick">{{ signButtonText }} </Button>
    </div>

    <Spacing :size="SIZE.XXS" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import Img from 'ui/Img/Img.vue';
import Button from 'ui/Button/Button.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';
import { STORE as USER_STORE } from '@/store/User/constants';

export default Vue.extend({
  name: 'TillesPlatformSignInModal',
  components: { Spacing, Img, Button },

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

    isSignIn(): string {
      return this.$store.getters[USER_STORE.GETTERS.IS_SIGNED_IN];
    },
  },

  watch: {
    isSignIn(status: boolean) {
      if (!status) return;

      this.$emit('change', true);
      this.$emit('close');
    },
  },

  methods: {
    async onSignClick() {
      await this.$store.dispatch(USER_STORE.ACTIONS.ON_SING_BUTTON_CLICK);
    },
  },
});
</script>

<style lang="scss" module>
.signInModal {
  padding: $gap-xl;
  text-align: center;

  .imageWrapper {
    @include flex();
    width: 400px;
  }

  .buttonWrapper {
    @include flex();
    padding: 0 $gap-md;
  }
}
</style>
