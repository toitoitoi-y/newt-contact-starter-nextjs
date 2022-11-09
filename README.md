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
<br />NewtのForm Appを利用したシンプルなお問い合わせページ
<br />技術構成： Next.js, TypeScript

## 開発をはじめる

### Step1: Newtスペースをセットアップ

1. スペースを作成します
    - スペースUIDを控えておきましょう。スペースUIDは 管理画面URL（ `https://app.newt.so/{スペースUID}` ） もしくは スペース設定 > 一般 から確認できます。
2. Appを作成します
    - Appテンプレートから作成する場合、**Contact**を選択し「このテンプレートを追加」をクリックしてください。
    - スクラッチで作成する場合は、Form Appを選択してAppを新規作成します。
3. フォームを作成します
    - 作成したForm Appのトップページより、フォームを作成します
    - フォーム設定 > セットアップ よりAPIエンドポイントをコピーします

### Step2: .envファイルを書き換える

1. Step1で取得したAPIエンドポイントで環境変数を書き換えます

.envファイルのAPIエンドポイントを実際の値で書き換えます
```conf
NEXT_PUBLIC_NEWT_FORM_ENDPOINT=APIエンドポイント

```
Next.jsにおける環境変数の扱いについては、[公式ドキュメント](https://nextjs.org/docs/basic-features/environment-variables)を参照してください。

### Step3: devサーバーを起動する

Yarnを使う

```bash
# 依存パッケージをインストール
$ yarn install

# localhost:3000でdevサーバーを起動
$ yarn dev
```

NPMを使う

```bash
# 依存パッケージをインストール
$ npm install

# localhost:3000でdevサーバーを起動
$ npm run dev
```

### Step4: Staticなサイトを生成して起動

```bash
# Staticなサイトを生成（SSG）
$ yarn generate

# サーバーを起動
$ yarn start
```