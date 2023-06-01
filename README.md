<p align="center">
  <img src="https://github.com/uni-helper/vitesse-uni-app/raw/main/.github/images/preview.png" width="300"/>
</p>

<h2 align="center">
Vitesse for uni-app
</h2>
<p align="center">
  <a href="https://vitesse-uni-app.netlify.app/">📱 在线预览</a>
</p>

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 📑 [布局系统](./src/layouts)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🦾 [TypeScript](https://www.typescriptlang.org/) & [ESLint](https://eslint.org/) - 保证代码质量

## 快速开始

vitesse-uni-app 支持多种开始方式

### 在本地创建

```bash
npx degit uni-helper/vitesse-uni-app my-vitesse-app
cd my-vitesse-app
pnpm i # 如果你没有 pnpm, 可以先运行: corepack enable
```

### GitHub 模板

[使用这个模板](https://github.com/uni-helper/vitesse-uni-app/generate)

### StackBlitz

<a href="https://stackblitz.com/github/uni-helper/vitesse-uni-app">
  <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="open_in_stackblitz">
</a>

## 清单

- [ ] 在 LICENSE 中改变作者名或直接删除
- [ ] 在 manifest.config.ts 中改变标题
- [ ] 在 index.html 目录下改变 favicon
- [ ] 移除 .github 文件夹
- [ ] 整理 README 并删除演示页面和组件
- [ ] 享受！

## 使用

参考 uni-app 官方文档： [运行、发布 uni-app](https://uniapp.dcloud.net.cn/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app)


## 注意事项

- Q: patches 文件夹是什么?
  - A: 目前用于解决 windows 下 unocss 与 uniapp 一起使用时频繁崩溃的问题, 如果你不是 windows 用户, 可以直接删除 patches 文件夹, 并删除 package.json 中如下内容
  ```diff
  -  "pnpm": {
  -    "patchedDependencies": {
  -      "@unocss/vite@0.52.5": "patches/@unocss__vite@0.52.5.patch"
  -    }
  -  }
  ```
