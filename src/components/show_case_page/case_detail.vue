<template>
  <el-container direction="vertical"
    :class="['page', $style['case-detail-page']]">
    <header-bar :isFixed="true"></header-bar>
    <el-main :class="$style.main">
      <img src="@assets/images/case-detail-bg.jpg"
          width="100%">
      <component :is="compt"></component>
    </el-main>
    <footer-bar :isShowContactUS="true"></footer-bar>
  </el-container>
</template>

<script>
import HeaderBar from '@components/common/header_bar/header_bar.vue';
import FooterBar from '@components/common/footer_bar/footer_bar.vue';

export default {
  components: {
    'header-bar': HeaderBar,
    'footer-bar': FooterBar,
    'case-1': resolve => require(['./cases/case_detail_1.vue'], resolve),
  },
  data() {
    return {
      compt: ''
    };
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(currId) {
        // this.compt = `case-${currId}`;
        this.compt = `case-1`;
      }
    }
  },
};
</script>

<style lang="scss" module>
  @import '@common-vars';
  .case-detail-page {
    position: relative;
    height: 100%;
  }
  .main {
    &:global(.el-main) {
      padding: 0;
      overflow: visible;
      background:#fff;
      margin-top: $height-header-bar;
      z-index: 1;
    }
  }
</style>
