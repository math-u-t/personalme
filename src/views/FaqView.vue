<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">よくある質問</h1>
    </div>

    <div class="max-w-3xl mx-auto p-8 space-y-4">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl border border-light-border dark:border-dark-border overflow-hidden"
      >
        <button
          @click="toggleFaq(index)"
          class="w-full p-6 text-left flex items-center justify-between hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors"
        >
          <h3 class="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary pr-4">
            {{ faq.question }}
          </h3>
          <svg
            class="w-5 h-5 text-light-text-muted dark:text-dark-text-muted transition-transform flex-shrink-0"
            :class="openFaq === index ? 'rotate-180' : ''"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          v-if="openFaq === index"
          class="px-6 pb-6 text-light-text-secondary dark:text-dark-text-secondary"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openFaq = ref<number | null>(null)

const faqs = [
  {
    question: 'PersonalMeとは何ですか？',
    answer: 'PersonalMeは、個人の表現を大切にする新しいSNSプラットフォームです。テキスト、画像、動画を通じて自由に自己表現し、同じ興味を持つ人々とつながることができます。',
  },
  {
    question: 'アカウントの作成は無料ですか？',
    answer: 'はい、PersonalMeのアカウント作成は完全無料です。基本的なすべての機能を無料でご利用いただけます。',
  },
  {
    question: '投稿を削除することはできますか？',
    answer: 'はい、自分の投稿はいつでも削除できます。投稿の詳細ページから削除オプションを選択してください。',
  },
  {
    question: 'プライバシー設定はどこで変更できますか？',
    answer: '設定ページからプライバシー設定を変更できます。アカウントの公開範囲、投稿の表示設定などをカスタマイズできます。',
  },
  {
    question: '不適切なコンテンツを報告するにはどうすればよいですか？',
    answer: '各投稿のメニューから「報告」オプションを選択してください。私たちのモデレーションチームが迅速に対応いたします。',
  },
  {
    question: 'ダークモードに切り替えるにはどうすればよいですか？',
    answer: 'サイドバーまたは設定ページからダークモード/ライトモードを切り替えることができます。お好みに合わせて選択してください。',
  },
  {
    question: 'フォローとフォロワーの違いは何ですか？',
    answer: 'フォローはあなたが他のユーザーの投稿を見るために登録することです。フォロワーはあなたの投稿を見るために登録している人々です。',
  },
  {
    question: 'アカウントを削除するにはどうすればよいですか？',
    answer: '設定ページの「アカウント」セクションからアカウントの削除を申請できます。削除後、すべてのデータは完全に削除されます。',
  },
]

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>
