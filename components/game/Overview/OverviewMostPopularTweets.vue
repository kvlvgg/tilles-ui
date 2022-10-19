<template>
  <div :class="$style.mostPopularTweets">
    <h3>Most popular tweets by</h3>
    <Spacing :size="SIZE.MD" />

    <div :class="$style.filters">
      <Button
        v-for="(filter, i) in filters"
        :key="i"
        :variant="filter === selectedFilter ? 'primary' : 'outlined'"
        size="sm"
        @click="switchFilter(filter)"
      >
        {{ filter }}
      </Button>
    </div>
    <Spacing :size="SIZE.MD" />

    <div :class="$style.tweets">
      <div v-for="(tweet, i) in tweets" :key="i">
        {{ tweet.value }}
        <Spacing :size="SIZE.XXS" />

        <div :class="$style.tweetPopularity">
          <Img file="tweeter-like.svg" />
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
          <span>{{ tweet.likes }}</span>
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XS" />

          <Img file="tweeter-retweet.svg" />
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
          <span>{{ tweet.comments }}</span>
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XS" />

          <Img file="tweeter-comment.svg" />
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
          <span>{{ tweet.retweets }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import Button from 'ui/Button/Button.vue';
import Img from 'ui/Img/Img.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'GameOverviewMostPopularTweets',
  components: { Spacing, Button, Img },

  data() {
    return {
      ORIENTATION,
      SIZE,

      selectedFilter: 'Likes',
      filters: ['Likes', 'Comments', 'Retweets'],
      tweets: [
        {
          value:
            "It's wild fun looking back at some of the original @moonbirds explorations. This is just a few of them but wow could...",
          likes: 1789,
          comments: 259,
          retweets: 783,
        },
        {
          value:
            'Woke up to @moonbirds below a 14 ETH floor, down from 19.5 a week ago. Many of my friends who are HODLers have sold...',
          likes: 1789,
          comments: 259,
          retweets: 783,
        },
        {
          value:
            "You're kidding yourself if you think the market actually cares about a project granting IP rights or not.  not right now, not...",
          likes: 1789,
          comments: 259,
          retweets: 783,
        },
      ],
    };
  },

  methods: {
    switchFilter(filter: string) {
      this.selectedFilter = filter;
    },
  },
});
</script>

<style lang="scss" module>
.mostPopularTweets {
  background-color: $bg-medium;
  padding: $gap-xl;
  border-radius: $border-radius;

  h3 {
    font-weight: 500;
  }

  .filters {
    display: inline-flex;
    gap: $gap-xxs;

    button {
      padding: 0 $gap-sm;
    }
  }

  .tweets {
    @include fontInterRegular(14);

    display: grid;
    grid-template-columns: 1fr;
    gap: $gap-xs;

    .tweetPopularity {
      @include flex(flex-start);
      color: $text-color-secondary;
    }
  }
}
</style>
