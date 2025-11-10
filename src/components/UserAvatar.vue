<template>
  <div class="relative inline-block">
    <img
      :src="avatar"
      :alt="alt"
      :class="[
        'rounded-full object-cover',
        sizeClasses,
        'ring-2 dark:ring-dark-border ring-light-border',
        'transition-transform duration-200 hover:scale-105',
      ]"
    />
    <div
      v-if="showVerified"
      class="absolute -bottom-0.5 -right-0.5 bg-accent-light dark:bg-accent-dark rounded-full p-0.5"
      :class="verifiedSizeClasses"
    >
      <svg
        class="w-full h-full text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  avatar: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showVerified?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'User avatar',
  size: 'md',
  showVerified: false,
})

const sizeClasses = computed(() => {
  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }
  return sizes[props.size]
})

const verifiedSizeClasses = computed(() => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  }
  return sizes[props.size]
})
</script>
