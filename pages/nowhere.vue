<script setup lang="ts">

</script>

<template>
 <table class="tbl">
  <tr>
    <th class="tbl__cell">один</th>
     <th class="tbl__cell">два</th>
     <th class="tbl__cell">три</th>
     <th class="tbl__cell">четыре</th>
   </tr>
   <tr>
     <th class="tbl__cell">пять</th>
     <th class="tbl__cell">шесть</th>
     <th class="tbl__cell">семь</th>
     <th class="tbl__cell">восемь</th>
   </tr>
 </table>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

.tbl{
  color: #f6f6f6;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background: none;

  &__cell{
    width: 200px;
    height: 100px;
    border: 1px solid black;
  }
}
</style>