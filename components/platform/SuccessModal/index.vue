<template>
  <div :class="$style.successModal">
    <Img file="todo-board-list.png" />
    <h2>Thank you for your submission!</h2>
    <Spacing :size="SIZE.XXS" />

    <span>We will definitely contact you</span>
    <Spacing :size="SIZE.XXL" />

    <Button :class="$style.closeButton" variant="secondary" size="md" @click="$emit('close')"> Close </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import Img from 'ui/Img/Img.vue';
import Button from 'ui/Button/Button.vue';

import { SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'SuccessModal',
  components: { Spacing, Img, Button },

  data() {
    return {
      SIZE,
    };
  },
});
</script>

<style lang="scss" module>
.successModal {
  @include flex();
  flex-direction: column;
  padding: $gap-xxxl;

  .closeButton {
    width: 140px;
    margin: 0 auto;
  }
}
</style>
