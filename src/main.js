import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./plugins/bootstrap";
import "./plugins/material";

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
