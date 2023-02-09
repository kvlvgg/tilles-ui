<template>
  <div :class="$style.mentionsTweets">
    <div :class="$style.users">
      <div :class="$style.allMentions">
        <div>All Mentions</div>
        <div :class="$style.mentions">278 Mentions</div>
      </div>

      <div v-for="(user, i) in users" :key="i" :class="$style.user">
        <Img file="twitter-avatar.png" />

        <div :class="$style.info">
          <div>{{ user.title }}</div>
          <div>{{ user.name }}</div>
          <div :class="$style.followers">{{ user.followers }}</div>
        </div>

        <div :class="$style.mentions">194</div>
      </div>
    </div>

    <div :class="$style.tweets">
      <div v-for="(_, i) in 10" :key="i" :class="$style.tweet">
        <div :class="$style.author">
          <Img file="tweeter-mentions-avatar.png" />
          <div>
            <div>@doodles</div>
            <div :class="$style.date">09/30/2021</div>
          </div>
        </div>

        <Spacing :size="SIZE.XXS" />

        <div>
          A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of
          colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for
          experiences and activations paid for by the Doodles Community Treasury. A com
        </div>

        <Spacing :size="SIZE.XXS" />

        <div :class="$style.tweetPopularity">
          <Img file="tweeter-like.svg" />
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
          <span>1789</span>
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XS" />

          <Img file="tweeter-retweet.svg" />
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
          <span>259</span>
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XS" />

          <Img file="tweeter-comment.svg" />
          <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
          <span>783</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Img from 'ui/Img/Img.vue';
import Spacing from 'ui/Spacing/Spacing.vue';

import { SIZE, ORIENTATION } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'GameMentionsTweets',
  components: { Img, Spacing },

  data() {
    return {
      SIZE,
      ORIENTATION,
      users: [
        { title: 'Zygfríd.sol {313}《TY...', name: '@misharik_', followers: '198k followers', mentions: [] },
        { title: 'Zygfríd.sol {313}《TY...', name: '@misharik_', followers: '198k followers', mentions: [] },
        { title: 'Zygfríd.sol {313}《TY...', name: '@misharik_', followers: '198k followers', mentions: [] },
        { title: 'Zygfríd.sol {313}《TY...', name: '@misharik_', followers: '198k followers', mentions: [] },
        { title: 'Zygfríd.sol {313}《TY...', name: '@misharik_', followers: '198k followers', mentions: [] },
        { title: 'Zygfríd.sol {313}《TY...', name: '@misharik_', followers: '198k followers', mentions: [] },
      ],
    };
  },
});
</script>

<style lang="scss" module>
.mentionsTweets {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: $gap-lg;

  .users {
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr;
    gap: $gap-xxs;

    .allMentions {
      @include flex(space-between);
      padding: $gap-xl $gap-lg;
      background-color: $bg-light;
      border-radius: $border-radius;

      .mentions {
        padding: $gap-xxxs $gap-xs;
        background-color: $blue;
        border-radius: $border-radius;
      }
    }

    .user {
      @include fontInterRegular(14);
      padding: $gap-md $gap-lg;
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: $gap-xxs;
      align-items: center;
      border: 1px solid $bg-light;
      border-radius: $border-radius;

      .info {
        min-width: 220px;

        .followers {
          color: $text-color-secondary;
        }
      }

      .mentions {
        padding: $gap-xxxs $gap-xs;
        background-color: $blue;
        border-radius: $border-radius;
      }
    }
  }

  .tweets {
    padding: $gap-xl;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $gap-md;
    background-color: $bg-medium;
    border-radius: $border-radius;

    .tweet {
      padding: $gap-md;
      border: 1px solid $bg-light;
      border-radius: $border-radius;

      .author {
        display: inline-grid;
        grid-template-columns: repeat(2, auto);
        gap: $gap-xxs;

        .date {
          color: $text-color-secondary;
        }
      }

      .tweetPopularity {
        @include flex(flex-start);
        color: $text-color-secondary;
      }
    }
  }
}
</style>
