<template>
  <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4">
    <div class="flex gap-3">
      <UserAvatar
        v-if="authStore.user"
        :avatar="authStore.user.avatar"
        size="md"
      />
      <div class="flex-1">
        <textarea
          v-model="content"
          placeholder="今何してる？"
          class="w-full bg-transparent text-light-text-primary dark:text-dark-text-primary placeholder-light-text-muted dark:placeholder-dark-text-muted text-lg resize-none focus:outline-none"
          :rows="rows"
          @input="adjustHeight"
        ></textarea>

        <!-- Image previews -->
        <div v-if="imageUrls.length > 0" class="mt-3 grid grid-cols-2 gap-2">
          <div
            v-for="(url, index) in imageUrls"
            :key="index"
            class="relative rounded-lg overflow-hidden"
          >
            <img :src="url" :alt="`Preview ${index + 1}`" class="w-full h-32 object-cover" />
            <button
              @click="removeImage(index)"
              class="absolute top-1 right-1 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between mt-3 pt-3 border-t border-light-border dark:border-dark-border">
          <div class="flex items-center gap-2">
            <!-- Image upload -->
            <button
              @click="triggerFileInput"
              class="p-2 text-accent-light dark:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 rounded-full transition-colors"
              aria-label="画像を追加"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              multiple
              class="hidden"
              @change="handleFileSelect"
            />

            <span class="text-sm text-light-text-muted dark:text-dark-text-muted">
              {{ content.length }} / 280
            </span>
          </div>

          <button
            @click="handlePost"
            :disabled="!canPost"
            class="px-4 py-2 bg-accent-light dark:bg-accent-dark text-white rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            投稿
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import UserAvatar from './UserAvatar.vue'
import { useAuthStore } from '@/stores/auth'
import { usePostsStore } from '@/stores/posts'

const authStore = useAuthStore()
const postsStore = usePostsStore()

const content = ref('')
const imageUrls = ref<string[]>([])
const fileInput = ref<HTMLInputElement>()
const rows = ref(3)

const canPost = computed(() => {
  return content.value.trim().length > 0 && content.value.length <= 280
})

const adjustHeight = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  const lineHeight = 24
  const lines = textarea.value.split('\n').length
  rows.value = Math.min(Math.max(lines, 3), 10)
}

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (!files) return

  Array.from(files).forEach((file) => {
    if (imageUrls.value.length >= 4) return

    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        imageUrls.value.push(e.target.result as string)
      }
    }
    reader.readAsDataURL(file)
  })

  target.value = ''
}

const removeImage = (index: number) => {
  imageUrls.value.splice(index, 1)
}

const handlePost = () => {
  if (!canPost.value) return

  postsStore.createPost(content.value, imageUrls.value)
  content.value = ''
  imageUrls.value = []
  rows.value = 3
}
</script>
