import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./plugins/bootstrap";
import "./plugins/materialize";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
