<template>
    <el-container :class="[$style['main-page'], 'page']"
        direction="vertical">
        <header-bar
            :isFixed="true"
            :scroll="onscroll"
            :backgroundColor="headerbar.backgroundColor"></header-bar>
        <banner ref="banner"></banner>
        <el-main :class="$style.main">
            <summary-compt></summary-compt>
            <video-tutorial></video-tutorial>
            <app-ability></app-ability>
            <!-- 案例展示 -->
            <show-case></show-case>
            <!-- 合作伙伴展示 -->
            <cooperation></cooperation>
        </el-main>
        <footer-bar :isShowContactUS="true"></footer-bar>
    </el-container>
</template>

<script>
import HeaderBar from '@components/common/header_bar/header_bar.vue';
import FooterBar from '@components/common/footer_bar/footer_bar.vue';
import IOT from 'IOT';
import Banner from './banner.vue';
import Summary from './summary.vue';
import VideoTutorial from './video_tutorial.vue';
import AppAbility from './app_ability.vue';
import Cooperation from './cooperation.vue';
import ShowCase from './show_case.vue';

export default {
  components: {
    'header-bar': HeaderBar,
    'footer-bar': FooterBar,
    banner: Banner,
    'summary-compt': Summary,
    'video-tutorial': VideoTutorial,
    'app-ability': AppAbility,
    cooperation: Cooperation,
    'show-case': ShowCase,
  },
  data() {
    return {
      headerbar: {
        // backgroundColor: '#162e3b'
        backgroundColor: '#000'
      },
      gradientColorArr: [],
      bannerHeight: null,
      bannerRange: null,
    };
  },
  created() {
    const thiz = this;
    window.onresize = function () {
      thiz.getBannerHeight();
    };
  },
  destroyed() {
    window.onresize = null;
  },
  mounted() {
    this.getBannerHeight();
  },
  methods: {
    onscroll($headerbar, top) {
      // 颜色过渡效果
      const index = parseInt(top / 100);
      this.headerbar.backgroundColor = this.gradientColorArr[index];
    },
    getBannerHeight() {
      this.bannerHeight = parseFloat(window.getComputedStyle(this.$refs.banner.$el).height);
      this.bannerRange = this.bannerHeight;
      this.gradientColorArr = IOT.GradientColorUtil.transform('#000000', '#00b8ff', parseInt(this.bannerRange / 100));
    }
  },
};
</script>


<style lang="scss" module>
    .main-page {
        position: relative;
        height: 100%;
    }
    .main {
        &:global(.el-main) {
          padding: 0;
          overflow: visible;
          background:#fff;
          margin-top: 100vh;
          z-index: 1;
        }
    }
</style>
