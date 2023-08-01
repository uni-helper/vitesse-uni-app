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

### 目录结构

- .github 可放心删除
- .vscode 如果你不使用 VsCode 可放心删除
- dist 使用 build 命令构建后的产物
- node_modules 项目依赖，推荐使用 `pnpm` 作为包管理器
- src 项目主要源代码
  - components 组件目录
  - composables 可组合函数
  - layouts 布局
  - pages 页面
  - static 静态资源
  - App.vue 应用
  - auto-imports.d.ts 自动导入的 dts
  - components.d.ts 自动导入组件的 dts
  - env.d.ts vite、vue 环境 dts
  - main.ts 入口文件
  - shims.d.ts uni-app 对 vue 扩展的 dts
  - theme.json 亮色/暗色主题配置
  - uni.scss uni-app 常用 SCSS 变量
- .editorconfig Editor Config 配置
- .eslintignore ESLint 忽略配置
- .eslintrc ESLint 配置
- .gitignore Git 忽略配置
- .npmrc npm 配置
- index.html
- LICENSE 开源协议，可放心删除
- packages.json 应用的依赖和脚本, [了解更多](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- pnpm-lock.yaml pnpm 锁文件
- README.md 本文件
- renovate.json 可放心删除
- tsconfig.json TypeScript 配置文件
- vite.config.ts Vite 配置文件
- manifest.config.ts 接管 manifest
- pages.config.ts 接管 pages
- uno.config.ts UNOCSS 配置文件
- volar.config.ts Volar 配置文件

