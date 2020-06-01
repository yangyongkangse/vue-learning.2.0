
export default [
    {
        path: "/",
        name: "",
        redirect: '/home/dashboard',
    },
    {
        path: "/login",
        name: "Login",
        component:() => import('@/views/login/Login')
    }
];
