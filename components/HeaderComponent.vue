<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="header__logo">
      <img src="../assets/images/fox.png" alt="logo" />
    </div>
    <nav-bar />
  </header>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

//стили для мобильной версии

@include breakpoint(large) {

    .header {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      &__logo{
        width: 130px;
        height: 100px;

        & img{
          width: 100%;
          height: 100%;
        }
      }
    }
}
</style>