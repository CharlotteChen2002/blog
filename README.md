<p align='center'>
  <img src='public/pwa-192x192.png' width='192'/>
</p>

<h1 align='center'>Q Blog</h1>

<p align="center">

  <a href="https://github.com/liuly0322/Q-Blog/blob/main/LICENSE.md">
    <img src="https://img.shields.io/badge/License-MIT-68be8d">
  </a>

  <a href="https://github.com/liuly0322/Q-Blog/blob/main/LICENSE.md">
    <img src="https://img.shields.io/badge/license-CC_BY--NC--SA_4.0-68be8d">
  </a>

  <a href="https://www.codefactor.io/repository/github/liuly0322/q-blog">
    <img src="https://img.shields.io/codefactor/grade/github/liuly0322/q-blog/main?color=68be8d">
  </a>

</p>

<p align='center'>Q-Blog - Quicker and Cuter</p>

Welcome to [my personal blog site](https://charlottechen.blog/) ([subscribe](https://charlottechen.blog/feed.xml)).

- Vite5, Vue3, TypeScript, Naive UI
- Responsive Web Design, Dark Mode, PWA
- [WIP] **(Have a look!) Rollup [partial evaluate plugin](./partial-evaluate/)**

## Edit site

- Add vue components in `src/components`
<!-- add sub list -->
    - Music player in `src/components/APlayer.vue`
    - Change sidebar in `src/components/Sidebar.vue`
    - Change post content table in `src/components/Toc.vue`
    - Change "一言" in `src/components/Yiyan.vue`

- Edit introduction in `src/pages/about.md`
- Edit blog content in `src/posts`




## Usage

Installation:

```bash
npm install -g pnpm # install pnpm first
pnpm i
```

Development：

```bash
pnpm dev
```

Build：

```bash
pnpm build # compile to `dist` folder
pnpm preview # preview the production build
```

## Credits

- [tov-template](https://github.com/dishait/tov-template)
- [Vite PWA](https://github.com/vite-pwa/vite-plugin-pwa)
- [llyのblog](https://blog.liuly.moe/)