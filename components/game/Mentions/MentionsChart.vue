<template>
  <div :class="$style.chart">
    <div :class="$style.filters">
      <CheckBox v-model="Mentions" label="Mentions" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXL" />

      <CheckBox v-model="Engagements" label="Engagements" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXL" />

      <CheckBox v-model="FloorPrice" label="Floor price" disable />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
      <Badge :class="$style.premiumBadge" value="premium" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXL" />

      <CheckBox v-model="Visits" label="Visits" disable />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
      <i :class="$style.iconInfo" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
      <Badge :class="$style.premiumBadge" value="premium" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXL" />

      <CheckBox v-model="Likes" label="Likes" disable />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
      <i :class="$style.iconInfo" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
      <Badge :class="$style.premiumBadge" value="premium" />
    </div>
    <Spacing :size="SIZE.XL" />

    <LineChart
      :chartData="chartConfig.chartData"
      :chartOptions="chartConfig.chartOptions"
      :plugins="chartConfig.chartPlugins"
    />
    <Spacing :size="SIZE.XS" />

    <hr :color="$style['color-bg-light']" />
    <Spacing :size="SIZE.LG" />

    <div :class="$style.total">
      <span>2/12/2022, 3 AM</span>
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXL" />

      <span :class="[$style.point, $style.mentions]" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
      <span>Mentions {{ `${total.mentions.value}B` }}</span>
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
      <span :class="getChangeStyle(total.mentions.change)">{{ total.mentions.change | change }}</span>
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXL" />

      <span :class="[$style.point, $style.engagements]" />
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXS" />
      <span>Engagements {{ `${total.engagements.value}B` }}</span>
      <Spacing :orientation="ORIENTATION.HORIZONTAL" :size="SIZE.XXXS" />
      <span :class="getChangeStyle(total.engagements.change)">{{ total.engagements.change | change }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Spacing from 'ui/Spacing/Spacing.vue';
import CheckBox from 'ui/CheckBox/CheckBox.vue';
import Badge from 'ui/Badge/Badge.vue';
import LineChart from 'ui/Chart/LineChart.vue';

import { ORIENTATION, SIZE } from 'ui/Spacing/constants';

export default Vue.extend({
  name: 'GameMentionsChart',
  components: { Spacing, CheckBox, Badge, LineChart },

  data() {
    return {
      ORIENTATION,
      SIZE,

      mentionsData: [72, 324, 120, 592.8, 301, 190, 240],
      engagementsData: [400, 230, 415, 601.39, 198, 244, 156],

      total: {
        mentions: { value: 4.33, change: 20.01 },
        engagements: { value: 4.33, change: 20.01 },
      },

      Mentions: true,
      Engagements: true,
      FloorPrice: false,
      Visits: false,
      Likes: false,
    };
  },

  computed: {
    charts(): { name: string; display: boolean; data: Array<number>; color: string }[] {
      return [
        {
          name: 'Mentions',
          display: this.Mentions,
          data: this.mentionsData,
          color: this.$style['color-purple'],
        },
        {
          name: 'Engagements',
          display: this.Engagements,
          data: this.engagementsData,
          color: this.$style['color-menthol'],
        },
      ].filter(chart => chart.display);
    },

    chartConfig(): { chartData: Object; chartOptions: Object; chartPlugins: Object } {
      return {
        chartData: {
          labels: ['2/12/2022', '3/12/2022', '4/12/2022', '5/12/2022', '6/12/2022', '7/12/2022', '8/12/2022'],
          datasets: this.charts.map(chart => ({
            label: chart.name,
            backgroundColor: chart.color,
            borderColor: chart.color,
            data: chart.data,
            cubicInterpolationMode: 'monotone',
            yAxisID: `${chart.name}YAxis`,
          })),
        },

        chartOptions: {
          aspectRatio: 4.5,
          elements: {
            point: {
              radius: 1,
              hoverRadius: 6,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },

            ...this.charts.reduce((acc, chart) => {
              acc[`${chart.name}YAxis`] = {
                position: 'right',
                bounds: 'data',
                grid: {
                  display: false,
                  drawBorder: false,
                  tickLength: Object.keys(acc).length === 0 ? 24 : null,
                },
                ticks: {
                  count: 4,
                  padding: 6,
                  color: chart.color,
                  font: {
                    family: 'Inter-Regular',
                    size: 14,
                  },
                  callback: (value: number) => {
                    return value.toFixed(2) + 'm';
                  },
                },
              };

              return acc;
            }, {} as any),
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },

        chartPlugins: [
          {
            afterDraw: (chart: any) => {
              if (chart.tooltip?._active?.length) {
                const x = chart.tooltip._active[0].element.x;
                const yAxis = chart.scales.y;
                const ctx = chart.ctx;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, yAxis.top);
                ctx.lineTo(x, yAxis.bottom);
                ctx.setLineDash([1, 1]);
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#87868D';
                ctx.stroke();
                ctx.restore();
              }
            },
          },
        ],
      };
    },
  },

  methods: {
    getChangeStyle(value: number) {
      return {
        [this.$style.change]: true,
        [this.$style.positive]: value > 0,
        [this.$style.negative]: value < 0,
      };
    },
  },
});
</script>

<style lang="scss" module>
.chart {
  padding: $gap-xl $gap-xl $gap-lg;
  background-color: $bg-medium;
  border-radius: $border-radius;

  .filters {
    @include flex(flex-start);

    .iconInfo {
      @include icon-info($text-color-secondary);
    }
  }

  .total {
    @include flex();

    .point {
      height: 12px;
      width: 12px;
      border-radius: $border-radius;

      &.mentions {
        background-color: $purple;
      }

      &.engagements {
        background-color: $menthol;
      }
    }

    .change {
      &.positive {
        color: $green;
      }

      &.negative {
        color: $red;
      }
    }
  }
}

:export {
  color: {
    bg-light: $bg-light;
    menthol: $menthol;
    purple: $purple;
  }
}
</style>
