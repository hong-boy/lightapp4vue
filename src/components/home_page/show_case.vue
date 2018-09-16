<template>
    <div :class="$style.wrap">
        <header :class="$style.caption">
            应用案例
        </header>
        <case-list :isPreviewMode="true"></case-list>
    </div>
</template>

<script>
import CaseList from '../show_case_page/case_list.vue';

export default {
  components: {
    'case-list': CaseList,
  }
};
</script>

<style lang="scss" module>
@import "@assets/scss/common-vars.scss";
.wrap {
  position: relative;
  height: 410px;
  width: 100%;
  background: #f3f4f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  margin: 20px auto 50px auto;
}
.caption {
  font-size: 24px;
  text-align: center;
}
</style>
