
export default [
    {
        path: "/login",
        name: "Login",
        component:() => import('@/views/login/Login')
    },{
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/',
        component:() => import('@/views/dashboard/Home'),
        meta: { title: '自述文件' },
        children: [
            {
                path: '/dashboard',
                component:() => import('@/views/dashboard/Index'),
                meta: { title: '系统首页' }
            },
            {
                path: '/table',
                component:() => import('@/views/baseTable/BaseTable'),
                meta: { title: '基础表格' }
            },
        ]
    },
];
