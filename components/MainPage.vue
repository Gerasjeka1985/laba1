<script setup lang="ts">

</script>

<template>
  <main class="main">
    <section class="main__banner">
      <article class="main__banner__title">
          <p>Эти</p>
          <p>Смешные</p>
          <br />
          <p class="main__shake">Лисы</p>
      </article>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

//стили для мобильной версии

@include breakpoint(large) {
  .main {
    margin: 0;
    width: 100%;
    height: 100vh;

    &__banner{
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;


      &__title{
        color: #f6f6f6;
        font-family: 'Bebas Neue', sans-serif;
        font-family: 'Dancing Script', cursive;
        font-size: 53px;
        text-shadow: 1px 1px 2px black, 0 0 1em #fafafa, 0 0 0.2em #18042c;
      }
    }

    &__shake{
      margin-left: 150px;
      font-size: 89px;
      color: orange;
      text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em #c97f01;
      animation-duration: 1s;
      animation-delay: revert;
      animation-iteration-count: infinite;
      animation-name: shake;
    }

    @keyframes shake {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(5px, 5px) rotate(5deg); }
      50% { transform: translate(0, 0) rotate(0eg); }
      75% { transform: translate(-5px, 5px) rotate(-5deg); }
      100% { transform: translate(0, 0) rotate(0deg); }
    }
  }

}
</style>