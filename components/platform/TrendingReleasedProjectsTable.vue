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
        {{ data.value }}
      </nuxt-link>
    </template>

    <template #FloorPrice="{ data }">
      <div>{{ data.value.price | thousandSeparator | measure('Eth', { spacing: true }) }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #TwitterAudience="{ data }">
      <div>{{ data.value.amount | thousandSeparator | measure('k') }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #Influencers="{ data }">
      <div>{{ data.value.percent | measure('%') }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #Mentions="{ data }">
      <div>{{ data.value.amount | thousandSeparator }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #Engagements="{ data }">
      <div>{{ data.value.amount | thousandSeparator | measure('k') }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #Reach="{ data }">
      <div>{{ data.value.amount | thousandSeparator | measure('k') }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
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

import { SIZE, ORIENTATION } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TilliesPlatformTrendingReleasedProjectsTable',
  components: { Table, Img, Button, Spacing },

  data() {
    return {
      SIZE,
      ORIENTATION,

      fields: [
        { name: 'Game', header: 'Games' },
        { name: 'FloorPrice', header: 'Floor price', sortable: true },
        { name: 'TwitterAudience', header: 'Twitter audience', sortable: true },
        { name: 'Influencers', header: 'Influencers', sortable: true },
        { name: 'Mentions', header: 'Mentions', sortable: true },
        { name: 'Engagements', header: 'Engagements', sortable: true },
        { name: 'Reach', header: 'Reach', sortable: true },
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
        FloorPrice: { price: Math.floor(Math.random() * 10000) / 100, change: Math.floor(Math.random() * 100) / 10 },
        TwitterAudience: { amount: Math.floor(Math.random() * 1000), change: -Math.floor(Math.random() * 100) / 10 },
        Influencers: { percent: Math.floor(Math.random() * 100) / 10, change: Math.floor(Math.random() * 100) / 10 },
        Mentions: { amount: Math.floor(Math.random() * 1000), change: -Math.floor(Math.random() * 100) / 10 },
        Engagements: { amount: Math.floor(Math.random() * 10000), change: Math.floor(Math.random() * 100) / 10 },
        Reach: { amount: Math.floor(Math.random() * 10000), change: -Math.floor(Math.random() * 100) / 10 },
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
</style>
