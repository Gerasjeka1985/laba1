<script setup lang="ts">
const props = defineProps<{
  foxes: string[];
}>()

</script>

<template>
  <section class="card" v-for="fox in foxes" :id="fox.link">
    <div class="card__image">
      <img :src="fox.image" alt="#">
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

//стили для мобильной версии

@include breakpoint(large) {
  .card{
    margin: 10px;
    width: 350px;
    height: 450px;
    border: 1px solid orange;
    box-shadow: -13px 16px 17px rgba(0, 0, 0, 0.66);
    transition: 0.3s ease-in-out;

    &:hover{
      width: 550px;
      height: 650px;
    }

    &__image{
      width: 100%;
      height: 100%;

      & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>