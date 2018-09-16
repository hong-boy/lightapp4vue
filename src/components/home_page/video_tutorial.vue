<template>
    <div :class="$style.wrap">
        <video controls preload="auto"
          width="100%" height="100%">
          <source src="@assets/video/tutorial-video.mp4"  type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" module>
    .wrap {
        position: relative;
        width: 100%;
        height: 480px;
        background: #333;
        overflow: hidden;
    }
</style>
