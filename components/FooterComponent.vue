<script setup lang="ts">

</script>

<template>
  <footer>
    <h4>Сделано в качестве Лабораторной работы БВТ 2353 Герасимов Е.А 2023 г.</h4>
  </footer>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

//стили для мобильной версии

@include breakpoint(large) {
  footer {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em #c97f01;
    background: none;
  }
}

</style>