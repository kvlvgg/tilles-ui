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
      {{ pageLink + 1 }}
    </button>

    <button :class="$style.nextLink" @click="switchPage(currentPage + 1)">
      <i :class="$style.iconArrow"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UniTablePaginator',
  props: {
    pages: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      currentPage: 1,
    };
  },

  computed: {
    pageLinks(): number[] {
      return new Array(this.pages).fill(0).map((_, i) => i);
    },
  },

  mounted() {
    this.switchPage(0);
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
