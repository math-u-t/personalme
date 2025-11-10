<template>
  <div class="min-h-screen">
    <!-- Post composer -->
    <PostComposer />

    <!-- Posts feed -->
    <div>
      <PostCard
        v-for="post in postsStore.posts"
        :key="post.id"
        :post="post"
      />
    </div>

    <!-- Load more -->
    <div v-if="postsStore.hasMore" class="p-4">
      <button
        v-if="!postsStore.loading"
        @click="loadMore"
        class="w-full py-3 text-accent-light dark:text-accent-dark hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary rounded-lg transition-colors"
      >
        さらに読み込む
      </button>
      <LoadingSpinner v-else />
    </div>

    <div v-else class="p-8 text-center text-light-text-muted dark:text-dark-text-muted">
      すべての投稿を読み込みました
    </div>
  </div>
</template>

<script setup lang="ts">
import PostComposer from '@/components/PostComposer.vue'
import PostCard from '@/components/PostCard.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { usePostsStore } from '@/stores/posts'

const postsStore = usePostsStore()

const loadMore = () => {
  postsStore.loadMorePosts()
}
</script>
