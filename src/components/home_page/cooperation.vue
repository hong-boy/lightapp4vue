<template>
  <div :class="$style.wrap">
    <header :class="$style.caption">
      合作伙伴
    </header>
    <section :class="$style.partners">
      <img src="@assets/images/partner-1.png"
        :class="$style.partner"/>
      <img src="@assets/images/partner-2.png"
        :class="$style.partner"/>
      <img src="@assets/images/partner-3.png"
        :class="$style.partner"/>
      <img src="@assets/images/partner-4.png"
        :class="$style.partner"/>
      <img src="@assets/images/partner-5.png"
        :class="$style.partner"/>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" module>
  .wrap {
    width: 1200px;
    height: 200px;
    margin: 0 auto;
    text-align: center;
  }
  .caption {
    font-size: 24px;
  }
  .partners {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 60px;
  }
</style>
