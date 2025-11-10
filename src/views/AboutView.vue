<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">PersonalMeについて</h1>
    </div>

    <div class="max-w-3xl mx-auto p-8 space-y-8">
      <!-- Hero -->
      <div class="text-center py-12">
        <div class="w-24 h-24 bg-accent-light dark:bg-accent-dark rounded-3xl flex items-center justify-center mx-auto mb-6">
          <span class="text-white font-bold text-5xl">P</span>
        </div>
        <h2 class="text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">PersonalMe</h2>
        <p class="text-xl text-light-text-secondary dark:text-dark-text-secondary">
          あなたらしさを表現する、新しいSNSプラットフォーム
        </p>
      </div>

      <!-- Mission -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border dark:border-dark-border">
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">私たちのミッション</h3>
        <p class="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
          PersonalMeは、一人ひとりの個性を大切にし、自由に自己表現できる場を提供します。
          過度な広告やアルゴリズムに左右されることなく、ユーザー同士が本当につながり合える
          プラットフォームを目指しています。
        </p>
      </div>

      <!-- Features -->
      <div>
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">主な機能</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
            <div class="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h4 class="font-bold text-light-text-primary dark:text-dark-text-primary mb-2">シンプルな投稿</h4>
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              テキスト、画像、動画で簡単に投稿を共有できます
            </p>
          </div>

          <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
            <div class="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 class="font-bold text-light-text-primary dark:text-dark-text-primary mb-2">コミュニティ</h4>
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              共通の興味を持つ人々とつながり、交流できます
            </p>
          </div>

          <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
            <div class="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 class="font-bold text-light-text-primary dark:text-dark-text-primary mb-2">プライバシー</h4>
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              あなたのデータを大切に保護します
            </p>
          </div>

          <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border">
            <div class="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent-light dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h4 class="font-bold text-light-text-primary dark:text-dark-text-primary mb-2">カスタマイズ</h4>
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              テーマやレイアウトを自分好みにカスタマイズ
            </p>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="bg-gradient-to-r from-accent-light to-accent-dark rounded-2xl p-8 text-white">
        <h3 class="text-2xl font-bold mb-6 text-center">PersonalMeの成長</h3>
        <div class="grid grid-cols-3 gap-4 text-center">
          <div>
            <p class="text-4xl font-bold mb-2">10万+</p>
            <p class="text-sm opacity-90">ユーザー</p>
          </div>
          <div>
            <p class="text-4xl font-bold mb-2">500万+</p>
            <p class="text-sm opacity-90">投稿</p>
          </div>
          <div>
            <p class="text-4xl font-bold mb-2">20+</p>
            <p class="text-sm opacity-90">国</p>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">お問い合わせ</h3>
        <p class="text-light-text-secondary dark:text-dark-text-secondary mb-6">
          ご質問やご意見がございましたら、お気軽にお問い合わせください
        </p>
        <RouterLink
          to="/inquiry"
          class="inline-block px-8 py-3 bg-accent-light dark:bg-accent-dark text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
        >
          お問い合わせフォーム
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
