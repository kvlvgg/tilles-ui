<template>
  <div>
    <BackLink />
    <Spacing :size="SIZE.XXL" />
    <Spacing :size="SIZE.XXL" />
    <Spacing :size="SIZE.XXL" />

    <div :class="$style.mission">
      <h1>People of Web3 in <span :class="$style.orangeText">one click</span></h1>
      <Spacing :size="SIZE.XXL" />
      <h3>Tilly <span :class="$style.thinText">- your identity & social layer in Web3 to help you...</span></h3>
      <Spacing :size="SIZE.XXL" />
    </div>

    <div :class="$style.features">
      <div :class="$style.item">
        <Img file="profile-connect-features-lookup.png" />
        <Spacing :size="SIZE.XXS" />
        <div :class="$style.descriptionLine1">Find like-minded people</div>
        <Spacing :size="SIZE.XXS" />
        <div :class="$style.descriptionLine2">on top of your interests, socials & NFTs</div>
      </div>

      <div :class="$style.item">
        <Img file="profile-connect-features-social-activity.png" />
        <Spacing :size="SIZE.XXS" />
        <div :class="$style.descriptionLine1">Curate your Web3 social activity</div>
        <Spacing :size="SIZE.XXS" />
        <div :class="$style.descriptionLine2">to make interaction more effective</div>
      </div>

      <div :class="$style.item">
        <Img file="profile-connect-features-clubs.png" />
        <Spacing :size="SIZE.XXS" />
        <div :class="$style.descriptionLine1">Create interest Clubs</div>
        <Spacing :size="SIZE.XXS" />
        <div :class="$style.descriptionLine2">to discuss not only crypto</div>
      </div>
    </div>

    <Spacing :size="SIZE.XXL" />
    <Button :class="$style.connectButton" variant="secondary" size="md">
      <i :class="$style.connectIcon" />
      <Spacing :size="SIZE.XXS" :orientation="ORIENTATION.HORIZONTAL" />
      Connect Metamask
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import BackLink from 'ui/Link/BackLink.vue';
import Spacing from 'ui/Spacing/Spacing.vue';
import Img from 'ui/Img/Img.vue';
import Button from 'ui/Button/Button.vue';

import { SIZE, ORIENTATION } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TillesProfileConnect',
  components: { BackLink, Spacing, Img, Button },

  data() {
    return {
      SIZE,
      ORIENTATION,
    };
  },
});
</script>

<style lang="scss" module>
.mission {
  @include flex();
  flex-direction: column;

  .orangeText {
    color: $orange;
  }

  .thinText {
    @include fontInterRegular(24);
  }
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $gap-lg;

  .item {
    @include flex();
    flex-direction: column;

    background-color: $bg-medium;
    border: 1px solid $bg-light;
    border-radius: $border-radius;
    padding: $gap-lg $gap-xl;

    .descriptionLine1 {
      @include fontPoppinsMeduim(18);
    }

    .descriptionLine2 {
      @include fontInterRegular(16);
    }
  }
}

.connectButton {
  @include flex();
  width: 250px;
  margin: 0 auto 100px;

  .connectIcon {
    @include icon-connect();
  }
}
</style>
