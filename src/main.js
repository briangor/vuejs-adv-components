import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import DefaultButton from "./components/global/DefaultButton.vue";

Vue.config.productionTip = false;
//Vue.component('DefaultButton', DefaultButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
