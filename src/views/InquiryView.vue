<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">お問い合わせ</h1>
    </div>

    <div class="max-w-2xl mx-auto p-8">
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border dark:border-dark-border">
        <p class="text-light-text-secondary dark:text-dark-text-secondary mb-6">
          ご質問、ご意見、ご要望などがございましたら、下記のフォームからお気軽にお問い合わせください。
          できるだけ早くご返信いたします。
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              お名前 <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
              placeholder="山田太郎"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              メールアドレス <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              お問い合わせの種類 <span class="text-red-500">*</span>
            </label>
            <select
              v-model="form.category"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
            >
              <option value="">選択してください</option>
              <option value="general">一般的な質問</option>
              <option value="technical">技術的な問題</option>
              <option value="account">アカウントについて</option>
              <option value="report">不適切なコンテンツの報告</option>
              <option value="feature">機能のリクエスト</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              件名 <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
              placeholder="お問い合わせの件名"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              お問い合わせ内容 <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model="form.message"
              required
              rows="6"
              class="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-lg border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark resize-none"
              placeholder="詳しくお聞かせください..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full py-3 bg-accent-light dark:bg-accent-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {{ loading ? '送信中...' : '送信する' }}
          </button>
        </form>

        <div v-if="submitted" class="mt-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-500 rounded-lg">
          <p class="text-green-700 dark:text-green-400">
            お問い合わせありがとうございます。確認後、ご連絡させていただきます。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const submitted = ref(false)

const form = ref({
  name: '',
  email: '',
  category: '',
  subject: '',
  message: '',
})

const handleSubmit = async () => {
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false
  submitted.value = true

  // Reset form
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      category: '',
      subject: '',
      message: '',
    }
    submitted.value = false
  }, 3000)
}
</script>
