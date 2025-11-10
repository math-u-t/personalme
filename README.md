# PersonalMe

PersonalMeは、Vue 3、Vite、TypeScriptで構築された現代的な個人投稿型SNSプラットフォームです。美しいUI、スムーズなアニメーション、そして充実した機能を備えています。

![PersonalMe](https://via.placeholder.com/1200x600/3b82f6/ffffff?text=PersonalMe)

## 🚀 主な機能

- ✨ **モダンUI**: ダークモード/ライトモード対応、スムーズなトランジション
- 📱 **レスポンシブデザイン**: モバイル、タブレット、デスクトップに完全対応
- 🎨 **Tailwind CSS**: ユーティリティファーストのスタイリング
- ⚡ **高速**: Viteによる超高速な開発体験
- 🔐 **型安全**: TypeScriptによる堅牢な型チェック
- 🎯 **状態管理**: Piniaによる効率的な状態管理
- 🧩 **コンポーネント指向**: 再利用可能なコンポーネント設計

## 📋 目次

- [セットアップ](#セットアップ)
- [ディレクトリ構造](#ディレクトリ構造)
- [技術スタック](#技術スタック)
- [ページ一覧](#ページ一覧)
- [コンポーネント仕様](#コンポーネント仕様)
- [状態管理](#状態管理)
- [デザインシステム](#デザインシステム)
- [開発ガイドライン](#開発ガイドライン)
- [ビルド・デプロイ](#ビルドデプロイ)
- [トラブルシューティング](#トラブルシューティング)

## 🛠 セットアップ

### 必要な環境

- Node.js 18.0 以上
- npm 9.0 以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/personalme.git
cd personalme

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてください。

### その他のコマンド

```bash
# TypeScriptの型チェック
npm run type-check

# プロダクションビルド
npm run build

# プロダクションプレビュー
npm run preview
```

## 📁 ディレクトリ構造

```
personalme/
├── public/              # 静的ファイル
├── src/
│   ├── assets/         # CSS、画像などのアセット
│   │   └── main.css    # メインスタイルシート
│   ├── components/     # 再利用可能なコンポーネント
│   │   ├── CommentSection.vue
│   │   ├── LoadingSpinner.vue
│   │   ├── NavigationBar.vue
│   │   ├── NotificationItem.vue
│   │   ├── PostCard.vue
│   │   ├── PostComposer.vue
│   │   ├── SearchBar.vue
│   │   ├── Sidebar.vue
│   │   ├── ThemeToggle.vue
│   │   ├── TrendingTopics.vue
│   │   └── UserAvatar.vue
│   ├── router/         # ルーティング設定
│   │   └── index.ts
│   ├── stores/         # Pinia状態管理
│   │   ├── auth.ts
│   │   ├── notifications.ts
│   │   ├── posts.ts
│   │   └── theme.ts
│   ├── types/          # TypeScript型定義
│   │   └── index.ts
│   ├── utils/          # ユーティリティ関数
│   │   └── mockData.ts
│   ├── views/          # ページコンポーネント
│   │   ├── AboutView.vue
│   │   ├── DevsView.vue
│   │   ├── ErrorView.vue
│   │   ├── FaqView.vue
│   │   ├── HomeView.vue
│   │   ├── InquiryView.vue
│   │   ├── JobsView.vue
│   │   ├── LoginView.vue
│   │   ├── NotificationsView.vue
│   │   ├── PolicyView.vue
│   │   ├── PostCreateView.vue
│   │   ├── PostDetailView.vue
│   │   ├── ProfileView.vue
│   │   ├── SearchView.vue
│   │   ├── SettingsView.vue
│   │   ├── StatsView.vue
│   │   ├── TermsView.vue
│   │   └── TrendingView.vue
│   ├── App.vue         # ルートコンポーネント
│   └── main.ts         # エントリーポイント
├── index.html
├── package.json
├── tailwind.config.js  # Tailwind CSS設定
├── tsconfig.json       # TypeScript設定
├── vite.config.ts      # Vite設定
└── README.md
```

## 🔧 技術スタック

- **フレームワーク**: Vue 3 (Composition API)
- **ビルドツール**: Vite 5
- **言語**: TypeScript
- **ルーティング**: Vue Router 4
- **状態管理**: Pinia 2
- **スタイリング**: Tailwind CSS 3
- **アイコン**: Heroicons (SVG)

## 📄 ページ一覧

| パス | 説明 | 認証 |
|------|------|------|
| `/` | タイムライン・フィード | 必須 |
| `/login` | ログイン・サインアップ | 不要 |
| `/post` | 投稿作成 | 必須 |
| `/post/:id` | 投稿詳細 | 必須 |
| `/profile/:id` | ユーザープロフィール | 必須 |
| `/notifications` | 通知一覧 | 必須 |
| `/search` | 検索 | 必須 |
| `/trending` | トレンド | 必須 |
| `/stats` | 統計情報 | 必須 |
| `/settings` | 設定 | 必須 |
| `/about` | サービス概要 | 不要 |
| `/faq` | よくある質問 | 不要 |
| `/inquiry` | お問い合わせフォーム | 不要 |
| `/devs` | 開発者向け情報 | 不要 |
| `/jobs` | 採用情報 | 不要 |
| `/policy` | プライバシーポリシー | 不要 |
| `/terms` | 利用規約 | 不要 |
| `/error` | エラーページ (404) | 不要 |

## 🧩 コンポーネント仕様

### UserAvatar

ユーザーのアバター画像を表示するコンポーネント。

**Props:**
- `avatar` (string, required): アバター画像のURL
- `alt` (string, optional): 代替テキスト
- `size` ('xs' | 'sm' | 'md' | 'lg' | 'xl', optional): サイズ
- `showVerified` (boolean, optional): 認証バッジを表示

**使用例:**
```vue
<UserAvatar
  :avatar="user.avatar"
  :show-verified="user.isVerified"
  size="md"
/>
```

### PostCard

投稿カードを表示するコンポーネント。

**Props:**
- `post` (Post, required): 投稿オブジェクト

**Events:**
- `comment`: コメントボタンがクリックされた時
- `share`: シェアボタンがクリックされた時

**使用例:**
```vue
<PostCard :post="post" @comment="handleComment" @share="handleShare" />
```

### ThemeToggle

ダークモード/ライトモード切り替えトグル。

**使用例:**
```vue
<ThemeToggle />
```

### PostComposer

投稿作成フォーム。

**使用例:**
```vue
<PostComposer />
```

### CommentSection

コメント表示・追加セクション。

**Props:**
- `postId` (string, required): 投稿ID

**使用例:**
```vue
<CommentSection :post-id="post.id" />
```

### TrendingTopics

トレンドトピック一覧。

**使用例:**
```vue
<TrendingTopics />
```

### NotificationItem

通知アイテム。

**Props:**
- `notification` (Notification, required): 通知オブジェクト

**使用例:**
```vue
<NotificationItem :notification="notification" />
```

### SearchBar

検索バー。

**使用例:**
```vue
<SearchBar />
```

### LoadingSpinner

ローディングスピナー。

**Props:**
- `size` ('sm' | 'md' | 'lg', optional): サイズ
- `color` ('accent' | 'white', optional): カラー
- `containerClass` (string, optional): コンテナのクラス

**使用例:**
```vue
<LoadingSpinner size="md" color="accent" />
```

## 📦 状態管理

### useThemeStore

テーマ（ダークモード/ライトモード）の状態を管理。

**State:**
- `isDark` (boolean): ダークモードかどうか

**Actions:**
- `initTheme()`: テーマを初期化（localStorage、システム設定から取得）
- `toggleTheme()`: テーマを切り替え

**使用例:**
```typescript
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
themeStore.toggleTheme()
```

### useAuthStore

認証とユーザー情報の状態を管理。

**State:**
- `user` (User | null): 現在のユーザー
- `isAuthenticated` (computed): 認証済みかどうか

**Actions:**
- `initAuth()`: 認証状態を初期化
- `login(username, password)`: ログイン
- `logout()`: ログアウト
- `updateProfile(updates)`: プロフィール更新

**使用例:**
```typescript
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
await authStore.login('username', 'password')
```

### usePostsStore

投稿の状態を管理。

**State:**
- `posts` (Post[]): 投稿一覧
- `comments` (Comment[]): コメント一覧
- `loading` (boolean): ローディング中かどうか
- `hasMore` (boolean): さらに読み込めるかどうか

**Getters:**
- `getPostById(id)`: IDから投稿を取得
- `getCommentsByPostId(postId)`: 投稿IDからコメントを取得
- `getPostsByUserId(userId)`: ユーザーIDから投稿を取得

**Actions:**
- `createPost(content, images)`: 投稿を作成
- `updatePost(postId, content, images)`: 投稿を更新
- `deletePost(postId)`: 投稿を削除
- `toggleLike(postId)`: いいねを切り替え
- `toggleRepost(postId)`: リポストを切り替え
- `addComment(postId, content)`: コメントを追加
- `toggleCommentLike(commentId)`: コメントのいいねを切り替え
- `loadMorePosts()`: さらに投稿を読み込み
- `searchPosts(query)`: 投稿を検索

**使用例:**
```typescript
import { usePostsStore } from '@/stores/posts'

const postsStore = usePostsStore()
postsStore.createPost('Hello, PersonalMe!', [])
```

### useNotificationsStore

通知の状態を管理。

**State:**
- `notifications` (Notification[]): 通知一覧

**Getters:**
- `unreadCount` (computed): 未読通知数
- `unreadNotifications` (computed): 未読通知一覧

**Actions:**
- `markAsRead(notificationId)`: 既読にする
- `markAllAsRead()`: すべて既読にする
- `deleteNotification(notificationId)`: 通知を削除
- `addNotification(notification)`: 通知を追加

**使用例:**
```typescript
import { useNotificationsStore } from '@/stores/notifications'

const notificationsStore = useNotificationsStore()
notificationsStore.markAllAsRead()
```

## 🎨 デザインシステム

### カラーパレット

#### ライトモード
- **背景**:
  - Primary: `#f8fafc`
  - Secondary: `#ffffff`
  - Tertiary: `#f1f5f9`
- **テキスト**:
  - Primary: `#0f172a`
  - Secondary: `#334155`
  - Muted: `#64748b`
- **ボーダー**: `#e2e8f0`
- **アクセント**: `#2563eb`

#### ダークモード
- **背景**:
  - Primary: `#0a0f1e`
  - Secondary: `#151c2e`
  - Tertiary: `#1e2841`
- **テキスト**:
  - Primary: `#f8fafc`
  - Secondary: `#cbd5e1`
  - Muted: `#94a3b8`
- **ボーダー**: `#334155`
- **アクセント**: `#3b82f6`

### タイポグラフィ

- **フォントファミリー**: システムフォント、日本語対応
- **フォントサイズ**: Tailwind CSSのデフォルトスケール使用

### スペーシング

Tailwind CSSのデフォルトスペーシングスケール（4px単位）を使用。

### アニメーション

- **フェードイン**: 200ms
- **スライド**: 300ms
- **スケール**: 200ms
- **イージング**: `cubic-bezier(0.4, 0, 0.2, 1)`

## 👨‍💻 開発ガイドライン

### コーディング規約

1. **Composition API**: Vue 3のComposition APIを使用
2. **TypeScript**: 型安全を重視し、`any`型の使用を避ける
3. **コンポーネント**: 単一責任の原則に従う
4. **命名規則**:
   - コンポーネント: PascalCase (`UserAvatar.vue`)
   - 関数: camelCase (`handleClick`)
   - 定数: UPPER_SNAKE_CASE (`MAX_LENGTH`)

### コンポーネント設計

1. **Props**: 明確に型定義し、デフォルト値を提供
2. **Events**: カスタムイベントは適切に型付け
3. **スロット**: 柔軟性が必要な場合に使用
4. **Composables**: ロジックの再利用にはComposablesを使用

### 状態管理

1. **ローカル状態**: コンポーネント内でのみ使用される状態は`ref`/`reactive`
2. **グローバル状態**: 複数のコンポーネントで共有される状態はPinia
3. **計算プロパティ**: 派生状態は`computed`を使用

### スタイリング

1. **Tailwind CSS**: ユーティリティクラスを優先
2. **カスタムCSS**: 必要な場合のみ`<style scoped>`を使用
3. **レスポンシブ**: モバイルファーストで設計

## 🚀 ビルド・デプロイ

### プロダクションビルド

```bash
npm run build
```

ビルドされたファイルは`dist/`ディレクトリに出力されます。

### デプロイ

#### Vercel

```bash
# Vercel CLIをインストール
npm install -g vercel

# デプロイ
vercel
```

#### Netlify

```bash
# Netlify CLIをインストール
npm install -g netlify-cli

# デプロイ
netlify deploy --prod --dir=dist
```

#### その他

任意の静的ホスティングサービス（Cloudflare Pages、GitHub Pages、AWS S3など）にデプロイ可能です。

### 環境変数

`.env`ファイルを作成して環境変数を設定できます：

```env
VITE_API_URL=https://api.personalme.app
```

## 🐛 トラブルシューティング

### 開発サーバーが起動しない

1. Node.jsのバージョンを確認: `node -v`（18.0以上が必要）
2. 依存パッケージを再インストール: `rm -rf node_modules package-lock.json && npm install`
3. ポート3000が使用中の場合: `vite.config.ts`でポートを変更

### ビルドエラー

1. TypeScriptエラーを確認: `npm run type-check`
2. 未使用のインポートを削除
3. 型定義を確認

### スタイルが適用されない

1. Tailwind CSSの設定を確認: `tailwind.config.js`
2. `main.css`が正しくインポートされているか確認
3. ブラウザのキャッシュをクリア

## 📚 APIエンドポイント仕様（モック）

現在はモックデータを使用していますが、以下のAPIエンドポイントを実装予定です。

### 認証

- `POST /api/v1/auth/login` - ログイン
- `POST /api/v1/auth/signup` - サインアップ
- `POST /api/v1/auth/logout` - ログアウト
- `GET /api/v1/auth/me` - 現在のユーザー情報取得

### 投稿

- `GET /api/v1/posts` - 投稿一覧取得
- `POST /api/v1/posts` - 投稿作成
- `GET /api/v1/posts/:id` - 投稿詳細取得
- `PUT /api/v1/posts/:id` - 投稿更新
- `DELETE /api/v1/posts/:id` - 投稿削除
- `POST /api/v1/posts/:id/like` - いいね
- `POST /api/v1/posts/:id/repost` - リポスト
- `GET /api/v1/posts/:id/comments` - コメント取得
- `POST /api/v1/posts/:id/comments` - コメント作成

### ユーザー

- `GET /api/v1/users/:id` - ユーザー情報取得
- `PUT /api/v1/users/:id` - ユーザー情報更新
- `POST /api/v1/users/:id/follow` - フォロー
- `GET /api/v1/users/:id/posts` - ユーザーの投稿取得

### 通知

- `GET /api/v1/notifications` - 通知一覧取得
- `PUT /api/v1/notifications/:id/read` - 既読にする
- `PUT /api/v1/notifications/read-all` - すべて既読にする

### 検索

- `GET /api/v1/search?q=query` - 検索

### トレンド

- `GET /api/v1/trending` - トレンド取得

## 🤝 コントリビューション

プルリクエストを歓迎します。大きな変更の場合は、まずissueを開いて変更内容を議論してください。

## 📝 ライセンス

MIT License

## 👥 作者

- **あなたの名前** - [GitHub](https://github.com/yourusername)

## 🙏 謝辞

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)

---

**PersonalMe** - あなたらしさを表現する、新しいSNSプラットフォーム 💙
