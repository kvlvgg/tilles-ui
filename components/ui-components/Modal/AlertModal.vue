<template>
  <div :class="$style.alertModal">
    <slot />

    <div :class="$style.closeButton">
      <Button variant="secondary" size="md" @click="$emit('close')"> Close </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Button from 'ui/Button/Button.vue';

export default Vue.extend({
  name: 'TilliesAlertModal',
  components: { Button },
});
</script>

<style lang="scss" module>
.alertModal {
  padding: $gap-xxxl;
}

.closeButton {
  width: 140px;
  margin: 0 auto;
}
</style>
