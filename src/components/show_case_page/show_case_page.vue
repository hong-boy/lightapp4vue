<template>
  <el-container direction="vertical"
    :class="['page', $style['show-case-page']]">
    <header-bar :isFixed="true"></header-bar>
    <el-main :class="$style.main">
      <img src="@assets/images/show-case-banner.jpg"
          width="100%">
      <div :class="$style.wrap">
        <header :class="$style.caption">应用案例</header>
        <span :class="$style['sub-caption']">
          展示已部署应用案例，对案例详情进行深度解析
        </span>
        <case-list></case-list>
      </div>
    </el-main>
    <footer-bar :isShowContactUS="true"></footer-bar>
  </el-container>
</template>

<script>
  import HeaderBar from '@components/common/header_bar/header_bar.vue'
  import FooterBar from '@components/common/footer_bar/footer_bar.vue'
  import CaseList from './case_list.vue';

  export default {
    components: {
    'header-bar': HeaderBar,
    'footer-bar': FooterBar,
    'case-list': CaseList,
    }
  }
</script>

<style lang="scss" module>
  @import '@common-vars';
  .show-case-page {
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
  .wrap {
    margin: 60px auto 120px auto;
    text-align: center;
  }
  .caption {
    font-size: 24px;
    margin-bottom: 25px;
  }
  .sub-caption {
    font-size: 14px;
    color: $primary-font-color;
  }
</style>
