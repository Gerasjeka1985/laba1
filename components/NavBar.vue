<script setup lang="ts">

</script>

<template>

  <nav class="nav">
    <li>
      <NuxtLink
          class="nav__elem"
          to="/">
            Главная
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
          class="nav__elem"
          to="/list">
            Галерея
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        class="nav__elem"
        to="about">
            О проекте
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        class="nav__elem"
        to="/nowhere">
            тег Table
      </NuxtLink>
    </li>
  </nav>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

//стили для мобильной версии

@include breakpoint(large) {
  .nav{
    width: 60%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 40px;
    list-style-type: none;
    background: none;


    & li{margin-top: 10px}

    &__elem{
      width: 100px;
      height: 15px;
      font-size: 18px;
      font-family: bold;
      font-family: 'Bebas Neue', sans-serif;
      color: orange;
      text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em #c97f01;
      text-decoration: none;
      transition: 0.2s ease-in-out;

      &:hover{
        color: white;
        text-shadow: 1px 1px 2px black, 0 0 1em #f6f6f6, 0 0 0.2em #18042c;
      }
    }
  }
}

</style>