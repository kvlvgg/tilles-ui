import Vue from 'vue';

import thousandSeparator from '@/filters/thousandSeparator';
import measure from '@/filters/measure';
import change from '@/filters/change';

Vue.filter('thousandSeparator', thousandSeparator);
Vue.filter('measure', measure);
Vue.filter('change', change);
