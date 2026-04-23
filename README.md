# 新幹線隣り合った2席検索アプリ

新幹線で隣り合った2席（A-B または C-D）が空いている座席を検索するWebアプリケーションです。

## 特徴

- 🚄 複数の新幹線から空席を検索
- 🔍 隣り合った2席の検索に特化
- 💻 モダンなUI（Tailwind CSS）
- ⚡ Vercelにデプロイ可能

## 技術スタック

- **フレームワーク**: Next.js 16
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel

## セットアップ

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# ブラウザで開く
# http://localhost:3000
```

## ビルド

```bash
npm run build
npm start
```

## Vercelデプロイ

このプロジェクトはVercelに最適化されています。

```bash
# Vercel CLIをインストール（まだの場合）
npm install -g vercel

# デプロイ
vercel
```

または GitHub を接続して自動デプロイを設定することもできます。

## カスタムドメイン

Vercelダッシュボードで `nete.jp` をカスタムドメインとして設定できます。

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
