<template>
  <div
    class="p-4 border-b border-light-border dark:border-dark-border hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors cursor-pointer"
    :class="{ 'bg-accent-light/5 dark:bg-accent-dark/5': !notification.read }"
    @click="handleClick"
  >
    <div class="flex gap-3">
      <!-- Icon -->
      <div class="flex-shrink-0">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center"
          :class="iconBgClass"
        >
          <svg class="w-5 h-5" :class="iconColorClass" fill="currentColor" viewBox="0 0 20 20">
            <path v-if="notification.type === 'like'" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            <path v-else-if="notification.type === 'repost'" fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
            <path v-else-if="notification.type === 'comment'" fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
            <path v-else-if="notification.type === 'follow'" d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            <path v-else d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <UserAvatar
            :avatar="notification.fromUser?.avatar || ''"
            :show-verified="notification.fromUser?.isVerified"
            size="xs"
          />
          <span class="font-semibold text-light-text-primary dark:text-dark-text-primary text-sm">
            {{ notification.fromUser?.displayName }}
          </span>
        </div>

        <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-1">
          {{ notificationText }}
        </p>

        <p v-if="notification.content" class="text-sm text-light-text-muted dark:text-dark-text-muted">
          {{ notification.content }}
        </p>

        <span class="text-xs text-light-text-muted dark:text-dark-text-muted">
          {{ formatDate(notification.createdAt) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { Notification } from '@/types'
import UserAvatar from './UserAvatar.vue'
import { useNotificationsStore } from '@/stores/notifications'

interface Props {
  notification: Notification
}

const props = defineProps<Props>()
const router = useRouter()
const notificationsStore = useNotificationsStore()

const notificationText = computed(() => {
  switch (props.notification.type) {
    case 'like':
      return 'があなたの投稿にいいねしました'
    case 'repost':
      return 'があなたの投稿をリポストしました'
    case 'comment':
      return 'があなたの投稿にコメントしました'
    case 'follow':
      return 'があなたをフォローしました'
    case 'mention':
      return 'があなたをメンションしました'
    default:
      return ''
  }
})

const iconBgClass = computed(() => {
  const classes = {
    like: 'bg-red-100 dark:bg-red-900/20',
    repost: 'bg-green-100 dark:bg-green-900/20',
    comment: 'bg-blue-100 dark:bg-blue-900/20',
    follow: 'bg-purple-100 dark:bg-purple-900/20',
    mention: 'bg-yellow-100 dark:bg-yellow-900/20',
  }
  return classes[props.notification.type]
})

const iconColorClass = computed(() => {
  const classes = {
    like: 'text-red-500',
    repost: 'text-green-500',
    comment: 'text-blue-500',
    follow: 'text-purple-500',
    mention: 'text-yellow-500',
  }
  return classes[props.notification.type]
})

const formatDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - new Date(date).getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (minutes < 1) return 'たった今'
  if (minutes < 60) return `${minutes}分前`
  if (hours < 24) return `${hours}時間前`
  return `${days}日前`
}

const handleClick = () => {
  notificationsStore.markAsRead(props.notification.id)

  if (props.notification.type === 'follow') {
    router.push(`/profile/${props.notification.fromUserId}`)
  } else {
    router.push(`/post/${props.notification.targetId}`)
  }
}
</script>
