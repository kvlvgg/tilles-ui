<template>
  <Table
    :value="twitterProjects.items"
    :fields="fields"
    :sortField.sync="sortField"
    :sortDesc.sync="sortDesc"
    paginator
    :total="twitterProjects.pages"
    @sort="onSortChanged"
    @page="onPageChanged"
  >
    <template #name="{ data }">
      <nuxt-link
        :to="{
          name: 'game-slug',
          params: { slug: data.entry.slug },
        }"
        :class="$style.gameField"
      >
        <Img :url="data.entry.logo" width="56px" height="56px" borderRadius="8px" />
        {{ data.value }}
      </nuxt-link>
    </template>

    <template #floorPrice="{ data }">
      <div>{{ data.value.value | thousandSeparator | measure('Eth', { spacing: true }) }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #twitterAudience="{ data }">
      <div>{{ data.value.value | thousandSeparator | measure('k') }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #influencers="{ data }">
      <div>{{ data.value.percent | measure('%') }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #mentions="{ data }">
      <div>{{ data.value.value | thousandSeparator }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #engagements="{ data }">
      <div>{{ data.value.value | thousandSeparator | measure('k') }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #suspicious="{ data }">
      <div>{{ data.value.value | thousandSeparator | measure('k') }}</div>
      <div :class="getChangeStyle(data.value.change)">{{ data.value.change | change }}</div>
    </template>

    <template #actions="{ data }">
      <div :class="$style.actionsField">
        <Button variant="primary" size="md" square>
          <i :class="{ [$style.favoritesButton]: true, [$style.selected]: data.value.isFavorite }" />
        </Button>

        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XS" />

        <Button
          :to="{
            name: 'game-slug',
            params: { slug: data.entry.slug },
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

import { STORE } from '@/store/TwitterProjects/constants';
import { TwitterProjects } from '@/store/TwitterProjects/getters';

export default Vue.extend({
  name: 'TilliesPlatformTrendingReleasedProjectsTable',
  components: { Table, Img, Button, Spacing },

  data() {
    return {
      SIZE,
      ORIENTATION,

      fields: [
        { name: 'name', header: 'Games' },
        { name: 'floorPrice', header: 'Floor price', sortable: true, sortName: 'floor_price' },
        { name: 'twitterAudience', header: 'Twitter audience', sortable: true, sortName: 'twitter_audience' },
        { name: 'influencers', header: 'Influencers', sortable: true },
        { name: 'mentions', header: 'Mentions', sortable: true, sortName: 'mentions' },
        { name: 'engagements', header: 'Engagements', sortable: true, sortName: 'engagements' },
        { name: 'suspicious', header: 'Suspicious', sortable: true },
        { name: 'actions' },
      ],

      sortField: 'FloorPrice',
      sortDesc: 1,
    };
  },

  computed: {
    twitterProjects(): TwitterProjects {
      return this.$store.getters[STORE.GETTERS.TWITTER_PROJECTS];
    },
  },

  methods: {
    onSortChanged(sortField: string) {
      this.$store.commit(STORE.MUTATIONS.SET_SORT_FIELD, sortField);
      this.$store.dispatch(STORE.ACTIONS.LOAD_TWITTER_PROJECTS);
    },

    onPageChanged(page: number) {
      this.$store.commit(STORE.MUTATIONS.SET_CURRENT_PAGE, page);
      this.$store.dispatch(STORE.ACTIONS.LOAD_TWITTER_PROJECTS);
    },

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
