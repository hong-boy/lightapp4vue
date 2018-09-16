<template>
    <div :class="[$style['layout']]" id="page_wrap">
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>


<style lang="scss" module>
    .layout {
        min-height: 100vh;
    }
</style>
