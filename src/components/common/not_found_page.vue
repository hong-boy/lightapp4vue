<template>
    <div :class="$style['not-found-page']">
        <div :class="$style['area']"
            tabindex="-1"
            @mousemove="mousemove">
            <section :class="$style.sec1">
                <img class="img"
                    id="img_bg"
                    src="@assets/images/not-found-bg.jpg"
                    width="100%"
                    height="100%"/>
            </section>
            <section :class="$style.sec2">
                <img class="img-404"
                    id="img_404"
                    src="@assets/images/not-found-404-1.png"/>
                <!-- fish -->
                <img class="img-fish"
                    id="img_fish"
                    src="@assets/images/not-found-fish.png"/>
                <img class="img-fish-shadow"
                    id="img_fish_shadow"
                    src="@assets/images/not-found-fish-shadow.png"/>
                <!-- ship -->
                <img class="img-ship"
                    id="img_ship"
                    src="@assets/images/not-found-ship.png"/>
                <img class="img-ship-shadow"
                    id="img_ship_shadow"
                    src="@assets/images/not-found-ship-shadow.png"/>
                <!-- 建筑物 -->
                <img class="img-building1"
                    id="img_building1"
                    src="@assets/images/not-found-building1.png"/>
                <img class="img-building2"
                    id="img_building2"
                    src="@assets/images/not-found-building2.png"/>
            </section>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // TODO - 监听onresize
  },
  destroyed() {
    // TODO - 移除监听onresize
  },
  mounted() {
    this.windowOuterHeight = window.outerHeight;
    this.windowOuterWidth = window.outerWidth;
    const $el = this.$el;
    this.$img_bg = $el.querySelector('#img_bg');
    this.$img_404 = $el.querySelector('#img_404');
    this.$img_fish = $el.querySelector('#img_fish');
    this.$img_fish_shadow = $el.querySelector('#img_fish_shadow');
    this.$img_ship = $el.querySelector('#img_ship');
    this.$img_ship_shadow = $el.querySelector('#img_ship_shadow');
    this.$img_building1 = $el.querySelector('#img_building1');
    this.$img_building2 = $el.querySelector('#img_building2');
  },
  methods: {
    mousemove(e) {
      const rateY = e.pageY / this.windowOuterHeight;
      const rateX = e.pageX / this.windowOuterWidth;
      this.handle4ImgBg(e, rateY);
      this.handle4Img404(e, rateX, rateY);
      this.handle4ImgFish(e, rateX, rateY);
      this.handle4ImgShip(e, rateX, rateY);
      this.handle4ImgBuilding1(rateX, rateY);
      this.handle4ImgBuilding2(rateX, rateY);
    },
    handle4ImgBuilding2(rateX, rateY) {
      const height = 50;
      const width = 115;
      const rate = 0.3;
      this.$img_building2.style.transform = `translate3d(${width * rateX * rate}px, ${height * rateY * rate}px, 0)`;
    },
    handle4ImgBuilding1(rateX, rateY) {
      const height = 120;
      const width = 305;
      const rate = 0.3;
      this.$img_building1.style.transform = `translate3d(${width * rateX * rate}px, ${height * rateY * rate}px, 0)`;
    },
    handle4ImgShip(e, rateX, rateY) {
      const height = 155;
      const width = 440;
      const height4shadow = 75;
      const width4shadow = 430;
      const rate = 0.1;
      this.$img_ship.style.transform = `translate3d(${width * rateX * rate}px, ${height * rateY * rate}px, 0)`;
      this.$img_ship_shadow.style.transform = `translate3d(${width4shadow * rateX * rate}px, ${height4shadow * rateY * rate}px, 0)`;
    },
    handle4ImgFish(e, rateX, rateY) {
      const height = 230;
      const width = 188;
      const height4shadow = 50;
      const width4shadow = 165;
      const rate = 0.04;
      this.$img_fish.style.transform = `translate3d(${width * rateX * rate}px, ${height * rateY * rate}px, 0)`;
      this.$img_fish_shadow.style.transform = `translate3d(${width4shadow * rateX * rate}px, ${height4shadow * rateY * rate}px, 0)`;
    },
    handle4Img404(e, rateX, rateY) {
      const height = 250;
      const width = 270;
      const rate = 0.04;
      this.$img_404.style.transform = `translate3d(${width * rateX * rate}px, ${height * rateY * rate}px, 0)`;
    },
    handle4ImgBg(e, rateY) {
      const height = 470;
      const rate = 0.09;
      this.$img_bg.style.transform = `translateY(${height * rateY * rate}px)`;
    },
  }
};
</script>


<style lang="scss" module>

    .not-found-page {
        position: relative;
        height: 100%;
    }
    .area {
        position: relative;
        width: 100%;
        height: 350px;
        box-sizing: border-box;
    }
    .sec1 {
        position: absolute;
        overflow: hidden;
        height: 350px;
        width: 100%;
        z-index: 1;
        & :global(.img) {
            height: 470px;
            transform: translateY(0px);
            position: relative;
            top: -50px;
        }
    }
    .sec2 {
        position: relative;
        height: 100%;
        width: 900px;
        margin: 0 auto;
        left: 0;
        top: 0;
        z-index: 2;
        & :global(.img-404){
            position: absolute;
            bottom: 30px;
        }
        & :global(.img-fish){
            position: absolute;
            left: 300px;
            bottom: 50px;
        }
        & :global(.img-fish-shadow){
            position: absolute;
            left: 310px;
            bottom: 25px;
            z-index: -1;
        }
        & :global(.img-ship){
            position: absolute;
            left: 375px;
            bottom: 65px;
            z-index: -1;
        }
        & :global(.img-ship-shadow){
            position: absolute;
            left: 385px;
            bottom: 35px;
            z-index: -2;
        }
        & :global(.img-building1){
            position: absolute;
            left: 465px;
            bottom: 165px;
            z-index: -2;
        }
        & :global(.img-building2){
            position: absolute;
            left: 775px;
            bottom: 195px;
            z-index: -3;
        }
    }
</style>
