<template>
    <div class="sidebar">
        <el-menu
                class="sidebar-el-menu"
                unique-opened
                router
                :default-active="onRoutes"
                :collapse="collapse"
                background-color="#324157"
                text-color="#bfcbd9"
                active-text-color="#20a0ff"
        >
            <template v-for="item in items">
                <template v-if="item.child.length>0">
                    <el-submenu :index="item.menuUrl" :key="item.menuUrl">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.menuName }}</span>
                        </template>
                        <template v-for="subItem in item.child">
                            <el-menu-item
                                    :index="subItem.menuUrl"
                                    :key="subItem.menuUrl"
                            >{{ subItem.menuName }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.menuUrl" :key="item.menuUrl">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.menuName }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            collapse: false,
            items: []
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path
        },
        getCollapse(){
            return this.$store.state.dashboard.collapse;
        }
    },
    watch: {
        getCollapse(val) {
            this.collapse = val;
            this.$store.dispatch("setCollapseContent", {collapseContent:  val});
        }
    },
    methods: {
        getUserMenuInfo() {
            let _this = this;
            let userId = _this.$cookie.get('user-id');
            let authorities = JSON.parse(_this.$cookie.get('authorities'));
            let param = {
                url: "/system/getUserMenuInfo",
                params: {
                    "userId":userId
                }
            };
            _this.$store.dispatch("getUserMenuInfo", param).then(() => {
                _this.items= this.$store.state.login.menu;
            });
        }
    },
    created() {
        let _this = this;
        _this.getUserMenuInfo();
    }
};
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }
    .sidebar > ul {
        height: 100%;
    }
</style>
