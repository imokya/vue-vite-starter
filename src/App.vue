<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'

const router = useRouter()
const userStore = useUserStore()

const onMenuClick = (path) => {
  router.push({ name: path, replace: true })
}
</script>

<template>
  <div class="ui">
    <nav>
      <ul>
        <li><a href="#" @click.prevent="onMenuClick('home')">Home</a></li>
        <li><a href="#" @click.prevent="onMenuClick('about')">About</a></li>
        <li><a href="#" @click.prevent="onMenuClick('contact')">Contact</a></li>
      </ul>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}
.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 3s ease-out;
}

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
