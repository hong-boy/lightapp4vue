<template>
    <div :class="[$style['wrap']]">
        <el-input v-model="captcha"
            placeholder="图形验证码"
            :prefix-icon="icon"
            maxlength="6"
            :class="[$style['captcha']]"></el-input>
        <img src="###" 
            alt="图形验证码" 
            title="点击刷新" 
            :class="$style['img']"
            @click="refresh"/>
    </div>
</template>

<script>
export default {
    props: {
        change: {type:Function, required:true},
        icon: {type:String, default:''}
    },
    data(){
        return {
            captcha: ''
        };
    },
    methods: {
        refresh(){

        }
    },
    watch:{
        captcha(...args){
            this.change(this.captcha);
        }
    }
}
</script>

<style lang="scss" module>
    .wrap {
        display: inline-block;
        width: 100%;
    }
    .captcha {
        float: left;
        width: 68% !important;
    }
    .img {
        float: right;
    }
</style>


