<template>
  <div :class="$style.steps">
    <div
      v-for="(step, i) in steps"
      :key="i"
      :class="{ [$style.step]: true, [$style.selected]: value === step.id }"
      @click="$emit('input', step.id)"
    >
      {{ step.label }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { STEPS } from '@/components/platform/AddProjectModal/contants';

export default Vue.extend({
  name: 'AddProjectSteps',
  props: {
    value: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      steps: [
        { id: STEPS.PREMIUM_LISTING_FORM, label: 'Step 1. Premium listing form' },
        { id: STEPS.PROJECT_OFFICIAL_LINKS, label: 'Step 2. Project official links' },
        { id: STEPS.ADDITIONAL_INFO, label: 'Step 3. Additional info' },
      ],
    };
  },
});
</script>

<style lang="scss" module>
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid $black;
  border-radius: $border-radius;

  .step {
    @include flex();
    padding: $gap-sm;
    border-radius: $border-radius;
    cursor: pointer;

    &.selected {
      background-color: $bg;
    }
  }
}
</style>
