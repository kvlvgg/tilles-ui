<template>
  <InputGroup v-model="projectName" :class="$style.searchProjectInput" placeholder="Search collection by name">
    <template #left>
      <div>
        <i :class="$style.lookupIcon" />
      </div>
    </template>

    <template #right>
      <Button :class="$style.addButton" size="md" variant="primary" @click="showAddProjectModal">
        + Add project
      </Button>
    </template>
  </InputGroup>
</template>

<script lang="ts">
import Vue from 'vue';

import InputGroup from 'ui/Input/InputGroup.vue';
import Button from 'ui/Button/Button.vue';

import AddProjectModal from '@/components/platform/AddProjectModal/index.vue';
import SuccessModal from '@/components/platform/SuccessModal/index.vue';

export default Vue.extend({
  name: 'TillesPlatformTrendingProjectsSearch',
  components: { InputGroup, Button },

  data() {
    return {
      AddProjectModal,
      projectName: null,
    };
  },

  methods: {
    async showAddProjectModal() {
      const success = await this.$modal.show<boolean>(AddProjectModal);
      if (!success) return;

      this.$modal.show(SuccessModal);
    },
  },
});
</script>

<style lang="scss" module>
.searchProjectInput {
  padding: 12px 12px 12px 24px;

  .lookupIcon {
    @include icon-lookup($text-color-secondary);
  }

  .addButton {
    width: 260px;
    margin-left: $gap-xs;
  }
}
</style>
