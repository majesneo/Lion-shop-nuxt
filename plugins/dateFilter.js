import Vue from 'vue'

const dateFilter = (value) => {
  return new Date(value).toLocaleString()
}

Vue.filter('date', dateFilter)
