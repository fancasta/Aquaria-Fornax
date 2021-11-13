import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router/index.js";
import "../styleguide.css";
import "../kpidashboard.css";
import "../chat.css";

createApp(App)
  .use(router)
  .mount("#app");
