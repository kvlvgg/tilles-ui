import Vue from 'vue';

import change from '@/filters/change';
import compact from '@/filters/compact';
import date from '@/filters/date';
import measure from '@/filters/measure';
import thousandSeparator from '@/filters/thousandSeparator';

Vue.filter('change', change);
Vue.filter('compact', compact);
Vue.filter('date', date);
Vue.filter('measure', measure);
Vue.filter('thousandSeparator', thousandSeparator);
