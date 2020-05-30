import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});
//路由跳转前进行权限验证
router.beforeEach((to, from, next) => {
  next();
});
//路由跳转后进行逻辑处理
router.afterEach(to => {});

export default router;
