<template>
    <div :class="$style.banner">
        <div :class="[$style.caption]">
            <span :class="['animated fadeInUp', $style.left]">轻应用</span>
            <span :class="[$style.splitter,'animated fadeIn']">·</span>
            <span :class="['animated fadeInDown', $style.right]">大物联</span>
        </div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
import IOT from 'IOT'

export default {
    mounted(){
        // 绘制banner
        this.drawCanvas();
        this.$nextTick(function(){
            let pw = new IOT.ParticleWave();
            pw.run();
        });
    },
    methods: {
        drawCanvas(){
            let thiz = this;
            let $el = thiz.$el;
            let $canvas = thiz.$canvas = $el.querySelector('#canvas');
            thiz.setCanvasSize();
            let ctx = thiz.ctx = $canvas.getContext('2d');
            // 绘制背景
            thiz.drawBackground();
        },
        drawParticle(){
            // 绘制粒子
            let list = new Float32Array(3000*2);
            for(let i = 0; i < list.length; i+=2){
                list[i] = Math.random();
                list[i+1] = Math.random();
            }
        },
        dragWaterGradient(width, height){
            // 绘制波浪背景
            let gradient = this.ctx.createLinearGradient(width/2, height/2, width/2, height);
            // gradient.addColorStop(0, 'rgba(0, 0, 30, 0)');
            // gradient.addColorStop(1, 'rgba(30, 0, 60, 0.5)');
            gradient.addColorStop(0, 'red');
            gradient.addColorStop(1, 'yellow');
            return gradient;
        },
        drawLinearGradient(width, height){
            // 绘制背景线性渐变效果
            let gradient = this.ctx.createLinearGradient(width/2, 0, width/2, height);
            // gradient.addColorStop(0, '#162e3b');
            gradient.addColorStop(0, '#000');
            gradient.addColorStop(1, '#000');
            // gradient.addColorStop(1, '#00b8ff');
            return gradient;
        },
        drawBackground(){
            // 绘制背景
            let ctx = this.ctx;
            let width =this.$canvas.width, height = this.$canvas.height;
            ctx.fillStyle = this.drawLinearGradient(width, height);
            ctx.fillRect(0,0, width, height);
            // ctx.fillStyle = this.dragWaterGradient(width, height);
            // ctx.fillRect(0, height / 2, width, height / 2);

        },
        setCanvasSize(){
            // 设置画布大小
            let computedStyle = window.getComputedStyle(this.$el);
            this.$canvas.setAttribute('height', computedStyle.height);
            this.$canvas.setAttribute('width', computedStyle.width);
        }
    },
}
</script>


<style lang="scss" module>
    @import '@common-vars';

    .banner {
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
    }
    .caption {
        position: absolute;
        width: 346px;
        height: 59px;
        top: 32%;
        color: #fff;
        font-size: 52px;
    }
    .splitter {
      position: absolute;
      left: 50%;
      transform:translateX(-50%);
      animation-delay: 1.5s;
    }
    .left {
      position: absolute;
      width: 156px;
      left: 0;
      animation-delay: 1s;
    }
    .right {
      position: absolute;
      width: 156px;
      right: 0;
      animation-delay: 1s;
    }
</style>

