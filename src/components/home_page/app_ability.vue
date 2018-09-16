<template>
  <div :class="$style.wrap">
    <header :class="$style.caption">
      应用能力
    </header>
    <section :class="$style.modules">
      <div :class="$style.module">
        <header :class="$style['m-header']">
          <img :class="$style['m-icon']" 
            src="@assets/images/icon-stream.png"/>
          <span :class="$style['sub-caption']">流计算</span>
        </header>
        <section :class="$style.content">
          平台能够通过输入既定规则的计算脚本，实现在线和离线流式计算，并输出到存储单元供后续使用。
          流式计算不受语法规则的限制，开发者只需根据json包编写对应的解析脚本，就能得到最终的结果数据，
          并实现结构化数据提取和进一步分析。
        </section>
      </div>
      <div :class="$style.module">
        <header :class="$style['m-header']">
          <img :class="$style['m-icon']" 
            src="@assets/images/icon-stream.png"/>
          <span :class="$style['sub-caption']">流计算</span>
        </header>
        <section :class="$style.content">
          平台能够通过输入既定规则的计算脚本，实现在线和离线流式计算，并输出到存储单元供后续使用。
          流式计算不受语法规则的限制，开发者只需根据json包编写对应的解析脚本，就能得到最终的结果数据，
          并实现结构化数据提取和进一步分析。
        </section>
      </div>
      <div :class="$style.module">
        <header :class="$style['m-header']">
          <img :class="$style['m-icon']" 
            src="@assets/images/icon-stream.png"/>
          <span :class="$style['sub-caption']">流计算</span>
        </header>
        <section :class="$style.content">
          平台能够通过输入既定规则的计算脚本，实现在线和离线流式计算，并输出到存储单元供后续使用。
          流式计算不受语法规则的限制，开发者只需根据json包编写对应的解析脚本，就能得到最终的结果数据，
          并实现结构化数据提取和进一步分析。
        </section>
      </div>
      <div :class="$style.module">
        <header :class="$style['m-header']">
          <img :class="$style['m-icon']" 
            src="@assets/images/icon-stream.png"/>
          <span :class="$style['sub-caption']">流计算</span>
        </header>
        <section :class="$style.content">
          平台能够通过输入既定规则的计算脚本，实现在线和离线流式计算，并输出到存储单元供后续使用。
          流式计算不受语法规则的限制，开发者只需根据json包编写对应的解析脚本，就能得到最终的结果数据，
          并实现结构化数据提取和进一步分析。
        </section>
      </div>
      <div :class="$style.module">
        <header :class="$style['m-header']">
          <img :class="$style['m-icon']" 
            src="@assets/images/icon-stream.png"/>
          <span :class="$style['sub-caption']">流计算</span>
        </header>
        <section :class="$style.content">
          平台能够通过输入既定规则的计算脚本，实现在线和离线流式计算，并输出到存储单元供后续使用。
          流式计算不受语法规则的限制，开发者只需根据json包编写对应的解析脚本，就能得到最终的结果数据，
          并实现结构化数据提取和进一步分析。
        </section>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  @import '@common-vars';
  .wrap {
    position: relative;
    width: 1200px;
    box-sizing: border-box;
    text-align: center;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 70px;
  }
  .caption {
    font-size: 24px;
  }
  .modules {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: left;
    margin-top: 30px;
    &:after {
      content: '';
      position: relative;
      width: 355px;
    }
  }
  .module {
    width: 355px;
    height: 205px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .m-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    width: 100%;
  }
  .m-icon {
    display: block;
  }
  .sub-caption {
    // font-weight: bold;
  }
  .content {
    color: $second-font-color;
    line-height: 1.5em;
    font-size: 14px;
  }
</style>
