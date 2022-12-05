<p align="center">
  <a href="https://www.newt.so/">
    <img src="https://user-images.githubusercontent.com/3859812/155490725-80ed1f06-996e-407f-8f63-fd54f0acaf14.svg" alt="Newt" width="70" height="57" />
  </a>
</p>
<h3 align="center">
Newt's starter
</h3>
<p align="center">
  <a href="https://demo-newt-contact-starter-nextjs.vercel.app/">Demo</a> | <a href="https://www.newt.so/">Newt</a>
</p>

## 概要

**newt-contact-starter-nextjs**
<br />Newt の Form App を利用したシンプルなお問い合わせページ
<br />技術構成： Next.js, TypeScript

## 開発をはじめる

### Step1: Newt スペースをセットアップ

1. スペースを作成します
   - スペース UID を控えておきましょう。スペース UID は 管理画面 URL（ `https://app.newt.so/{スペースUID}` ） もしくは スペース設定 > 一般 から確認できます。
2. App を作成します
   - App テンプレートから作成する場合、**Contact**を選択し「このテンプレートを追加」をクリックしてください。
   - スクラッチで作成する場合は、Form App を選択して App を新規作成します。
3. フォームを作成します
   - 作成した Form App のトップページより、フォームを作成します
   - フォーム設定 > セットアップ より API エンドポイントをコピーします

### Step2: .env ファイルを書き換える

1. Step1 で取得した API エンドポイントで環境変数を書き換えます

.env ファイルの API エンドポイントを実際の値（ `https://{spaceUid}.form.newt.so/v1/{formUid}` ）で書き換えます

```conf
NEXT_PUBLIC_NEWT_FORM_ENDPOINT=APIエンドポイント

```

Next.js における環境変数の扱いについては、[公式ドキュメント](https://nextjs.org/docs/basic-features/environment-variables)を参照してください。

### Step3: dev サーバーを起動する

Yarn を使う

```bash
# 依存パッケージをインストール
$ yarn install

# localhost:3000でdevサーバーを起動
$ yarn dev
```

NPM を使う

```bash
# 依存パッケージをインストール
$ npm install

# localhost:3000でdevサーバーを起動
$ npm run dev
```

### Step4: Static なサイトを生成して起動

```bash
# Staticなサイトを生成（SSG）
$ yarn generate

# サーバーを起動
$ yarn start
```

## License

[MIT License](https://github.com/Newt-Inc/newt-contact-starter-nextjs/blob/main/LICENSE)
