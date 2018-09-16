<template>
    <el-button :type="type" 
        :class="[!loading ? $style['btn'] : $style['btn-loading']]"
        :disabled="loading"
        :loading="loading"
        @click="click">
        {{!loading ? label:labelOnLoading}}
    </el-button>
</template>

<script>
export default {
    props: {
        type: {type:String, default:'primary'},
        label: {type:String, required:true},
        labelOnLoading: {type:String, required:true},
        loading: {type:Boolean, required:true},
        click: {type:Function}
    },
    data(){
        return {}
    },
    methods: {

    }
}
</script>

<style lang="scss" module>
    .btn {
        width: 100%;
        letter-spacing: 1em;
        text-indent: 1em;
    }
    .btn-loading {
        width: 100%;
        letter-spacing: 0;
        text-indent: 0;
    }
</style>


