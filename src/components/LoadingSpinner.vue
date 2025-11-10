<template>
  <div class="flex justify-center items-center" :class="containerClass">
    <div
      class="animate-spin rounded-full border-t-2 border-b-2"
      :class="[sizeClass, colorClass]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  color?: 'accent' | 'white'
  containerClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'accent',
  containerClass: 'p-4',
})

const sizeClass = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }
  return sizes[props.size]
})

const colorClass = computed(() => {
  const colors = {
    accent: 'border-accent-light dark:border-accent-dark',
    white: 'border-white',
  }
  return colors[props.color]
})
</script>
