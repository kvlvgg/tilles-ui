<template>
  <div>
    <FormGroup label="PROJECT NAME">
      <Input v-model="form.ProjectName" size="md" placeholder="email@example.com" />
      <Spacing :size="SIZE.XXS" />
      <span :class="$style.tip">We will use this email address to notify you about your event submission status.</span>
    </FormGroup>
    <Spacing :size="SIZE.XXL" />

    <FormGroup :contentClass="$style.radioButtonsGrid" label="WOULD YOU LIKE TO FEATURE YOUR LISTING">
      <RadioButton v-model="form.featureListing" label="Yes" />
      <RadioButton v-model="form.featureListing" label="No" />
    </FormGroup>
    <Spacing :size="SIZE.XXL" />

    <FormGroup :contentClass="$style.radioButtonsGrid" label="WOULD YOU LIKE TO FEATURE YOUR LISTING">
      <RadioButton v-model="form.bestWayToReachYou" label="Email" />
      <RadioButton v-model="form.bestWayToReachYou" label="Twitter" />
      <RadioButton v-model="form.bestWayToReachYou" label="Discord" />
      <RadioButton v-model="form.bestWayToReachYou" label="Other" />
    </FormGroup>
    <Spacing :size="SIZE.XXL" />

    <FormGroup label="DO YOU HAVE ANY SPECIFIC REQUEST?">
      <Input v-model="form.ProjectName" size="md" placeholder="email@example.com" />
      <Spacing :size="SIZE.XXS" />
      <span :class="$style.tip">Type your question or request, we’ll get back to you asap</span>
    </FormGroup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import FormGroup from 'ui/Form/FormGroup.vue';
import Input from 'ui/Input/Input.vue';
import RadioButton from 'ui/Radio/RadioButton.vue';

import { SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'AddProjectModalAdditionalInfoStep',
  components: { Spacing, FormGroup, Input, RadioButton },

  data() {
    return {
      SIZE,
      form: {
        ProjectName: null,
        featureListing: null,
        bestWayToReachYou: null,
      },
    };
  },
});
</script>

<style lang="scss" module>
.tip {
  @include fontInterRegular(14);
}

.radioButtonsGrid {
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $gap-md $gap-checkboxes-radiobuttons-grid;
}
</style>
