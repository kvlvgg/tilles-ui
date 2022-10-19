<template>
  <Table
    :value="popularity"
    :fields="fields"
    :sortField.sync="sortField"
    :sortDesc.sync="sortDesc"
    paginator
    :rowsPerPage="10"
  >
    <template #Game="{ data }">
      <nuxt-link
        :to="{
          name: 'game-id',
          params: { id: data.entry.GameId },
        }"
        :class="$style.gameField"
      >
        <Img file="test-game-logo.png" />
        <span>{{ data.value }}</span>
      </nuxt-link>
    </template>

    <template #MintDate="{ data }">
      {{ data.value }}
    </template>

    <template #MintPrice="{ data }">
      {{ data.value.change }}
    </template>

    <template #TwitterAudience="{ data }">
      <div>{{ data.value.amount | thousandSeparator | measure('k') }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #Mentions>
      <Badge :class="$style.onlyForPRO" value="Only for PRO" />
    </template>

    <template #Engagements>
      <Badge :class="$style.onlyForPRO" value="Only for PRO" />
    </template>

    <template #Reach>
      <Badge :class="$style.onlyForPRO" value="Only for PRO" />
    </template>

    <template #Actions="{ data }">
      <div :class="$style.actionsField">
        <Button variant="primary" size="md" square>
          <i :class="{ [$style.favoritesButton]: true, [$style.selected]: data.value.isFavorite }" />
        </Button>

        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XS" />

        <Button
          :to="{
            name: 'game-id',
            params: { id: data.entry.GameId },
          }"
          variant="secondary"
          size="md"
          square
        >
          <i :class="$style.goToButton" />
        </Button>
      </div>
    </template>
  </Table>
</template>

<script lang="ts">
import Vue from 'vue';

import Table from 'ui/Table/Table.vue';
import Img from 'ui/Img/Img.vue';
import Button from 'ui/Button/Button.vue';
import Spacing from 'ui/Spacing/Spacing.vue';
import Badge from 'ui/Badge/Badge.vue';

import { SIZE, ORIENTATION } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TilliesPlatformTrendingUpcomingProjectsTable',
  components: { Table, Img, Button, Spacing, Badge },

  data() {
    return {
      SIZE,
      ORIENTATION,

      fields: [
        { name: 'Game', header: 'Games', width: 215 },
        { name: 'MintDate', header: 'Mint Date', sortable: true },
        { name: 'MintPrice', header: 'Mint price', sortable: true },
        { name: 'TwitterAudience', header: 'Twitter audience', sortable: true },
        { name: 'Mentions', header: 'Mentions', sortable: true, width: 140 },
        { name: 'Engagements', header: 'Engagements', sortable: true, width: 140 },
        { name: 'Reach', header: 'Reach', sortable: true, width: 140 },
        { name: 'Actions' },
      ],

      sortField: 'FloorPrice',
      sortDesc: 1,

      popularity: new Array(100).fill({}).map(() => ({
        GameId: Math.floor(Math.random() * 100000000000),
        Game: [
          'Bored Apes Yacht Club',
          'Axie Infinity',
          'Swaggy Whales',
          'Doodles',
          'Moonbirds',
          'Azuki',
          'Decentraland',
          'The Sandbox',
          'Cool Cats',
          'Art Blocks Curated',
        ][Math.floor(Math.random() * 10)],
        MintDate: '1 Sep. 2020',
        MintPrice: { percent: Math.floor(Math.random() * 100) / 10, change: Math.floor(Math.random() * 100) / 10 },
        TwitterAudience: { amount: Math.floor(Math.random() * 1000), change: -Math.floor(Math.random() * 100) / 10 },
        Mentions: null,
        Engagements: null,
        Reach: null,
        Actions: { isFavorite: !!Math.floor(Math.random() * 2) },
      })),
    };
  },

  methods: {
    getChangeStyle(value: number) {
      return {
        [this.$style.change]: true,
        [this.$style.positive]: value > 0,
        [this.$style.negative]: value < 0,
      };
    },
  },
});
</script>

<style lang="scss" module>
.gameField {
  @include flex(flex-start);
  gap: $gap-xs;
}

.actionsField {
  @include flex();

  .favoritesButton {
    @include icon-outlined-star();

    &.selected {
      @include icon-filled-star();
    }
  }

  .goToButton {
    @include icon-select-arrow();
    transform: rotate(-90deg);
    width: 22px;
    height: 12px;
  }
}

.change {
  @include fontPoppinsMeduim(14);

  &.positive {
    color: $green;
  }

  &.negative {
    color: $red;
  }
}

.onlyForPRO {
  @include fontPoppinsMeduim(12);
}
</style>
