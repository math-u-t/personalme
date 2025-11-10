<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">開発者向け情報</h1>
    </div>

    <div class="max-w-4xl mx-auto p-8 space-y-8">
      <!-- Hero -->
      <div class="text-center py-8">
        <h2 class="text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">PersonalMe API</h2>
        <p class="text-xl text-light-text-secondary dark:text-dark-text-secondary">
          強力なAPIで、あなたのアプリケーションとPersonalMeを連携させよう
        </p>
      </div>

      <!-- API Overview -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border dark:border-dark-border">
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">API概要</h3>
        <p class="text-light-text-secondary dark:text-dark-text-secondary mb-4">
          PersonalMe APIを使用すると、投稿の作成、ユーザー情報の取得、タイムラインの読み込みなど、
          さまざまな機能をプログラムから利用できます。
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div class="text-center p-4">
            <p class="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">REST</p>
            <p class="text-sm text-light-text-muted dark:text-dark-text-muted">RESTful API</p>
          </div>
          <div class="text-center p-4">
            <p class="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">OAuth 2.0</p>
            <p class="text-sm text-light-text-muted dark:text-dark-text-muted">安全な認証</p>
          </div>
          <div class="text-center p-4">
            <p class="text-3xl font-bold text-accent-light dark:text-accent-dark mb-2">JSON</p>
            <p class="text-sm text-light-text-muted dark:text-dark-text-muted">シンプルなデータ形式</p>
          </div>
        </div>
      </div>

      <!-- Endpoints -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border dark:border-dark-border">
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">主なエンドポイント</h3>
        <div class="space-y-4">
          <div class="border border-light-border dark:border-dark-border rounded-lg p-4">
            <div class="flex items-center gap-3 mb-2">
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded text-sm font-semibold">GET</span>
              <code class="text-light-text-primary dark:text-dark-text-primary">/api/v1/posts</code>
            </div>
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">タイムラインの投稿を取得</p>
          </div>

          <div class="border border-light-border dark:border-dark-border rounded-lg p-4">
            <div class="flex items-center gap-3 mb-2">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded text-sm font-semibold">POST</span>
              <code class="text-light-text-primary dark:text-dark-text-primary">/api/v1/posts</code>
            </div>
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">新しい投稿を作成</p>
          </div>

          <div class="border border-light-border dark:border-dark-border rounded-lg p-4">
            <div class="flex items-center gap-3 mb-2">
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded text-sm font-semibold">GET</span>
              <code class="text-light-text-primary dark:text-dark-text-primary">/api/v1/users/:id</code>
            </div>
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">ユーザー情報を取得</p>
          </div>

          <div class="border border-light-border dark:border-dark-border rounded-lg p-4">
            <div class="flex items-center gap-3 mb-2">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded text-sm font-semibold">POST</span>
              <code class="text-light-text-primary dark:text-dark-text-primary">/api/v1/posts/:id/like</code>
            </div>
            <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary">投稿にいいねする</p>
          </div>
        </div>
      </div>

      <!-- Code Example -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border dark:border-dark-border">
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">サンプルコード</h3>
        <pre class="bg-dark-bg-primary text-dark-text-primary p-4 rounded-lg overflow-x-auto"><code>// 投稿を取得
fetch('https://api.personalme.app/v1/posts', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))

// 投稿を作成
fetch('https://api.personalme.app/v1/posts', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: 'Hello, PersonalMe!'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))</code></pre>
      </div>

      <!-- Resources -->
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 border border-light-border dark:border-dark-border">
        <h3 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">リソース</h3>
        <div class="space-y-3">
          <a href="#" class="block p-4 border border-light-border dark:border-dark-border rounded-lg hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold text-light-text-primary dark:text-dark-text-primary">API ドキュメント</p>
                <p class="text-sm text-light-text-muted dark:text-dark-text-muted">完全なAPIリファレンス</p>
              </div>
              <svg class="w-5 h-5 text-light-text-muted dark:text-dark-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          <a href="#" class="block p-4 border border-light-border dark:border-dark-border rounded-lg hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold text-light-text-primary dark:text-dark-text-primary">SDK & ライブラリ</p>
                <p class="text-sm text-light-text-muted dark:text-dark-text-muted">JavaScript, Python, Ruby など</p>
              </div>
              <svg class="w-5 h-5 text-light-text-muted dark:text-dark-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          <a href="#" class="block p-4 border border-light-border dark:border-dark-border rounded-lg hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-semibold text-light-text-primary dark:text-dark-text-primary">開発者フォーラム</p>
                <p class="text-sm text-light-text-muted dark:text-dark-text-muted">コミュニティで質問＆議論</p>
              </div>
              <svg class="w-5 h-5 text-light-text-muted dark:text-dark-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
