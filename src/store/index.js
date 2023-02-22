import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'david',
    balance: 1000
  }),
  actions: {
    increment() {
      this.balance += 10
    }
  }
})
