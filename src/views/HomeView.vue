<script setup>
import { onMounted } from 'vue'
import { createArticle } from '@/api/article'
import { useUserStore } from '@/store'

const userStore = useUserStore()
const increment = () => {
  userStore.increment()
}
</script>

<template>
  <div class="page home">
    <div class="container">
      <div class="counter">count: {{ userStore.count }}</div>
      <button class="btn-add" @click="increment">增加计数</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/css/mixins.scss';
.home {
  background-color: blueviolet;
  overflow: hidden;
  position: relative;
}
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}
.btn-add {
  font-size: 14px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  background: transparent;
  top: 70px;
  left: 20px;
}
</style>
