<template>
    <div class="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <Tags></Tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/dashboard/Header.vue';
import Sidebar from '@/components/dashboard/NavMenu.vue';
import Tags from '@/components/dashboard/Tags.vue';
import bus from '@/components/dashboard/bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        Header,
        Sidebar,
        Tags
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
