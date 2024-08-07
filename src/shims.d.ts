export {}

declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance
  interface ComponentCustomOptions extends Hooks {}
}

type A = import('@vue/runtime-core').GlobalComponents

declare module 'vue' {
  interface GlobalComponents extends A {}
}
