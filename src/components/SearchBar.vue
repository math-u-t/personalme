<template>
  <div class="relative">
    <div class="relative">
      <svg
        class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-text-muted dark:text-dark-text-muted"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        v-model="query"
        type="text"
        placeholder="検索..."
        class="w-full pl-12 pr-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary placeholder-light-text-muted dark:placeholder-dark-text-muted rounded-full focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
        @focus="showResults = true"
        @blur="hideResults"
        @keyup.enter="handleSearch"
      />
    </div>

    <!-- Quick results dropdown -->
    <div
      v-if="showResults && query.trim()"
      class="absolute top-full left-0 right-0 mt-2 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl shadow-lg border border-light-border dark:border-dark-border overflow-hidden z-10"
    >
      <div class="p-2">
        <button
          @mousedown.prevent="handleSearch"
          class="w-full px-4 py-2 text-left hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary rounded-lg transition-colors"
        >
          <span class="text-light-text-primary dark:text-dark-text-primary">
            "{{ query }}" を検索
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const query = ref('')
const showResults = ref(false)

let hideTimeout: number

const hideResults = () => {
  hideTimeout = window.setTimeout(() => {
    showResults.value = false
  }, 200)
}

const handleSearch = () => {
  if (!query.value.trim()) return

  clearTimeout(hideTimeout)
  showResults.value = false
  router.push(`/search?q=${encodeURIComponent(query.value)}`)
}
</script>
