import Vue from "vue";
import axios from "axios";
import store from "./store";
import router from "./router";
import { sync } from "vuex-router-sync";
//import { FontAwesomeIcon } from "./icons"
import App from "components/app-root";
import "./registerServiceWorker";

//Vue.component("icon", FontAwesomeIcon)

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

sync(store, router);

const app = new Vue({
  store,
  router,
  ...App
});

export {
  app,
  router,
  store
};
