<template>
  <div>
    <FormGroup label="PROJECT NAME">
      <Input v-model="form.ProjectName" size="md" placeholder="Ex: Doodles" />
    </FormGroup>
    <Spacing :size="SIZE.XXL" />

    <FormGroup :contentClass="$style.blockchain" label="BLOCKCHAIN" :gap="SIZE.MD">
      <RadioButton v-model="form.BlockChain" label="Ethereum" />
      <RadioButton v-model="form.BlockChain" label="BSC" />
      <RadioButton v-model="form.BlockChain" label="Avax" />
      <RadioButton v-model="form.BlockChain" label="Elrond" />

      <RadioButton v-model="form.BlockChain" label="Polygon" />
      <RadioButton v-model="form.BlockChain" label="Flow" />
      <RadioButton v-model="form.BlockChain" label="Wax" />
      <RadioButton v-model="form.BlockChain" label="Immutable X" />

      <RadioButton v-model="form.BlockChain" label="Solana" />
      <RadioButton v-model="form.BlockChain" label="Cardano" />
      <RadioButton v-model="form.BlockChain" label="Harmony" />
      <RadioButton v-model="form.BlockChain" label="Other" />
    </FormGroup>
    <Spacing :size="SIZE.XXL" />

    <div :class="$style.commonInfo">
      <FormGroup label="COLLECTION COUNT">
        <Input v-model="form.CollectionCount" v-maska="'#*.#*'" size="md" placeholder="Ex: 10 000" />
      </FormGroup>

      <FormGroup label="TRAITS COUNT">
        <Input v-model="form.TraitsCount" v-maska="'#*.#*'" size="md" placeholder="Ex: 150" />
      </FormGroup>

      <FormGroup label="PRE-SALE PRICE">
        <Input v-model="form.PreSalePrice" v-maska="'#*.#*'" size="md" placeholder="Ex: 0.03" />
      </FormGroup>

      <FormGroup label="PUBLIC SALE PRICE">
        <Input v-model="form.PublicSalePrice" v-maska="'#*.#*'" size="md" placeholder="Ex: 0.05" />
      </FormGroup>

      <FormGroup label="PRE-SALE DATE">
        <Input v-model="form.PreSaleDate" v-maska="'## / ## / ####'" size="md" placeholder="__ / __  / ____" />
      </FormGroup>

      <FormGroup label="PUBLIC SALE DATE">
        <Input v-model="form.PublicSaleDate" v-maska="'## / ## / ####'" size="md" placeholder="__ / __  / ____" />
      </FormGroup>

      <FormGroup :class="$style.description" label="PROJECT DESCRIPTION">
        <TextArea />
      </FormGroup>
    </div>
    <Spacing :size="SIZE.XXL" />

    <FormGroup :contentClass="$style.tags" label="TAGS" :gap="SIZE.MD">
      <CheckBox v-model="form.Tags['2D']" label="2D" />
      <CheckBox v-model="form.Tags.Collectible" label="Collectible" />
      <CheckBox v-model="form.Tags['Digital art']" label="Digital art" />
      <CheckBox v-model="form.Tags.Utility" label="Utility" />
      <CheckBox v-model="form.Tags.Metaverse" label="Metaverse" />
      <CheckBox v-model="form.Tags['Real estate']" label="Real estate" />

      <CheckBox v-model="form.Tags.Gamefi" label="Gamefi" />
      <CheckBox v-model="form.Tags['3D']" label="3D" />
      <CheckBox v-model="form.Tags.Generative" label="Generative" />
      <CheckBox v-model="form.Tags.Gaming" label="Gaming" />
      <CheckBox v-model="form.Tags.Rewards" label="Rewards" />
      <CheckBox v-model="form.Tags.Defi" label="Defi" />

      <CheckBox v-model="form.Tags.Sport" label="Sport" />
      <CheckBox v-model="form.Tags.Membership" label="Membership" />
      <CheckBox v-model="form.Tags['Pixel art']" label="Pixel art" />
      <CheckBox v-model="form.Tags.Photography" label="Photography" />
      <CheckBox v-model="form.Tags['Play to earn']" label="Play to earn" />
      <CheckBox v-model="form.Tags.Collab" label="Collab" />

      <CheckBox v-model="form.Tags.DAO" label="DAO" />
      <CheckBox v-model="form.Tags.Music" label="Music" />
      <CheckBox v-model="form.Tags.Other" label="Other" />
    </FormGroup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import FormGroup from 'ui/Form/FormGroup.vue';
import Input from 'ui/Input/Input.vue';
import RadioButton from 'ui/Radio/RadioButton.vue';
import TextArea from 'ui/TextArea/TextArea.vue';
import CheckBox from 'ui/CheckBox/CheckBox.vue';

import { SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'AddProjectModalPremiumListingFormStep',
  components: { Spacing, FormGroup, Input, RadioButton, TextArea, CheckBox },

  data() {
    return {
      SIZE,
      form: {
        ProjectName: null,
        BlockChain: null,
        CollectionCount: null,
        TraitsCount: null,
        PreSalePrice: null,
        PublicSalePrice: null,
        PreSaleDate: null,
        PublicSaleDate: null,

        Tags: {
          '2D': false,
          Collectible: false,
          'Digital art': false,
          Utility: false,
          Metaverse: false,
          'Real estate': false,

          Gamefi: false,
          '3D': false,
          Generative: false,
          Gaming: false,
          Rewards: false,
          Defi: false,

          Sport: false,
          Membership: false,
          'Pixel art': false,
          Photography: false,
          'Play to earn': false,
          Collab: false,

          DAO: false,
          Music: false,
          Other: false,
        },
      },
    };
  },
});
</script>

<style lang="scss" module>
.tags {
  display: inline-grid;
  grid-template-rows: repeat(6, 1fr);
  grid-auto-flow: column;
  gap: $gap-md $gap-checkboxes-radiobuttons-grid;
}

.commonInfo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $gap-xxl;

  .description {
    grid-column: 1 / -1;
  }
}

.blockchain {
  display: inline-grid;
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
  gap: $gap-md $gap-checkboxes-radiobuttons-grid;
}
</style>
