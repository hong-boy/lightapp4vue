<template>
    <div :class="$style.avator">
        <i class="bs-icon-user2"></i>
        <el-dropdown size="small"
            :class="$style.dropdown">
            <span class="el-dropdown-link">
                yuanhongbo<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown"
                :class="$style['dropdown-list']">
                <el-dropdown-item>管理控制台</el-dropdown-item>
                <el-dropdown-item divided>个人中心</el-dropdown-item>
                <el-dropdown-item>消息中心</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    data(){
        return {

        };
    }
}
</script>


<style lang="scss" module>
    .avator {
        position: relative;
        color: #FFF;
        float: right;
        top: 50%;
        transform: translateY(-50%);
    }
    .dropdown {
        &:global(.el-dropdown) {
            color: #FFF;
        }
    }
    .dropdown-list {
        text-align: center;
    }
</style>
