import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '@/types'
import { currentUser } from '@/utils/mockData'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => user.value !== null)

  // Initialize with mock user (in real app, check token/session)
  const initAuth = () => {
    // Simulate checking authentication
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (isLoggedIn) {
      user.value = currentUser
    }
  }

  // Login (mock)
  const login = async (username: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    user.value = currentUser
    localStorage.setItem('isLoggedIn', 'true')
    return true
  }

  // Logout
  const logout = () => {
    user.value = null
    localStorage.removeItem('isLoggedIn')
  }

  // Update profile
  const updateProfile = (updates: Partial<User>) => {
    if (user.value) {
      user.value = { ...user.value, ...updates }
    }
  }

  return {
    user,
    isAuthenticated,
    initAuth,
    login,
    logout,
    updateProfile,
  }
})
