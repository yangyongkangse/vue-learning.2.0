export default [
    {
        icon: 'el-icon-s-home',
        index: '/home/dashboard',
        title: '系统首页'
    },
    {
        icon: 'el-icon-s-grid',
        index: '/home/table',
        title: '基础表格'
    },
    {
        icon: 'el-icon-document-copy',
        index: '/home/tabs',
        title: 'tab选项卡'
    },
    {
        icon: 'el-icon-document',
        index: '3',
        title: '表单相关',
        subs: [
            {
                index: '/aboutFrom/form',
                title: '基本表单'
            },
            {
                index: '/aboutFrom/menu',
                title: '三级菜单',
            },
            {
                index: '/aboutFrom/upload',
                title: '文件上传'
            }
        ]
    },
    {
        icon: 'el-icon-star-on',
        index: '/home/icon',
        title: '自定义图标'
    },
    {
        icon: 'el-icon-pie-chart',
        index: '/home/charts',
        title: 'echart图表'
    },
    {
        icon: 'el-icon-rank',
        index: '/home/drag',
        title: '拖拽组件'
    },
    {
        icon: 'el-icon-s-help',
        index: '/home/i18n',
        title: '国际化功能'
    },
    {
        icon: 'el-icon-warning-outline',
        index: '8',
        title: '错误处理',
        subs: [
            {
                index: '/handle/permission',
                title: '权限测试'
            },
            {
                index: '/handle/404',
                title: '404页面'
            }
        ]
    }
];
