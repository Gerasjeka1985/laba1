<script setup lang="ts">

</script>


<template>
  <div class="layout-default">
      <video class="layout-default__media"
             src="@/assets/video/grass.mp4"
             type="video/mp4"
             muted="muted"
             autoplay="autoplay"
             loop
      >
      </video>
    <header-component />
    <slot></slot>
    <footer-component class="layout-default__footer" />
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

//стили для мобильной версии

@include breakpoint(large) {
  .layout-default {
    //position: relative;
    width: 100%;
    min-height: 100%;

    &__media{
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
}
</style>

