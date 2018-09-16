<template>
    <el-footer :class="$style['footer-bar']"
        height="auto">
        <section v-if="isShowContactUS"
          :class="$style['contact-us']">
          <header :class="$style.caption">联系我们</header>
          <a href="mailto:baas@cmiot.chinamobile.com"
            :class="$style.link">
            baas@cmiot.chinamobile.com
          </a>
          <a href="//j.map.baidu.com/3ef2P"
            :class="$style.link"
            title="重庆市渝北区黄杨路渝兴广场D3大楼"
            target="_blank"
            nofllow="">
                重庆市渝北区黄杨路渝兴广场D3大楼
            </a>
        </section>
        <footer :class="$style.footer">中移物联网有限公司 ©2018</footer>
    </el-footer>
</template>

<script>
export default {
  props: {
    isShowContactUS: { type: Boolean, default: false }
  },
};
</script>

<style lang="scss" module>
    @import '@common-vars';
    .footer-bar {
        position: relative;
        &:global(.el-footer){
            padding: 0;
        }
    }
    .footer {
        background: #333;
        color: $primary-font-color;
        height: $height-footer-bar;
        line-height: $height-footer-bar;
        text-align: center;
        font-size: 14px;
    }
    .contact-us {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 300px;
      background: url('@assets/images/footer-contact-us.png') no-repeat;
      background-size: cover;
    }
    .caption {
      font-size: 24px;
      color: #fff;
      position: relative;
      top: -40px;
    }
    .link {
      color: #fff;
      display: block;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
      margin-top: 20px;
      &:hover {
        text-decoration: underline;
      }
    }
</style>
