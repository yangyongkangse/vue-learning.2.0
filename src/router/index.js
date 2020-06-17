import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import VueCookie from "../config/util.cookies";
Vue.use(VueRouter);
/*解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题*/
const originalReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const router = new VueRouter({
    routes,
    mode: "history"
});
//路由跳转前进行权限验证
router.beforeEach((to, from, next) => {
    //const token=VueCookie.get('username');
    const role = VueCookie.get('username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else {
        next()
    }
});
//路由跳转后进行逻辑处理
router.afterEach(to => {});

export default router;
