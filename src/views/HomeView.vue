<script setup>
import { onMounted } from 'vue'
import { getData } from '@/api/demo'

onMounted(async () => {
  const res = await getData()
  console.log(res)
})
</script>

<template>
  <div class="page home">Home View</div>
</template>

<style lang="scss" scoped>
.home {
  background-color: blueviolet;
}
</style>
