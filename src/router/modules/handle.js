import Home from '@/views/dashboard/Home'

export default [
    {
        path: '/handle',
        name: 'handle',
        component: Home,
        redirect: {
            name:'from'
        },
        children: [
            {
                path: 'permission',
                name: 'permission',
                component:() => import('@/views/handle/Permission'),
                meta: { title: '权限测试' }
            }, {
                path: '404',
                name: '404',
                component:() => import('@/views/handle/404'),
                meta: { title: '404页面' }
            },
        ]
    }
];
