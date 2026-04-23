# Vercelデプロイ手順

新幹線隣り合った2席検索アプリを nete.jp にデプロイするための手順です。

## 前提条件

- [Vercelアカウント](https://vercel.com) を作成済み
- [Vercel CLI](https://vercel.com/cli) をインストール済み
- [Gitアカウント](https://github.com) を作成済み

## デプロイ手順

### 1. GitHubにプッシュ（推奨）

```bash
# GitHubで新しいリポジトリを作成
# リポジトリ名: shinkansen-seat-finder

# ローカルで Git を初期化
cd /mnt/c/Users/dlo_o/Documents/AI/shinkansen-seat-finder
git init
git add .
git commit -m "Initial commit: Shinkansen seat finder app"

# リモートを追加
git remote add origin https://github.com/YOUR_USERNAME/shinkansen-seat-finder.git

# GitHubにプッシュ
git branch -M main
git push -u origin main
```

### 2. Vercelにデプロイ

#### 方法A: Vercel UIから（推奨）

1. [Vercel ダッシュボード](https://vercel.com/dashboard) にアクセス
2. 「Add New」→「Project」をクリック
3. GitHubリポジトリを選択
4. 自動でビルド・デプロイが開始されます

#### 方法B: Vercel CLIから

```bash
cd /mnt/c/Users/dlo_o/Documents/AI/shinkansen-seat-finder

# Vercel CLI でログイン
vercel login

# デプロイ実行
vercel
```

### 3. カスタムドメイン設定

1. Vercel ダッシュボードでプロジェクトを選択
2. Settings → Domains をクリック
3. 「Add」をクリック
4. `nete.jp` を入力
5. ドメイン設定画面の指示に従って DNS を設定

#### DNS設定（お名前.comの場合）

1. [お名前.com コントロールパネル](https://www.onamae.com/) にログイン
2. DNS設定 / ネームサーバー設定 を開く
3. Vercelが表示した DNS レコード（通常 `CNAME` レコード）を追加

**例:**
```
ホスト名: nete.jp
種別: CNAME
値: cname.vercel-dns.com
```

4. 反映待ち（通常 24時間以内）

### 4. 環境変数設定（不要）

このアプリはモックデータを使用するため、環境変数は不要です。

実際のAPIを使用する場合は以下の手順で設定します：

1. Vercel ダッシュボーム → Settings → Environment Variables
2. 必要な変数を追加

## デプロイ後

- デプロイ URL が生成されます
- カスタムドメイン（nete.jp）を設定すると、そちらでアクセス可能になります
- 自動でSSL証明書が設定されます（HTTPS対応）

## トラブルシューティング

### ビルドが失敗する場合

```bash
# ローカルで確認
npm install
npm run build
```

### Node.jsバージョンエラー

Vercelは自動で適切なNode.jsバージョンを選択します。
明示的に指定する場合は `.nvmrc` ファイルを作成：

```
20.11.0
```

## その他

- **本番環境**: GitHub mainブランチへのプッシュで自動デプロイ
- **プレビュー**: Pull Requestごとに自動でプレビューURL生成
- **ロールバック**: Vercel ダッシュボーム → Deployments で旧バージョンに切り戻し可能
