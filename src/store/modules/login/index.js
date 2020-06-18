import axios from "@/index";
import VueCookie from "@/config/util.cookies";

const login = {
    state: {
        user: [],
        menu:[],
        role:[],
    },
    getters: {},
    actions: {
        login: ({commit, state, dispatch}, config = {}) => {
            //登录
            return new Promise((resolve, reject) => {
                axios.post(config.url, config.params).then(response => {
                    if (response.status === 200) {
                        commit("login", (state, {user: response.data})
                        );
                        //账号
                        VueCookie.set('username', response.data.username,'2h')
                        //权限
                        VueCookie.set('authorities',JSON.stringify(response.data.authorities),'2h')
                        //token
                        VueCookie.set('token', response.data.accessToken,'2h')
                        resolve(response.data);
                    } else {
                        reject("error");
                    }
                }).catch(err => {
                    reject(err);
                })
            });
        },
        getUserMenuInfo: ({commit, state, dispatch}, config = {}) => {
            return new Promise((resolve, reject) => {
                axios.get(config.url, config.params).then(response => {
                    if (response.status === 200) {
                        commit("setUserMenuInfo", (state, {menu: response.data})
                        );
                        resolve(response.data);
                    } else {
                        reject("error");
                    }
                }).catch(err => {
                    reject(err);
                })
            });
        }
    },
    mutations: {
        login(state, action) {
            state.user = action.user;
        },
        setUserMenuInfo(state, action) {
            state.menu = action.menu;
            state.role = action.role;
        },
    }
};
export default login;
