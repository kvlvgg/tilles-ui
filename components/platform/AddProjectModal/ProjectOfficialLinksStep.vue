<template>
  <div :class="$style.officialLinks">
    <FormGroup label="TWITTER LINK">
      <Input v-model="form.TwitterLink" size="md" placeholder="https://twitter.com/username" />
    </FormGroup>

    <FormGroup label="DISCORD LINK">
      <Input v-model="form.DiscordLink" size="md" placeholder="https://discord.gg/username" />
    </FormGroup>

    <FormGroup label="WEBSITE LINK">
      <Input v-model="form.WebSiteLink" size="md" placeholder="https://yoursite.com" />
    </FormGroup>

    <FormGroup label="MARKETPLACE LINK">
      <Input v-model="form.MarketPlaceLink" size="md" placeholder="Opensea or Rarible Link" />
    </FormGroup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import FormGroup from 'ui/Form/FormGroup.vue';
import Input from 'ui/Input/Input.vue';

export default Vue.extend({
  name: 'AddProjectModalProjectOfficialLinksStep',
  components: { FormGroup, Input },

  data() {
    return {
      form: {
        TwitterLink: null,
        DiscordLink: null,
        WebSiteLink: null,
        MarketPlaceLink: null,
      },
    };
  },
});
</script>

<style lang="scss" module>
.officialLinks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $gap-xxl;
}
</style>
