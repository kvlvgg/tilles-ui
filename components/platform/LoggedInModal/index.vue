<template>
  <div :class="$style.loggedInModal">
    <Img :class="$style.imageWrapper" file="star.png" />

    <h2>Premium for 0x96...83s</h2>
    <Spacing :size="SIZE.SM" />
    <span :class="$style.description">
      Tillies Premium is the edge you're looking for. Get the latest alpha <br />
      and never FOMO into a project again.
    </span>
    <Spacing :size="SIZE.XXL" />

    <div :class="$style.tariff">
      <div>
        <h3>$10/mo</h3>
        <span :class="$style.period">for a 6 month subscripton</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.MD" />
        <Badge :class="$style.profit" value="Save 66%" />
      </div>

      <Button :class="$style.buttonChoose" variant="secondary" size="sm"> Choose </Button>
    </div>

    <Spacing :size="SIZE.XXS" />

    <div :class="$style.tariff">
      <div>
        <h3>$15</h3>
        <span :class="$style.period">for 1 month </span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.MD" />
        <Badge :class="$style.profit" value="Save 50% for early users" />
      </div>

      <Button :class="$style.buttonChoose" variant="secondary" size="sm"> Choose </Button>
    </div>

    <Spacing :size="SIZE.XXL" />
    <h2>What's included</h2>
    <Spacing :size="SIZE.SM" />

    <div :class="$style.features">
      <div />
      <div>Tillies Lite</div>
      <div :class="$style.tillesPremiumColumnHeader">Tillies Premium</div>

      <div>
        Real time and historical <br />
        analytics on collections
      </div>
      <div>-</div>
      <div>
        <Img file="check.svg" />
      </div>

      <div>
        Floor, mint, and sales alerts by <br />
        contract or wallet
      </div>
      <div>-</div>
      <div>
        <Img file="check.svg" />
      </div>

      <div>
        Customized real time feeds, <br />
        filter by whales and other tags
      </div>
      <div>-</div>
      <div>
        <Img file="check.svg" />
      </div>

      <div>
        Build your own watchlists to <br />
        stay on top of favorites
      </div>
      <div>-</div>
      <div>
        <Img file="check.svg" />
      </div>

      <div :class="$style.moreFeatures">...and so much more -- new features keep coming!</div>
    </div>

    <Spacing :size="SIZE.XXL" />
    <Button :class="$style.buttonClose" variant="primary" size="md">Close </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Img from 'ui/Img/Img.vue';
import Spacing from 'ui/Spacing/Spacing.vue';
import Badge from 'ui/Badge/Badge.vue';
import Button from 'ui/Button/Button.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TillesPlatfromLoggedInModal',
  components: { Spacing, Img, Badge, Button },

  data() {
    return {
      ORIENTATION,
      SIZE,
    };
  },
});
</script>

<style lang="scss" module>
.loggedInModal {
  padding: $gap-xl 110px;
  text-align: center;

  .imageWrapper {
    transform: rotate(15deg);
  }

  .description {
    @include fontPoppinsMeduim(16);
  }

  .tariff {
    @include flex(space-between, flex-end);
    padding: $gap-lg $gap-md;
    border: 2px solid $border-color;
    border-radius: $border-radius;
    text-align: left;

    .period {
      @include fontPoppinsMeduim(14);
    }

    .profit {
      @include fontPoppinsMeduim(14);
    }

    .buttonChoose {
      align-self: center;
      width: 133px;
    }
  }

  .features {
    @include fontPoppinsMeduim(16);
    padding: $gap-lg;
    border: 2px solid $border-color;
    border-radius: $border-radius;

    :nth-child(3n + 1) {
      text-align: left;
    }

    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: $gap-md;

    .tillesPremiumColumnHeader {
      color: $orange;
    }

    .moreFeatures {
      grid-column: 1 /4;
      text-align: center;
      color: $orange;
    }
  }

  .buttonClose {
    width: 141px;
  }
}
</style>
