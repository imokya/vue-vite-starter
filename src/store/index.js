import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'david',
    count: 0
  }),
  actions: {
    increment() {
      this.count += 1
    }
  }
})
