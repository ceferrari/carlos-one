import Vue from "vue";
import axios from "axios";
import store from "./store";
import router from "./router";
import { sync } from "vuex-router-sync";
import App from "components/app/index";
import "./registerServiceWorker";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.config.devtools = false;

sync(store, router);

const app = new Vue({
  store,
  router,
  ...App
});

export { app, router, store };
