<script lang="ts">
import Vue from 'vue';

import { Line } from 'vue-chartjs';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement);

export default Vue.extend({
  extends: Line,
  props: {
    chartData: {
      type: Object,
      default: null,
    },

    chartOptions: {
      type: Object,
      default: null,
    },

    plugins: {
      type: Array,
      default: () => [],
    },

    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
  },
});
</script>

<style lang="scss" module></style>
