import Home from '@/views/dashboard/Home'

export default [
    {
        path: '/aboutFrom',
        name: 'aboutFrom',
        component: Home,
        redirect: {
            name:'from'
        },
        children: [
            {
                path: 'form',
                name: 'form',
                component:() => import('@/views/form/Form'),
                meta: { title: 'form表单' }
            }, {
                path: 'menu',
                name: 'menu',
                component:() => import('@/views/form/Menu'),
                meta: { title: 'menu表单' }
            }, {
                path: 'upload',
                name: 'upload',
                component:() => import('@/views/form/Upload'),
                meta: { title: '文件上传' }
            },
        ]
    }
];
