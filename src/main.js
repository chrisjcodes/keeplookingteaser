import Vue from "vue";
import vueVimeoPlayer from "vue-vimeo-player";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(vueVimeoPlayer);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
