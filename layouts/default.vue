<script setup lang="ts">

</script>


<template>
  <div class="layout-default">
    <header-component />
    <slot></slot>
    <footer-component />
  </div>
</template>

<style scoped lang="scss">

.layout-default {
  width: 100%;
  height: 100vh;
}
</style>

