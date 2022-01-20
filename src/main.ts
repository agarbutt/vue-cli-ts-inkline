import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@inkline/inkline/inkline.scss";
import "./main.scss";

createApp(App).use(router).mount("#app");
