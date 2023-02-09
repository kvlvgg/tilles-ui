<template>
  <div :class="$style.notification">
    <div :class="$style.messageSection">
      <i :class="$style.notifyIcon" />
      <Spacing :size="SIZE.XS" :orientation="ORIENTATION.HORIZONTAL" />
      <span>Sing in to see our new features first</span>
    </div>

    <div :class="$style.buttonsSection">
      <Button :class="$style.signInButton" variant="primary" size="sm" @click="openSignInModal">
        <span>{{ signButtonText }}</span>
      </Button>

      <Spacing :size="SIZE.MD" :orientation="ORIENTATION.HORIZONTAL" />

      <Button :class="$style.closeButton" variant="text" size="sm" @click="$emit('close')">
        <span>Close</span>
        <Spacing :size="SIZE.XXS" :orientation="ORIENTATION.HORIZONTAL" />
        <i :class="$style.iconCross" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import Button from 'ui/Button/Button.vue';

import SignInModal from '@/components/platform/SignInModal/index.vue';
import LoggedInModal from '@/components/platform/LoggedInModal/index.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';
import { STORE as USER_STORE } from '@/store/User/constants';

export default Vue.extend({
  name: 'TillesPlatformSignInNotification',
  components: { Spacing, Button },

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
    async openSignInModal() {
      const success = await this.$modal.show<boolean>(SignInModal);
      if (!success) return;

      this.$modal.show(LoggedInModal);
    },
  },
});
</script>

<style lang="scss" module>
.notification {
  @include flex(space-between);
  background-color: #a5fb3780;
  border: 2px solid #a5fb37;
  border-radius: $border-radius;
  padding: $gap-md $gap-lg;

  .messageSection {
    @include flex(s);
    .notifyIcon {
      @include icon-notify();
    }
  }

  .buttonsSection {
    @include flex(s);

    .signInButton {
      background-color: #a5fb3733;
      padding: 0 $gap-sm;
      border: none;
    }

    .closeButton {
      @include flex();
      width: 72px;

      .iconCross {
        @include icon-cross($text-color-primary, $icon-size-sm);
      }
    }
  }
}
</style>
