<template>
  <div>
    <table :class="$style.table">
      <thead>
        <tr>
          <th
            v-for="(field, i) in fields"
            :key="i"
            :class="{ [$style.sortable]: field.sortable }"
            :style="{ width: `${field.width}px` }"
            @click="sort(field)"
          >
            <span :class="$style.content">
              <span>{{ field.header }}</span>
              <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
              <i
                v-if="field.sortable"
                :class="{
                  [$style.iconSort]: true,
                  [$style.descendingOrder]:
                    (field.sortName === sortField || field.name === sortField) && sortDesc === -1,
                }"
              />
            </span>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(entry, i) in value" :key="i">
          <td v-for="(field, j) in fields" :key="j">
            <slot :name="field.name" :data="{ value: entry[field.name], entry }">
              {{ entry[field.name] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <Spacing :size="SIZE.LG" />
      <Paginator v-if="paginator" :pages="total" @page="$emit('page', $event)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';

import Paginator from 'ui/Table/Paginator.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

type TableField = {
  header: string;
  name: string;
  sortable?: boolean;
  sortName?: string;
  width?: number;
};

export default Vue.extend({
  name: 'UniTable',
  components: { Spacing, Paginator },

  props: {
    value: {
      type: Array as PropType<Array<any>>,
      default: () => [],
    },

    fields: {
      type: Array as PropType<Array<TableField>>,
      default: () => [],
    },

    paginator: {
      type: Boolean,
      default: false,
    },

    total: {
      type: Number,
      default: 0,
    },

    sortField: {
      type: String,
      default: null,
    },

    sortDesc: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      ORIENTATION,
      SIZE,
    };
  },

  methods: {
    sort(field: TableField) {
      const sortField = field.sortName ?? field.name;
      const sortOrder = this.sortField === (field.sortName ?? field.name) ? this.sortDesc * -1 : 1;

      this.$emit('update:sortField', sortField);
      this.$emit('update:sortDesc', sortOrder);
      this.$emit('sort', `${sortOrder === -1 ? '-' : ''}${sortField}`);
    },
  },
});
</script>

<style lang="scss" module>
.table {
  width: 100%;
  border-spacing: unset;

  thead th {
    @include fontInterRegular(14);
    font-weight: 400;
    text-align: left;

    &.sortable {
      cursor: pointer;
    }

    .content {
      @include flex(flex-start);

      .iconSort {
        @include icon-sort();

        &.descendingOrder {
          transform: rotateX(180deg);
        }
      }
    }
  }

  tbody tr td {
    @include fontPoppinsMeduim(18);
    padding: $gap-lg 0;
    border-bottom: 2px solid $bg-light;
  }
}
</style>
