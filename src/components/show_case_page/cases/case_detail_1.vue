<template>
  <div :class="$style.wrap">
    <header :class="$style.header">
      芯片系统
      <div :class="$style.share">
        <span :class="$style['share-tip']">分享至：</span>
        <case-share></case-share>
      </div>
    </header>
    <section :class="$style.section">
      <header :class="$style['caption']">案例简介</header>
      <p :class="$style.paragraph">
        中移物联网有限公司自研芯片需要一个系统来对分离于专网、OneNET平台的数据以及用户数据做统一管理，
        公司内部及客户公司皆可通过本系统实现对各自公司辖下的芯片及各自的下级芯片客户的管理。
      </p>
    </section>
    <section :class="$style.section">
      <header :class="$style['caption']">场景说明</header>
      <p :class="$style.paragraph">
        我们的生活中会出现很多智能设备，分布着许多各类传感器，并实时感知现实物理世界的一举一动。
        为了更好地为人类提供服务，让我们能够借助物联网感知身边的一切，并做出有效的反应，
        专业的物联网平台能够为我们解决问题。OneNET平台目前接入了很多智能终端，
        各类终端需要的芯片卡或设备可以通过协议适配接入到OneNET平台，为了更好地呈现芯片的状态，
        需要单独开发“芯片管理系统”。“芯片管理系统”能够对联网的芯片进行管理，
        芯片的状态信息、异常告警以及位置等数据将实时获取，第一时间告知用户。
        芯片管理系统相当于一个第三方应用，利用OneNET平台开放的接口获取数据，并下发命令对芯片进行控制。
        架构关系图(如图一)
      </p>
      <p :class="$style.paragraph">
        芯片系统除开需要获取芯片的状态信息外，还需要对客户进行管理，对关键数据进行统计。
        针对不同的用户场景，其权限也不相同，会根据角色的不同拥有各自的操作权限。
        轻应用平台为芯片系统提供了稳定的后端服务，对应用的用户进行集中管理和控制，通过角色设置权限策略；
        上报数据进行格式化，实时计算数据并格式化成标准结构化数据存储起来；定期对历史数据进行统计。
      </p>
      <img :class="$style.img" src="@assets/images/case-detail-1-1.png" alt="图一"/>
      <span :class="$style['img-alt']">（图一）</span>
    </section>
    <section :class="$style.section">
      <header :class="$style['caption']">配置说明</header>
      <p :class="$style.paragraph">
        芯片管理系统作为第三方应用，需要对客户、芯片进行管理，同时需要统计芯片数量变化以及数据点上报情况。
        轻应用平台提供用户管理、设备控制、角色分配以及统计等功能模块，芯片系统由不同的客户进行管理，
        在这里为应用配置“系统用户”模块，为第三方多个应用提供用户系统支撑；每个用户访问的资源有限，
        会根据不同用户角色享受不同的数据和对硬件资源进行控制，此时需要为应用配置“角色权限”模块；
        芯片在运行过程中，会对运行状态及上报数据进行统计分析，例如，故障分布，
        因此需要为应用配置“流计算”和“离线统计”。
      </p>
    </section>
    <section :class="$style.section">
      <header :class="$style['caption']">总结</header>
      <p :class="$style.paragraph">
        芯片系统实现对常规硬件设备的在线管理，能够及时获取芯片状态，第一时间接收到状态信息。
        轻应用平台在芯片系统的搭建过程中，作为后端支撑轻应用平台，
        为芯片系统提供了数据存储、数据统计、用户管理等服务，利用强大的API接口实现数据的授权访问。
      </p>
    </section>
    <section :class="$style.section">
      <header :class="$style['caption']">更多案例</header>
      <case-list :isPreviewMode="true" :exceptItemId="1"></case-list>
    </section>
  </div>
</template>

<script>
import CaseShare from '../case_share.vue';
import CaseList from '../case_list.vue';

export default {
  components: {
    'case-share': CaseShare,
    'case-list': CaseList,
  }
};
</script>

<style lang="scss" module>
  @import '@common-vars';

  .wrap {
    position: relative;
    width: $min-width;
    margin: 40px auto 80px auto;
    font-size: 14px;
    color: $primary-font-color;
  }
  .header {
    color: #333;
    font-size: 24px;
  }
  .share {
    line-height: 28px;
    overflow: hidden;
    font-size: 16px;
    margin-top: 15px;
    color: $second-font-color;
  }
  .share-tip {
    float: left;
  }
  .section {
    margin-top: 20px;
  }
  .caption {
    position: relative;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    font-size: 16px;
    margin-bottom: 20px;
    &:before {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 4px;
      background: #333;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #ccc;
      left: 0;
      bottom: 0;
    }
  }
  .paragraph {
    line-height: 1.5em;
    text-indent: 2em;
  }
  .img {
    margin: 0 auto;
    display: block;
  }
  .img-alt {
    display: block;
    text-align: center;
  }
</style>
