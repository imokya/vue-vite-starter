<script setup>
import { onMounted } from 'vue'
import { getData } from '@/api/demo'
</script>

<template>
  <div class="page home">
    <img src="@/assets/avatar.jpg" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-color: blueviolet;
  overflow: hidden;
}
</style>
