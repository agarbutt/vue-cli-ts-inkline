import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@inkline/inkline/inkline.scss";
import "./main.scss";

import { Inkline, components } from "@inkline/inkline";

createApp(App)
    .use(router)
    .use(Inkline, {
        components
    })
    .mount("#app");