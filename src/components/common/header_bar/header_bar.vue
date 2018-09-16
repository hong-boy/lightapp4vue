<template>
    <el-header height="70px" 
        :style="{'background-color':backgroundColor}"
        :class="[
            $style['header-bar']
        ]">
        <div :class="$style.logo">
            <img src="@assets/images/logo-onenet.png"/>
            <span :class="$style['logo-divided']"></span>
            <span :class="$style['logo-label']">轻应用平台</span>
        </div>
        <bs-menu v-if="!isOnlyShowLogo"></bs-menu>
        <avator v-if="!isOnlyShowLogo"></avator>
    </el-header>
</template>

<script>
import avator from './avator'
import menu from './menu'
import IOT from 'IOT'

export default {
    props: {
        isOnlyShowLogo: {type:Boolean, default: false},
        isFixed: {type:Boolean, default:false}, // 固定位置
        backgroundColor: {type:String, default:'#00b8ff'},
        scroll: {type:Function}
    },
    components: {
        avator,
        'bs-menu':menu,
    },
    data(){
        return {
            currentIndex: '/',
            $body: null,
        };
    },
    created(){
      setTimeout(function(){
          document.querySelector('body').scrollTop = 0;
        }, 1);
    },
    mounted(){
        if(this.isFixed){
            this.$body = document.querySelector('body');
            IOT.isFunction(this.scroll) && (this.$body.onscroll = this.onscroll.bind(this));
        }
    },
    destroyed(){
        if(this.isFixed){
            this.$body.onscroll = null;
        }
    },
    methods: {
        onscroll(e){
            // TODO - 节流
            this.scroll(this.$el, this.$body.scrollTop);
        }
    },
}
</script>

<style lang="scss" module>
    @import '@common-vars';

    .header-bar {
        position: fixed;
        z-index: 2;
        width: 100%;
        transition: all .3s linear;
    }
    .logo {
        float: left;
        height: 100%;
        width: 290px;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .logo-divided {
        display: inline-block;
        background: #FFF;
        width: 1px;
        height: 40%;
    }
    .logo-label {
        color: #FFF;
        font-size: 24px;
        line-height: 20px;
    }
</style>
