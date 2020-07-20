import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";
import VueRouterReferer from "@tozd/vue-router-referer";

Vue.use(VueRouterReferer);

Vue.config.productionTip = false;
Vue.use(VueCookies);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
