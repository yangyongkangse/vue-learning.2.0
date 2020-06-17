
export default [
    {
        path: "/",
        name: "",
        redirect: '/login',
    },
    {
        path: "/login",
        name: "Login",
        component:() => import('@/views/login/Login')
    }
];
