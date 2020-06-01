import Home from '@/views/dashboard/Home'
export default [
    {
        path: '/home',
        name: 'home',
        component:Home,
        redirect: {
            name:'dashboard'
        },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component:() => import('@/views/dashboard/Index'),
                meta: { title: '系统首页' }
            },
            {
                path: 'table',
                name: 'table',
                component:() => import('@/views/baseTable/BaseTable'),
                meta: { title: '基础表格' }
            },
            {
                path: 'tabs',
                name: 'tabs',
                component:() => import('@/views/tabs/Tabs'),
                meta: { title: 'tabs选项卡' }
            },
            {
                path: 'icon',
                name: 'icon',
                component:() => import('@/views/icon/Icon'),
                meta: { title: '自定义图标' }
            },
            {
                path: 'charts',
                name: 'charts',
                component:() => import('@/views/charts/Charts'),
                meta: { title: 'echart图表' }
            },
            {
                path: 'drag',
                name: 'drag',
                component:() => import('@/views/drag/Drag'),
                meta: { title: '拖拽组件' }
            },
            {
                path: 'i18n',
                name: 'i18n',
                component:() => import('@/views/i18n/I18n'),
                meta: { title: '国际化功能' }
            },
        ]
    }
];
