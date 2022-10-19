<template>
  <div>
    <ul :class="$style.tabList">
      <li
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ [$style.visible]: tab.visible, [$style.disable]: tab.disable }"
        @click="switchTab(tab)"
      >
        <slot :name="`${tab.name}-title`">
          <span v-text="tab.title" />
          <!-- Тупо, но не придумал, как пробросить слот ребенка родителю, так бы получилось лучше -->
          <!-- Для нужд проекта сгодится и так, чтобы не терять время -->
          <span v-if="tab.isUpcoming">Soon!</span>
        </slot>
      </li>
    </ul>

    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Tab from 'ui/Tabs/Tab.vue';

export default Vue.extend({
  name: 'UniTabs',

  data() {
    return {
      // дочерние элементы никак не хотят типизироваться в этом синтаксисе. Никак не могу понять, почему.
      // tabs: [] as typeof Tab[],
      tabs: [] as any[],
    };
  },

  mounted() {
    this.tabs = this.$children as unknown as typeof Tab[];
    this.tabs = this.tabs.filter(x => x.isTab);

    if (this.tabs.some(x => x.active === true)) return;

    if (this.tabs[0]) this.tabs[0].visible = true;
  },

  methods: {
    // TODO: Разобраться с типизацией компонентов
    switchTab(tab: any /* Tab */) {
      if (!tab || tab.disable) return;

      this.tabs.forEach(x => (x.visible = false));
      tab.visible = true;
    },
  },
});
</script>

<style lang="scss" module>
.tabList {
  @include flex(flex-start);

  li {
    @include fontInterMedium(16);
    @include flex();
    position: relative;
    list-style-type: none;
    padding: $gap-sm $gap-lg;
    white-space: nowrap;
    cursor: pointer;

    &.visible::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4px;
      background-color: $tab-active-border-color;
    }

    &.disable {
      color: $text-color-secondary;
    }
  }
}
</style>
