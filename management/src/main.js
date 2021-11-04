
// import Vue from "vue";
import App from "./App.vue";
import { createApp } from "vue";
import "../styleguide.css";
import "../globals.css";

// // Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");


createApp(App).use(router).mount('#app')

