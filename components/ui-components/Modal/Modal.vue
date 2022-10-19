<template>
  <div ref="blurBackground" tabindex="-1" :class="$style.blurBackground" :style="modalStyle" @keydown.esc="close">
    <div :class="modalClasses">
      <i :class="$style.crossIcon" @click="close" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TillesModal',
  props: {
    zIndex: {
      type: [String, Number],
      default: 1000,
    },
  },

  data() {
    return {
      isMounted: false,
    };
  },

  computed: {
    modalStyle(): Record<string, string> {
      return {
        zIndex: this.zIndex.toString(),
      };
    },

    modalClasses(): Record<string, boolean> {
      return {
        [this.$style.modal]: true,
        [this.$style.fade]: this.isMounted,
      };
    },
  },

  mounted() {
    const blurBackgroundEl = this.$refs.blurBackground as HTMLDivElement;
    blurBackgroundEl.focus();

    window.setTimeout(() => (this.isMounted = true));
    this.$children.forEach(x => {
      x.$on('close', this.close);
      x.$on('change', (e: any) => this.$emit('change', e));
    });
  },

  methods: {
    close() {
      this.isMounted = false;
      this.$emit('close');
    },
  },
});
</script>

<style lang="scss" module>
.blurBackground {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);

  .modal {
    position: relative;
    opacity: 0;
    width: max-content;
    margin: 0 auto;
    background-color: $bg-medium;
    border-radius: $border-radius;
    transition: opacity 0.3s ease-out, margin 0.5s 0s;

    &.fade {
      opacity: 1;
      margin: $header-height auto;
    }

    .crossIcon {
      @include icon-cross();
      position: absolute;
      top: $gap-xxl;
      right: $gap-xl;
      cursor: pointer;
    }
  }
}
</style>
