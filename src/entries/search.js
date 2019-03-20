import Vue from 'vue'
import Vuex from 'vuex'

import Components from '../components/mo_search';

import { storeObj } from '../stores/managerStore'
import { autoLogoutUser } from '../util/auto-logout-user'

import CommonComps from '../plugins/components.bundle'

// Stylesheet
import '../styles/main.scss'

// Global Components Search Root
Components.forEach((component) => {
  Vue.component(component.name, component)
})

// Plugins
Vue.use(Vuex)
Vue.use(CommonComps)

const store = new Vuex.Store(storeObj)

// Start
const rootDetail = new Vue({
  el: '#vue-container',
  store,
  mounted() {
    autoLogoutUser(store)
  }
})

