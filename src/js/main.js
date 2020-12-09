import _ from "lodash";
import { createApp } from "vue";
import App from "./components/App.vue";

const app = createApp(App);
app.mount("#app");

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
import hmr from "./_hmr";
hmr.start();
