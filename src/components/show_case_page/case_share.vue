<template>
  <span :class="['bdsharebuttonbox']">
    <a href="#" class="bds_qzone" data-cmd="qzone" target="_blank" title="分享到QQ空间"></a>
    <a href="#" class="bds_sqq" data-cmd="sqq" target="_blank" title="分享到QQ好友"></a>
    <a href="#" class="bds_tsina" data-cmd="tsina" target="_blank" title="分享到新浪微博"></a>
    <a href="###" class="bds_renren" data-cmd="renren" target="_blank" title="分享到人人网"></a>
    <a href="###" class="bds_weixin" data-cmd="weixin" target="_blank" title="分享到微信"></a>
  </span>
</template>

<script>
export default {
  beforeCreate(){
    window._bd_share_main = null;
  },  
  created() {
    let thiz = this;
    thiz.setupBaiduShare();
  },
  methods: {
    setupBaiduShare(){
      window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdMini": "2",
            "bdStyle": "0",
            "bdSize": "16",
            "bdMiniList":["weixin","sqq","tsina","fbook","qzone","renren","tqq","isohu","ty"],
            "bdText": "BaaS-中国移动物联网轻应用平台",
            "bdDesc" : 'BaaS-中国移动物联网轻应用平台是由中国移动打造的物联网轻应用开放平台。平台能够帮助开发者快速地开发出基于OneNET的物联网web应用。',
            "bdUrl" : "https://demo.heclouds.com/baas/index",
        },
        "share": {}
      };
      let script = document.createElement('script');
      script.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
      document.querySelector('head').appendChild(script);
    }
  }
};
</script>

<style lang="scss" module>
</style>
