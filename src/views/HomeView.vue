<script setup>
import { onMounted } from 'vue'
import { createArticle } from '@/api/article'

const onCreateArticle = async () => {
  const res = await createArticle({
    title: '这是新增文章标题'
  })
  console.log(res)
}
</script>

<template>
  <div class="page home">
    <button class="btn-add" @click="onCreateArticle">添加文章</button>
    <img src="@/assets/avatar.jpg" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-color: blueviolet;
  overflow: hidden;
  position: relative;
}
.btn-add {
  font-size: 14px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  margin: 0 10px;
  position: absolute;
  background: transparent;
  top: 100px;
  left: 20px;
}
</style>
