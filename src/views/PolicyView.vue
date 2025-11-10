<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <h1 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">プライバシーポリシー</h1>
    </div>

    <div class="max-w-3xl mx-auto p-8 space-y-8 text-light-text-secondary dark:text-dark-text-secondary">
      <div class="text-sm text-light-text-muted dark:text-dark-text-muted">
        最終更新日: 2024年1月1日
      </div>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">1. はじめに</h2>
        <p class="mb-4">
          PersonalMe（以下「当社」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
          本プライバシーポリシーは、当社がどのように個人情報を収集、使用、保護するかについて説明します。
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">2. 収集する情報</h2>
        <p class="mb-4">当社は以下の情報を収集する場合があります：</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>アカウント情報（ユーザー名、メールアドレス、パスワード）</li>
          <li>プロフィール情報（表示名、自己紹介、プロフィール画像）</li>
          <li>投稿コンテンツ（テキスト、画像、動画）</li>
          <li>利用情報（アクセスログ、クリック情報、デバイス情報）</li>
          <li>コミュニケーション情報（メッセージ、コメント）</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">3. 情報の使用目的</h2>
        <p class="mb-4">収集した情報は以下の目的で使用されます：</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>サービスの提供と改善</li>
          <li>ユーザーサポートの提供</li>
          <li>セキュリティの維持と不正行為の防止</li>
          <li>新機能やアップデートの通知</li>
          <li>利用状況の分析とサービス最適化</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">4. 情報の共有</h2>
        <p class="mb-4">
          当社は、法律で義務付けられている場合、またはユーザーの同意がある場合を除き、
          個人情報を第三者と共有しません。以下の場合に限り情報を共有することがあります：
        </p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>法的要請に応じる場合</li>
          <li>サービス提供に必要な業務委託先（厳格な契約の下）</li>
          <li>企業の合併、買収、資産譲渡の場合</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">5. セキュリティ</h2>
        <p class="mb-4">
          当社は、個人情報を保護するために適切な技術的および組織的措置を講じています。
          しかし、インターネット上での情報伝送は完全に安全とは言えないため、
          絶対的なセキュリティを保証することはできません。
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">6. Cookieの使用</h2>
        <p class="mb-4">
          当社のサービスは、ユーザー体験を向上させるためにCookieやそれに類する技術を使用します。
          ユーザーはブラウザの設定でCookieを無効にすることができますが、
          一部の機能が正常に動作しなくなる可能性があります。
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">7. ユーザーの権利</h2>
        <p class="mb-4">ユーザーには以下の権利があります：</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>個人情報へのアクセスと確認</li>
          <li>個人情報の訂正または更新</li>
          <li>個人情報の削除（アカウント削除）</li>
          <li>データのポータビリティ</li>
          <li>マーケティング通信のオプトアウト</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">8. 子どものプライバシー</h2>
        <p class="mb-4">
          当社のサービスは13歳未満の子どもを対象としておらず、
          意図的に13歳未満の子どもから個人情報を収集することはありません。
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">9. ポリシーの変更</h2>
        <p class="mb-4">
          当社は、本プライバシーポリシーを随時更新する権利を有します。
          重要な変更がある場合は、サービス上で通知します。
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">10. お問い合わせ</h2>
        <p class="mb-4">
          プライバシーポリシーに関するご質問やご懸念がある場合は、
          <RouterLink to="/inquiry" class="text-accent-light dark:text-accent-dark hover:underline">お問い合わせフォーム</RouterLink>
          からご連絡ください。
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
