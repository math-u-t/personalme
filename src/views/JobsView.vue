<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">採用情報</h1>
    </div>

    <div class="max-w-4xl mx-auto p-8 space-y-8">
      <!-- Hero -->
      <div class="text-center py-8">
        <h2 class="text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
          一緒にPersonalMeを作りませんか？
        </h2>
        <p class="text-xl text-light-text-secondary dark:text-dark-text-secondary">
          私たちは、情熱的で才能あふれる仲間を募集しています
        </p>
      </div>

      <!-- Culture -->
      <div class="bg-gradient-to-r from-accent-light to-accent-dark rounded-2xl p-8 text-white">
        <h3 class="text-2xl font-bold mb-4">私たちの文化</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 class="font-bold mb-2">🚀 イノベーション</h4>
            <p class="text-sm opacity-90">新しいアイデアを歓迎し、挑戦を奨励します</p>
          </div>
          <div>
            <h4 class="font-bold mb-2">🤝 協力</h4>
            <p class="text-sm opacity-90">チームワークを大切にし、互いに支え合います</p>
          </div>
          <div>
            <h4 class="font-bold mb-2">📈 成長</h4>
            <p class="text-sm opacity-90">個人の成長と学習をサポートします</p>
          </div>
        </div>
      </div>

      <!-- Open Positions -->
      <div>
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">募集中のポジション</h3>
        <div class="space-y-4">
          <div
            v-for="job in jobs"
            :key="job.id"
            class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl p-6 border border-light-border dark:border-dark-border hover:border-accent-light dark:hover:border-accent-dark transition-colors cursor-pointer"
          >
            <div class="flex items-start justify-between mb-3">
              <div>
                <h4 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2">
                  {{ job.title }}
                </h4>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm">
                    {{ job.department }}
                  </span>
                  <span class="px-3 py-1 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-secondary dark:text-dark-text-secondary rounded-full text-sm">
                    {{ job.location }}
                  </span>
                  <span class="px-3 py-1 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-secondary dark:text-dark-text-secondary rounded-full text-sm">
                    {{ job.type }}
                  </span>
                </div>
              </div>
            </div>
            <p class="text-light-text-secondary dark:text-dark-text-secondary mb-4">
              {{ job.description }}
            </p>
            <button class="px-6 py-2 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              詳細を見る
            </button>
          </div>
        </div>
      </div>

      <!-- Benefits -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border dark:border-dark-border">
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">福利厚生</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
              💰
            </div>
            <div>
              <h4 class="font-bold text-light-text-primary dark:text-dark-text-primary mb-1">競争力のある給与</h4>
              <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                業界トップクラスの給与とストックオプション
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
              🏥
            </div>
            <div>
              <h4 class="font-bold text-light-text-primary dark:text-dark-text-primary mb-1">健康保険</h4>
              <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                充実した健康保険とウェルネスプログラム
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
              🏠
            </div>
            <div>
              <h4 class="font-bold text-light-text-primary dark:text-dark-text-primary mb-1">リモートワーク</h4>
              <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                完全リモート、またはハイブリッドワークに対応
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
              📚
            </div>
            <div>
              <h4 class="font-bold text-light-text-primary dark:text-dark-text-primary mb-1">学習支援</h4>
              <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                書籍購入、カンファレンス参加費の補助
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
          まずはお話ししませんか？
        </h3>
        <p class="text-light-text-secondary dark:text-dark-text-secondary mb-6">
          募集中のポジションがない場合でも、お気軽にご連絡ください
        </p>
        <RouterLink
          to="/inquiry"
          class="inline-block px-8 py-3 bg-accent-light dark:bg-accent-dark text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
        >
          お問い合わせ
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const jobs = [
  {
    id: 1,
    title: 'シニアフロントエンドエンジニア',
    department: 'エンジニアリング',
    location: '東京 / リモート',
    type: 'フルタイム',
    description: 'Vue.js、React、TypeScriptを使用してユーザー体験を向上させるフロントエンドエンジニアを募集しています。',
  },
  {
    id: 2,
    title: 'バックエンドエンジニア',
    department: 'エンジニアリング',
    location: 'リモート',
    type: 'フルタイム',
    description: 'スケーラブルなAPIとマイクロサービスの設計・実装を担当するバックエンドエンジニアを募集しています。',
  },
  {
    id: 3,
    title: 'プロダクトデザイナー',
    department: 'デザイン',
    location: '東京 / リモート',
    type: 'フルタイム',
    description: 'ユーザー中心の設計とビジュアルデザインでプロダクトを形作るデザイナーを募集しています。',
  },
  {
    id: 4,
    title: 'プロダクトマネージャー',
    department: 'プロダクト',
    location: '東京',
    type: 'フルタイム',
    description: 'プロダクトのビジョンを描き、チームを導くプロダクトマネージャーを募集しています。',
  },
]
</script>
