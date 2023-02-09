<template>
  <div :class="$style.filters">
    <div :class="$style.selectFilters">
      <Select v-model="stageFilter" :options="stageOptions" @input="$emit('change-project-table', $event)" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />

      <DropDown
        :optionsClass="$style.biggestGrowthFilterOptions"
        :buttonText="`Biggest growth of ${biggestGrowthOfFilter}`"
      >
        <template #options>
          <RadioButton v-model="biggestGrowthOfFilter" label="Floor price" />
          <RadioButton v-model="biggestGrowthOfFilter" label="Twitter audience" />
          <RadioButton v-model="biggestGrowthOfFilter" label="Influencers" />

          <span :class="$style.premium">
            <RadioButton v-model="biggestGrowthOfFilter" label="Engagements" disable />
            <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
            <Badge value="Premium" />
          </span>

          <span :class="$style.premium">
            <RadioButton v-model="biggestGrowthOfFilter" label="Ethereum" disable />
            <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
            <Badge value="Premium" />
          </span>

          <span :class="$style.premium">
            <RadioButton v-model="biggestGrowthOfFilter" label="Reach" disable />
            <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
            <Badge value="Premium" />
          </span>

          <Button variant="secondary" size="md">Apply</Button>
        </template>
      </DropDown>
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />

      <!-- <Select v-model="donnaWhatFilter" :options="['Filters']" /> -->
      <DropDown :optionsClass="$style.filterInputs" :optionsStyle="{ right: 0 }" buttonText="Filters">
        <template #options>
          <CheckBox v-model="floorPriceEnabled" label="Floor price" />
          <Spacing :size="SIZE.SM" />

          <Slider v-model="floorPrice" range />
          <Spacing :size="SIZE.SM" />

          <div :class="$style.floorPriceInputs">
            <FormGroup label="Min price">
              <Input v-model="floorPrice[0]" placeholder="100 USDT" size="md" />
            </FormGroup>

            <FormGroup label="Max price">
              <Input v-model="floorPrice[1]" placeholder="100 USDT" size="md" />
            </FormGroup>
          </div>
          <Spacing :size="SIZE.XL" />

          <CheckBox v-model="twitterAudienceEnabled" label="Twitter audience " />
          <Spacing :size="SIZE.SM" />

          <Slider v-model="twitterAudience" range />
          <Spacing :size="SIZE.SM" />

          <div :class="$style.floorPriceInputs">
            <FormGroup label="Min price">
              <Input v-model="twitterAudience[0]" placeholder="100 USDT" size="md" />
            </FormGroup>

            <FormGroup label="Max price">
              <Input v-model="twitterAudience[1]" placeholder="100 USDT" size="md" />
            </FormGroup>
          </div>

          <Spacing :size="SIZE.XL" />

          <Button variant="secondary" size="md">Apply</Button>
        </template>
      </DropDown>
    </div>

    <TimeFilter
      v-model="timeFilterValue"
      :times="['1h', '24h', '7d', '30d', 'All time']"
      @input="$emit('change-time-filter', $event)"
    />

    <Button :class="$style.cleanButton" variant="primary" size="md">Clean</Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Select from 'ui/Select/Select.vue';
import Spacing from 'ui/Spacing/Spacing.vue';
import DropDown from 'ui/DropDown/DropDown.vue';
import RadioButton from 'ui/Radio/RadioButton.vue';
import CheckBox from 'ui/CheckBox/CheckBox.vue';
import Slider from 'ui/Slider/Slider.vue';
import FormGroup from 'ui/Form/FormGroup.vue';
import Input from 'ui/Input/Input.vue';
import Badge from 'ui/Badge/Badge.vue';
import Button from 'ui/Button/Button.vue';
import TimeFilter from 'ui/TimeFilter/TimeFilter.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TillesPlatformTrendingProjectsFilters',
  components: { Select, Spacing, DropDown, RadioButton, CheckBox, Slider, FormGroup, Input, Badge, Button, TimeFilter },

  data() {
    return {
      ORIENTATION,
      SIZE,

      stageFilter: 'Released',
      biggestGrowthOfFilter: 'Floor price',
      donnaWhatFilter: 'Filters',

      stageOptions: ['Released', 'Upcoming'],
      donnaWhat: ['Filters'],

      floorPriceEnabled: false,
      floorPrice: [0, 100],

      twitterAudienceEnabled: false,
      twitterAudience: [20, 100],

      timeFilterValue: '7d',
    };
  },
});
</script>

<style lang="scss" module>
.filters {
  @include flex(space-between);
  gap: $gap-xl;

  .selectFilters {
    @include flex();

    .biggestGrowthFilterOptions {
      display: grid;
      grid-template-columns: 1fr;
      gap: $gap-xl;

      .premium {
        @include flex(flex-start);
      }
    }

    .filterInputs {
      width: 384px;

      .floorPriceInputs {
        @include flex();
        gap: $gap-xs;
      }
    }
  }

  .cleanButton {
    width: 140px;
  }
}
</style>
