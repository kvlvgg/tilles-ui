<template>
  <div ref="dropdown" :class="$style.dropdown">
    <slot>
      <Button :class="$style.togglerButton" :variant="toggled ? 'primary' : 'outlined'" size="md" @click="toggle">
        <span>{{ buttonText }}</span>
        <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
        <i :class="$style.arrow" />
      </Button>
    </slot>

    <div
      v-if="toggled"
      :style="[defaultOptionsStyle, optionsStyle]"
      :class="[$style.toggable, optionsClass]"
      @click="$emit('hide')"
    >
      <slot name="options" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import Button from 'ui/Button/Button.vue';
import Spacing from 'ui/Spacing/Spacing.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'TilliesDropDown',
  components: { Button, Spacing },
  props: {
    buttonText: {
      type: String,
      default: null,
    },
    optionsStyle: {
      type: Object as PropType<Record<string, string>>,
      default: null,
    },

    optionsClass: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      ORIENTATION,
      SIZE,
      toggled: false,
      dropDownHeight: 0,
    };
  },

  computed: {
    defaultOptionsStyle(): Record<string, string> {
      return {
        top: `calc(${this.dropDownHeight}px + ${this.$style['gap-xxxs']}`,
      };
    },
  },

  mounted() {
    const dropDown = this.$refs.dropdown as HTMLDivElement;
    if (!dropDown) return;

    const { height } = dropDown.getBoundingClientRect();
    this.dropDownHeight = height;
  },

  methods: {
    toggle() {
      if (this.toggled) this.close();
      else this.open();
    },

    open() {
      this.toggled = true;
      this.addDocumentEventListner();
    },

    close() {
      this.toggled = false;
      this.removeDocumentEventListener();
    },

    addDocumentEventListner() {
      document.addEventListener('click', this.clickOutside);
    },

    removeDocumentEventListener() {
      document.removeEventListener('click', this.clickOutside);
    },

    clickOutside(e: MouseEvent) {
      const dropdown = this.$refs.dropdown as HTMLDivElement;
      const el = e.target as HTMLElement;

      if (dropdown.contains(el)) return;
      this.close();
    },
  },
});
</script>

<style lang="scss" module>
.dropdown {
  position: relative;

  .togglerButton {
    @include fontInterRegular(14);
    @include flex();
    border-color: $bg-medium;
    font-weight: normal;
    white-space: nowrap;
    padding: $input-padding-md;

    &[variant='primary'] {
      background-color: $bg-medium;
      border-color: $bg-medium;
    }

    .arrow {
      @include icon-select-arrow();
    }
  }

  .toggable {
    position: absolute;
    padding: $gap-sm;
    background-color: $bg-medium;
    border-radius: $border-radius;
    width: max-content;
  }
}

:export {
  gap: {
    xxxs: $gap-xxxs;
  }
}
</style>
