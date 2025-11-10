<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">通知</h1>
        <button
          v-if="notificationsStore.unreadCount > 0"
          @click="markAllRead"
          class="text-sm text-accent-light dark:text-accent-dark hover:underline"
        >
          すべて既読にする
        </button>
      </div>
    </div>

    <!-- Tabs -->
    <div class="border-b border-light-border dark:border-dark-border flex">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="flex-1 py-4 font-semibold transition-colors relative"
        :class="
          activeTab === tab.id
            ? 'text-accent-light dark:text-accent-dark'
            : 'text-light-text-muted dark:text-dark-text-muted hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary'
        "
      >
        {{ tab.label }}
        <div
          v-if="activeTab === tab.id"
          class="absolute bottom-0 left-0 right-0 h-1 bg-accent-light dark:bg-accent-dark"
        ></div>
      </button>
    </div>

    <!-- Notifications list -->
    <div>
      <div v-if="displayedNotifications.length === 0" class="p-8 text-center text-light-text-muted dark:text-dark-text-muted">
        通知はありません
      </div>

      <NotificationItem
        v-for="notification in displayedNotifications"
        :key="notification.id"
        :notification="notification"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import NotificationItem from '@/components/NotificationItem.vue'
import { useNotificationsStore } from '@/stores/notifications'

const notificationsStore = useNotificationsStore()
const activeTab = ref('all')

const tabs = [
  { id: 'all', label: 'すべて' },
  { id: 'unread', label: '未読' },
]

const displayedNotifications = computed(() => {
  if (activeTab.value === 'unread') {
    return notificationsStore.unreadNotifications
  }
  return notificationsStore.notifications
})

const markAllRead = () => {
  notificationsStore.markAllAsRead()
}
</script>
