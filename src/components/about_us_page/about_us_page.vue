<template>
  <el-container :class="['page', $style['about-us-page']]"
    direction="vertical">
    <header-bar :isFixed="true"></header-bar>
    <el-main :class="$style.main">
        <img src="@assets/images/about-us-banner.jpg"
          width="100%">
        <section :class="$style.section">
          <h2 :class="$style.caption">我们是谁</h2>
          <section :class="$style.content">
            <p>
              中国移动物联网开放平台是中移物联网有限公司基于物联网技术和产业特点打造的开放平台和生态环境，
              适配各种网络环境和协议类型，支持各类传感器和智能硬件的快速接入和大数据服务，
              提供丰富的API和应用模板以支持各类行业应用和智能硬件的开发，能够有效降低物联网应用开发和部署成本，
              满足物联网领域设备连接、协议适配、数据存储、数据安全、大数据分析等平台级服务需求。
            </p>
            <p>
              轻应用平台目前基于OneNET数据流做在线流式计算和离线数据统计，
              让第三方数据访问更加稳定、安全、可靠。我们有专门的应用开发团队，打造更好用的轻应用服务平台，
              同时为客户提供项目配置协助，帮助客户完成重要项目的早期应用配置。在将来，
              我们希望轻应用平台能够为更多用户场景提供服务。
            </p>
          </section>
        </section>
        <section :class="[$style.section, $style.introduce]">
          <h2 :class="$style.caption">平台介绍</h2>
          <section :class="$style.content">
            <p>
              面向企业用户，基于物联网应用的共性需求，打造成BaaS层通用模板，
              通过开放的API接口，帮助企业能够快速实现应用的展现，极大的降低应用开发的成本和缩减开发时间。
              B端企业用户登录平台基于API的BaaS层服务平台，完成前端Web和App通用组件的开发，
              简化用户生成企业级应用，实现一站式应用配置多平台数据转化和使用。
            </p>
            <p>
              轻应用第三方开发服务平台，是基于API的BaaS层服务平台，
              企业或用户可以通过该平台完成前端Web和App通用组件的开发，
              目的是简化用户生成企业级应用操作流程。例如，某企业新接入一批设备，
              按照客户要求需要针对不同的用户群体开发对应的第三方Web和App应用，那么按照常规操作逻辑，
              每开发一套应用系统，都需要开发对应的应用组件。这样的模式导致组件的重复利用率低，同时提升了开发成本，
              轻应用第三方开发服务平台提供前端通用组件的开发配置，利用提供的API实现各类应用数据访问与处理，
              支持多应用类型调用，节省了成套组件开发成本，将时间和精力着眼于应用的界面设计与开发。
              轻应用第三方开发服务平台目前正处于初期规划调试阶段，
              后续将提供更加优质的SaaS层应用服务，满足更多应用场景的对接和使用。
            </p>
          </section>
        </section>
        <section :class="[$style.section]">
          <h2 :class="$style.caption">提供服务</h2>
          <section :class="$style.content">
            <p>
              轻应用平台为移动应用或者Web应用提供整合基于OneNET的云后端服务。
              简单来说就是向开发者提供现成的后台服务，如存储、消息、管理、数据库和分析等服务。
              程序员们只需一心一意做产品，而不需要过多考虑后端的服务器程序，这使得开发者的开发变得更轻松、更容易。
            </p>
            <p>
              轻应用平台是构建在OneNET上面的一层，它使得第三方开发者可以更快的开发出基于OneNET的应用。
              本平台通过内部协议和OneNET进行通信，可以更加高效的从OneNET平台抽取数据，
              发送命令等等。轻应用平台不仅可以通过配置方式轻松的把从OneNET平台抽取出的数据格式化成开发者需要的格式，
              还能通过配置方式把数据进行统计。通过配置告警标准，本平台还能分析出需要告警的数据，
              并且把告警信息通过各种方式把信息发送给需要的人。轻应用平台还能通过配置的方式，
              把设备各种无序的命令统一成开发者需要的形式。
            </p>
            <p>
              微服务架构（MicroService Architect）是一种架构模式，
              它提倡将单块架构的应用拆分成一组小的服务，服务之间相互调用、相互协调、相互配合为用户提供最终价值。
              每个服务运行在其独立的进程中，服务和服务之间采用轻量级的通信机制互相沟通。
              每个服务围绕着具体的业务进行构
            </p>
            <div :class="$style['sec-wrap']">
              <section :class="$style['sec-item']">
                <img src="@assets/images/icon-code.png">
                <header :class="$style['sec-header']">
                  开发周期短
                </header>
                <p :class="$style['sec-content']">
                  让基于OneNET的开发者把主要精力放在应用本身，
                  而不需要考虑后台服务，比如存储架构、性能、安全等等，从而使开发效率大大提升。
                </p>
              </section>
              <section :class="$style['sec-item']">
                <img src="@assets/images/icon-cost.png">
                <header :class="$style['sec-header']">
                  节省成本
                </header>
                <p :class="$style['sec-content']">
                  原来在OneNET上开发一个应用产品至少需要多个人力，有了轻应用平台之后后端研发都省掉，
                  另外租用服务器，网络等等开销都可以省掉。吸引更多用户参与前端功能研发。
                </p>
              </section>
              <section :class="$style['sec-item']">
                <img src="@assets/images/icon-stream.png">
                <header :class="$style['sec-header']">
                  对团队技术要求低
                </header>
                <p :class="$style['sec-content']">
                  原来在OneNET上开发产品对于一个产品团队来说要兼具前端、后端、运维等的开发能力，才能将好的想法实现。
                  有了轻应用平台以后就大大降低产品开发的门槛，使得只有少数几个人也可以快速的完成产品开发。
                </p>
              </section>
            </div>
          </section>
        </section>
    </el-main>
    <footer-bar :isShowContactUS="true"></footer-bar>
  </el-container>
</template>

<script>
import HeaderBar from '@components/common/header_bar/header_bar.vue'
import FooterBar from '@components/common/footer_bar/footer_bar.vue'

export default {
  components: {
    'header-bar': HeaderBar,
    'footer-bar': FooterBar,
  }
};
</script>

<style lang="scss" module>
  @import '@common-vars';
  .about-us-page {
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
    .section {
      width: 100%;
      padding: 50px 60px;
      box-sizing: border-box;
    }
    .caption {
      font-weight: normal;
      text-align: center;
      margin-bottom: 40px;
    }
    .introduce {
      background: #e7eef2;
    }
    .content {
      width: $min-width;
      margin: 0 auto;
      & > :global(p) {
        line-height: 1.5em;
        color: #666;
        font-size: 14px;
      }
    }
    .sec-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 50px;
    }
    .sec-item {
      width: 345px;
      height: 195px;
      text-align: center;
    }
    .sec-header {
      font-size: 18px;
      margin-top:20px;
    }
    .sec-content {
      text-align: left;
      line-height: 1.5em;
      font-size: 14px;
      color: #666;
    }
</style>
