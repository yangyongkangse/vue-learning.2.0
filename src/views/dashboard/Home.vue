<template>
    <div class="wrapper">
        <Header></Header>
        <NavMenu></NavMenu>
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
import NavMenu from '@/components/dashboard/NavMenu.vue';
import Tags from '@/components/dashboard/Tags.vue';
export default {
    data() {
        return {
            tagsList: [],
            collapse:false,
        };
    },
    components: {
        Header,
        NavMenu,
        Tags
    },
    computed:{
        getCollapseContent(){
            return this.$store.state.dashboard.collapseContent;
        }
    },
    watch: {
        getCollapseContent(val) {
            this.collapse = val;
        }
    },
    created() {
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        this.$store.state.dashboard.tags.forEach(item=>{
            let arr = [];
            item.name && arr.push(item.name);
            this.tagsList = arr;
        })
    }
};
</script>
