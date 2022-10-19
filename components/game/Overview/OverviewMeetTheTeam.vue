<template>
  <div :class="$style.meetTheTeam">
    <h3>Meet the teem</h3>
    <Spacing :size="SIZE.MD" />

    <div :class="$style.center">
      <Img file="star.png" />
      <Spacing :size="SIZE.LG" />
      <h4>
        Login as the Official Twitter Account<br />
        to add the team
      </h4>
      <Spacing :size="SIZE.LG" />
      <Button variant="secondary" size="sm">Login</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import Img from 'ui/Img/Img.vue';
import Button from 'ui/Button/Button.vue';

import { SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'GameOverviewMeetTheTeam',
  components: { Spacing, Img, Button },

  data() {
    return {
      SIZE,
    };
  },
});
</script>

<style lang="scss" module>
.meetTheTeam {
  background-color: $bg-medium;
  padding: $gap-xl;
  border-radius: $border-radius;

  .center {
    @include flex();
    flex-direction: column;
    text-align: center;

    button {
      width: 120px;
    }
  }
}
</style>
