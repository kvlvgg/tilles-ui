<template>
  <div :class="$style.paginator">
    <button :class="$style.backLink" @click="switchPage(currentPage - 1)">
      <i :class="$style.iconArrow"></i>
    </button>

    <button
      v-for="(pageLink, i) in pageLinks"
      :key="i"
      :class="{ [$style.current]: pageLink === currentPage }"
      @click="switchPage(pageLink)"
    >
      <span v-if="pageLink === pages && isGap.end">...</span>
      <Spacing v-if="pageLink === pages && isGap.end" :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />

      {{ pageLink }}

      <Spacing v-if="pageLink === 1 && isGap.start" :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
      <span v-if="pageLink === 1 && isGap.start">...</span>
    </button>

    <button :class="$style.nextLink" @click="switchPage(currentPage + 1)">
      <i :class="$style.iconArrow"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'UniTablePaginator',
  components: { Spacing },

  props: {
    pages: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      ORIENTATION,
      SIZE,

      currentPage: 1,
    };
  },

  computed: {
    pageLinks(): number[] {
      if (this.pages === 1) return [1];
      const firstLink = 1;
      const lastLink = this.pages;

      const surroundLinks = [-3, -2, -1, 0, 1, 2, 3]
        .map(x => this.currentPage + x)
        .filter(x => x > 1 && x < this.pages);

      return [firstLink, ...surroundLinks, lastLink];
    },

    isGap(): { start: boolean; end: boolean } {
      const [first, second] = this.pageLinks;
      const last = this.pageLinks[this.pageLinks.length - 1];
      const lastButOne = this.pageLinks[this.pageLinks.length - 2];

      return {
        start: second - first > 1,
        end: last - lastButOne > 1,
      };
    },
  },

  methods: {
    switchPage(page: number) {
      if (!this.pageLinks.includes(page)) return;
      this.currentPage = page;
      this.$emit('page', this.currentPage);
    },
  },
});
</script>

<style lang="scss" module>
.paginator {
  @include flex();
  gap: $gap-xxxs;

  button {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: transparent;
    color: $text-color-secondary;

    &.current {
      background-color: $white;
      color: $bg;
    }

    &:has(span) {
      width: 50px;
    }
  }

  .backLink,
  .nextLink {
    @include flex();

    .iconArrow {
      @include icon-select-arrow();
    }
  }

  .backLink {
    transform: rotate(90deg);
  }

  .nextLink {
    transform: rotate(270deg);
  }
}
</style>
