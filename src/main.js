import Vue from "vue";
import VueCookie from './config/util.cookies';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import Api from "./index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueCookie);
Vue.prototype.$http = Api;
new Vue({
    router,
    store,
    Axios,
    ElementUI,
    render: h => h(App)
}).$mount("#app");
