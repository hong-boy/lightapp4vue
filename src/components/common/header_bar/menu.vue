<template>
    <ul :class="$style['menu-list']">
        <li :class="$style['menu-item']">
            <router-link to="/">首页</router-link>
        </li>
        <li :class="$style['menu-item']">
            <router-link to="/wiki">文档资源</router-link>
        </li>
        <li :class="$style['menu-item']">
            <router-link to="/case">案例</router-link>
        </li>
        <li :class="$style['menu-item']">
            <router-link to="/about">关于页面</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        defaultActiveItem: {type:String}
    },
    data(){
        return {
        };
    },
    watch: {
        $route(...args){
            console.log('$route', args);
        }
    },
    methods: {

    },
}
</script>

<style lang="scss" module>
    @import '@common-vars';

    .menu-list {
        position: relative;
        list-style: none;
        margin: 0 0 0 45px;
        padding: 0;
        transform: translateY(-50%);
        top: 50%;
        float: left;
    }
    .menu-item {
        float: left;
        margin: 0 20px;
        & :global(a) {
            color: #FFF;
            text-decoration: none;
        }
        &:global(.is-active){
            & :global(a) {
                font-weight: bold;
            }
        }
        &:hover,
        &:focus {
            & :global(a) {
                font-weight: bold;
            }
        }
    }
</style>

