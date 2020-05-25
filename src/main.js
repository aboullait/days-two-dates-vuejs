import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
// TODO: Using vuetify for better user experience for dispalying dates inputs

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;
new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
