import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Notification } from '@/types'
import { mockNotifications } from '@/utils/mockData'

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref<Notification[]>([...mockNotifications])

  // Computed
  const unreadCount = computed(() =>
    notifications.value.filter(n => !n.read).length
  )

  const unreadNotifications = computed(() =>
    notifications.value.filter(n => !n.read)
  )

  // Mark as read
  const markAsRead = (notificationId: string) => {
    const notification = notifications.value.find(n => n.id === notificationId)
    if (notification) {
      notification.read = true
    }
  }

  // Mark all as read
  const markAllAsRead = () => {
    notifications.value.forEach(n => {
      n.read = true
    })
  }

  // Delete notification
  const deleteNotification = (notificationId: string) => {
    const index = notifications.value.findIndex(n => n.id === notificationId)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  }

  // Add notification (for demo purposes)
  const addNotification = (notification: Notification) => {
    notifications.value.unshift(notification)
  }

  return {
    notifications,
    unreadCount,
    unreadNotifications,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    addNotification,
  }
})
