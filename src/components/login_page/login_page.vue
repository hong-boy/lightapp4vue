<template>
    <el-container id="container"
        direction="vertical"
        :class="['page', $style['login-page']]">
        <header-bar :isOnlyShowLogo="true"
            backgroundColor="transparent"></header-bar>
        <el-main :class="[$style['main']]"
            tabindex="-1"
            @mousemove.native="mousemove">
            <login-form class="animated zoomInDown"></login-form>
        </el-main>
        <footer-bar></footer-bar>
    </el-container>
</template>

<script>
// import { debounce } from 'lodash';
import HeaderBar from '@components/common/header_bar/header_bar.vue';
import FooterBar from '@components/common/footer_bar/footer_bar.vue';
import LoginForm from './login_form.vue';

export default {
  components: {
    LoginForm,
    HeaderBar,
    FooterBar,
  },
  data() {
    return {
      $container: null,
      windowOuterHeight: null,
      windowOuterWidth: null,
    };
  },
  mounted() {
    this.$container = document.querySelector('#container');
    this.windowOuterHeight = window.outerHeight;
    this.windowOuterWidth = window.outerWidth;
  },
  methods: {
    mousemove(e) {
      const y = e.pageY / this.windowOuterHeight * 100;
      const x = e.pageX / this.windowOuterWidth * 100;
      this.$container.style.backgroundPositionY = `${Math.max(45, Math.min(65, y))}%`;
      this.$container.style.backgroundPositionX = `${Math.max(45, Math.min(65, x))}%`;
    }
  }
};
</script>

<style lang="scss" module>
    .login-page {
        // @extend .page;
        background: url('../../assets/images/login-bg.png') no-repeat;
        background-size: auto;
        background-position-y: 50%;
        background-position-x: 50%;
        display: flex;
        flex-direction: column;
        transition: background 0.6s linear;
        min-height: 500px;
    }
    .main {
        flex: 1;
        &:focus {
            outline: none;
        }
    }
</style>
