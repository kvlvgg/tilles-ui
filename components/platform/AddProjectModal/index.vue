<template>
  <div :class="$style.addProjectModal">
    <h2>List your NFT Collection for free</h2>
    <Spacing :size="SIZE.XXL" />

    <Steps v-model="currentStep" />
    <Spacing :size="SIZE.XXL" />

    <PremiumListingFormStep v-if="currentStep === STEPS.PREMIUM_LISTING_FORM" />
    <ProjectOfficialLinksStep v-if="currentStep === STEPS.PROJECT_OFFICIAL_LINKS" />
    <AdditionalInfoStep v-if="currentStep === STEPS.ADDITIONAL_INFO" />
    <Spacing :size="SIZE.XXL" />

    <div :class="$style.navButtons">
      <Button v-if="currentStep === STEPS.PREMIUM_LISTING_FORM" variant="primary" size="md" @click="$emit('close')">
        <span>Close</span>
      </Button>

      <Button v-if="currentStep !== STEPS.PREMIUM_LISTING_FORM" variant="primary" size="md" @click="backStep">
        <span>Back</span>
      </Button>

      <Button v-if="currentStep !== STEPS.ADDITIONAL_INFO" variant="secondary" size="md" @click="nextStep">
        <span>Next</span>
      </Button>

      <Button v-if="currentStep === STEPS.ADDITIONAL_INFO" variant="secondary" size="md" @click="submit">
        <span>Submit</span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import Button from 'ui/Button/Button.vue';

import Steps from '@/components/platform/AddProjectModal/Steps.vue';
import PremiumListingFormStep from '@/components/platform/AddProjectModal/PremiumListingFormStep.vue';
import ProjectOfficialLinksStep from '@/components/platform/AddProjectModal/ProjectOfficialLinksStep.vue';
import AdditionalInfoStep from '@/components/platform/AddProjectModal/AdditionalInfoStep.vue';

import { SIZE } from 'ui/Spacing/constants';
import { STEPS } from '@/components/platform/AddProjectModal/contants';

export default Vue.extend({
  name: 'AddProjectModal',
  components: { Spacing, Button, Steps, PremiumListingFormStep, ProjectOfficialLinksStep, AdditionalInfoStep },

  data() {
    return {
      SIZE,
      STEPS,
      currentStep: STEPS.PREMIUM_LISTING_FORM,
    };
  },

  methods: {
    backStep() {
      this.currentStep--;
    },

    nextStep() {
      this.currentStep++;
    },

    submit() {
      this.$emit('change', true);
      this.$emit('close');
    },
  },
});
</script>

<style lang="scss" module>
.addProjectModal {
  width: calc(100vw - $main-padding-left-right * 2);
  padding: $gap-xl;
}

.navButtons {
  @include flex(flex-end);
  gap: $gap-sm;

  button {
    width: 150px;
  }
}
</style>
