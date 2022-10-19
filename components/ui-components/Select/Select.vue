<template>
  <div ref="select" :class="{ [$style.select]: true, [$style.toggled]: optionsVisible }">
    <Input
      v-bind="$attrs"
      :value="getLabel(value)"
      :class="$style.input"
      :readonly="!inputable"
      size="md"
      @input="$emit('input', $event)"
    />

    <!-- <div :class="$style.arrowContainer" @click.stop="toggle"> -->
    <div :class="$style.arrowContainer" @click.stop="toggle">
      <i :class="$style.arrow" />
    </div>

    <div v-if="optionsVisible" :class="$style.options" :style="optionsStyle">
      <div v-for="(option, index) in options" :key="index" :class="$style.option" @click="optionSelected(option)">
        {{ getLabel(option) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { Option, LabelKey } from './Option';
import Input from 'ui/Input/Input.vue';

export default Vue.extend({
  name: 'UniSelect',
  components: { Input },

  props: {
    value: {
      type: [Object, String] as PropType<Option>,
      default: null,
    },

    labelKey: {
      type: String as PropType<LabelKey>,
      default: null,
    },

    options: {
      type: Array as PropType<Array<Option>>,
      default: () => [],
    },

    inputable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      optionsVisible: false,
      optionsStyle: {
        top: '0',
        left: '0',
      },
    };
  },

  methods: {
    toggle() {
      if (this.optionsVisible) this.close();
      else this.open();
    },

    open() {
      const select = this.$refs.select as HTMLDivElement;
      const height = select.getBoundingClientRect().height;

      this.optionsStyle.top = `${height + 4}px`;
      this.optionsVisible = true;

      this.addDocumentEventListner();
    },

    close() {
      this.optionsVisible = false;
      this.removeDocumentEventListener();
    },

    optionSelected(value: Option) {
      this.$emit('input', value);
      this.close();
    },

    addDocumentEventListner() {
      document.addEventListener('click', this.clickOutside);
    },

    removeDocumentEventListener() {
      document.removeEventListener('click', this.clickOutside);
    },

    clickOutside(e: MouseEvent) {
      const select = this.$refs.select as HTMLDivElement;
      const el = e.target as HTMLElement;

      if (select.contains(el)) return;
      this.close();
    },

    getLabel(option: Option) {
      return typeof option === 'string' ? option : option.label;
    },
  },
});
</script>

<style lang="scss" module>
.select {
  .input {
    @include fontInterMedium($input-font-size-sm);
    background-color: transparent;
    height: calc($input-height-md - 4px);
  }

  @include flex();

  position: relative;
  border: 2px solid $bg-medium;
  border-radius: $input-radius;

  .arrowContainer {
    position: absolute;
    border-radius: $input-radius;
    right: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 24px 0 12px;
    cursor: pointer;
  }

  .arrow {
    @include icon-select-arrow();
  }

  .options {
    width: 100%;
    position: absolute;
    border-radius: $input-radius;
    overflow: hidden;
    user-select: none;

    .option {
      @include fontInterMedium($input-font-size-sm);
      @include flex(flex-start);
      background-color: $bg-medium;
      height: $input-height-md;
      padding: $input-padding-md;
      cursor: pointer;

      &:hover {
        background-color: $dropdown-option-hover;
      }
    }
  }

  &.toggled {
    background-color: $bg-medium;

    .arrowContainer {
      background-color: $bg-medium;
    }
  }
}
</style>
