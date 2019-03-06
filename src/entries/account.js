import Vue from 'vue'
import components from '../components/account';

//
// Stylesheet
//
import '../styles/main.scss'


//
// Global Components
//
components.forEach((component) => {
  Vue.component(component.name, component)
})

//
// Plugins
//


//
// Start
//
const root = new Vue({
  el: '#vue-container'
})

console.log("vue-container just built")