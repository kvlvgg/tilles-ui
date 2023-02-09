<template>
  <div>
    <Header :class="$style.sticky" />

    <main :class="$style.main">
      <Nuxt />
    </main>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Header from '@/components/default-layout/Header.vue';
import Footer from '@/components/default-layout/Footer.vue';

import { STORE as USER_STORE } from '@/store/User/constants';

export default Vue.extend({
  name: 'TillesDeafaultLayout',
  components: { Header, Footer },

  mounted() {
    this.$store.dispatch(USER_STORE.ACTIONS.METAMASK_INIT);
  },
});
</script>

<style lang="scss" module>
.main {
  min-height: calc(100vh - $header-height - $footer-height);
  padding: 40px $main-padding-left-right 30px;

  // плохо выглядит на экранах с большим монитором
  // захардкожу пока что максимальную ширину
  max-width: 1440px;
  margin: auto;
}

.sticky {
  position: sticky;
  top: 0;
}
</style>
