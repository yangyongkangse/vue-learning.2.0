import axios from "@/index";
import VueCookie from "@/config/util.cookies";

const login = {
    state: {
        user: []
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
                        VueCookie.set('username', response.data.username,'2h')
                        VueCookie.set('remark', response.data.remark,'2h')
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
        }
    }
};
export default login;
