import axios from "axios";
import qs from "qs";
import Setting from "@/setting";

let Axios = axios.create({
    baseURL: Setting.apiBaseURL,
    timeout: 5000,
    withCredentials: true
});

//Axios request 拦截器
Axios.interceptors.request.use(
    config => {
        config.headers["Content-Type"] = "application/x-www-form-urlencoded";
        const data = config.data;
        config.data = qs.stringify(data);
        //获取本地存储的token
        const token = localStorage.getItem("token");
        config.headers.Authorization = "Bearer " + token; //携带权限参数
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//Axios response 拦截器
Axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error.response);
    }
);

function apiAxios(method, url, params, response) {
    Axios({
        method: method,
        url: url,
        data: method === "POST" || method === "PUT" ? params : null,
        params: method === "GET" || method === "DELETE" ? params : null
    })
        .then(function (res) {
            response(res);
        })
        .catch(function (err) {
            response(err);
        });
}

export default {
    get: function (url, params, response) {
        return apiAxios("GET", url, params, response);
    },
    post: function (url, params, response) {
        return apiAxios("POST", url, params, response);
    },
    put: function (url, params, response) {
        return apiAxios("PUT", url, params, response);
    },
    delete: function (url, params, response) {
        return apiAxios("DELETE", url, params, response);
    }
};
