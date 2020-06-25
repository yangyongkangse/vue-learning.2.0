import axios from "axios";
import Setting from "@/config/setting";
import {Message} from 'element-ui';
import VueCookie from "@/config/util.cookies";
import router from '@/router';

let Axios = axios.create({
    timeout: 3000,
    withCredentials: true
});

//Axios request 拦截器
Axios.interceptors.request.use(
    config => {
        config.headers["Content-Type"] = "application/json;charset=utf-8";
        //获取本地存储的token
        const token = VueCookie.get('token');
        if (token !== null) {
            config.headers.Authorization = "Bearer " + token; //携带权限参数
        } else {
            router.push('/login');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//Axios response 拦截器
Axios.interceptors.response.use(
    response => {
        if (response.data.status === 200) {
            return Promise.resolve(response);
        } else {
            Message.error({
                message: response.data.msg,
                duration: 3000
            })
            return Promise.reject(response);
        }
    },
    error => {
        Message.error({
            message: error.response.data.msg,
            duration: 3000
        })
        router.push('/login');
        return Promise.reject(error);
    }
);

export default {
    get: function (url, params = {}) {
        return new Promise((resolve, reject) => {
            Axios.get(url, {
                params: params
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            })
        });
    },
    post: function (url, params = {}) {
        return new Promise((resolve, reject) => {
            Axios.post(url, JSON.stringify(params))
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err)
                })
        });
    },
    put: function (url, params = {}) {
        return new Promise((resolve, reject) => {
            Axios.put(url, params)
                .then(response => {
                    if (response) {
                        resolve(response.data);
                    } else {
                        reject("error");
                    }
                })
        });
    },
    patch: function (url, params = {}) {
        return new Promise((resolve, reject) => {
            Axios.patch(url, params)
                .then(response => {
                    if (response) {
                        resolve(response.data);
                    } else {
                        reject("error");
                    }
                })
        })
    },
}
