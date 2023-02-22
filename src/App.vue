<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const onMenuClick = (path) => {
  router.push({ name: path })
}
</script>

<template>
  <div class="app">
    <nav>
      <ul>
        <li><a href="#" @click.prevent="onMenuClick('home')">Home</a></li>
        <li><a href="#" @click.prevent="onMenuClick('about')">About</a></li>
        <li><a href="#" @click.prevent="onMenuClick('contact')">Contact</a></li>
      </ul>
    </nav>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 2;
  margin: 20px;
}

ul li {
  font-size: 14px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  margin: 0 10px;
  a {
    color: #fff;
  }
}
</style>
