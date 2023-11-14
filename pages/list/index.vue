<script setup lang="ts">
  import {computed} from "vue";
  import {useFoxStore} from "~/stores/foxStore";

  const FoxStore  = useFoxStore();
  await FoxStore.getRandomFox();
  const foxes = computed( () => FoxStore.foxes);
</script>

<template>
  <section class="list">
    <fox-card :foxes="FoxStore.foxes"></fox-card>
  </section>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  //стили для мобильной версии

  @include breakpoint(large) {
    .list{
      overflow: hidden;
      margin: auto;
      width: 70%;
      height: 800px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
</style>