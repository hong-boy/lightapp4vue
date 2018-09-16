<template>
  <div :class="$style.wrap">
    <el-input placeholder="请输入案例名称"
      :class="$style.input"
      v-if="!isPreviewMode"
      v-model.trim="filterKey"
      @keyup.native="filterCaseList"
      maxlength="20">
      <el-button slot="append"
        @click="filterCaseList"
        icon="el-icon-search"></el-button>
    </el-input>
    <div :class="$style['case-list']">
      <div v-if="!filteredCaseList.length">没有查询到结果</div>
      <div :class="$style['case-item']"
        v-for="item in filteredCaseList"
        :key="item.id">
        <img :class="$style['case-item-img']" :src="item.img"/>
        <section :class="$style.front">
          <span :class="$style.caption">{{item.label}}</span>
          <span :class="$style.date">
            发布时间：{{item.date}}
          </span>
        </section>
        <section :class="$style.back">
          <span :class="$style.desc">{{item.desc}}</span>
          <router-link :to="'/case/'+item.id"
            tag="span"
            :class="$style.link">
            查看详情
          </router-link>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import caseList from './case_list.data.js';

export default {
  props: {
    isPreviewMode: { type: Boolean, default: false },
    maxItems: { type: Number, default: 3 },
    exceptItemId: { type: Number },
  },
  created() {
    this.filterCaseList();
    if (this.isPreviewMode) {
      this.filteredCaseList = this.filteredCaseList.filter(item => item.id !== this.exceptItemId);
      this.filteredCaseList.slice(0, Math.min(this.maxItems, this.filteredCaseList.length));
    }
  },
  data() {
    return {
      filterKey: '',
      filteredCaseList: [],
      originalCaseList: caseList
    };
  },
  methods: {
    filterCaseList() {
      const thiz = this;
      if (!thiz.filterKey) {
        thiz.filteredCaseList = Array.from(thiz.originalCaseList);
        return;
      }
      const res = thiz.originalCaseList.filter(
        item => !!~item.label.toLowerCase().indexOf(thiz.filterKey.toLowerCase())
      );
      thiz.filteredCaseList = res || [];
    }
  }
};
</script>

<style lang="scss" module>
  @import '@common-vars';
  .wrap {
    position: relative;
    width: $min-width;
    margin: 40px auto;
    text-align: center;
  }
  .input {
    &:global(.el-input){
      margin: 0px auto 60px auto;
      width: 620px;
    }
  }
  .case-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    &:after {
      content: '';
      display: block;
      width: 360px;
    }
  }
  .case-item {
    position: relative;
    width: 360px;
    height: 280px;
    color: #FFF;
    border-radius: 4px;
    overflow: hidden;
    &:hover {
      .case-item-img {
        transform: scale(1.1);
      }
      .front {
        opacity: 0;
      }
      .back {
        top: 1px;
      }
    }
  }
  .case-item-img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: all .45s linear;
  }
  .front {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    opacity: 1;
    width: 100%;
    height: 80px;
    font-size: 16px;
    background: rgba(122, 132, 153, 0.9);
    box-sizing: border-box;
    padding: 18px 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    transition: all .5s linear;
  }
  .date {
    opacity: .8;
    font-size: 14px;
  }
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 100%;
    z-index: 2;
    background: url('@assets/images/case-item-bg.png') no-repeat;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 35px 35px;
    box-sizing: border-box;
    font-size: 14px;
    transition: all .5s linear;
  }
  .link {
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 6px 10px;
    font-size: 12px;
    cursor: pointer;
    margin-top: 30px;
    opacity: .9;
    &:hover {
      opacity: 1;
    }
  }
  .desc {
    text-align: left;
    &:global(:after){
      content: '...';
    }
  }
</style>
