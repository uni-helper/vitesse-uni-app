<script lang="ts" setup>
import { useQuery } from '@uni-helper/uni-use'
import { useUhUniLayoutRef } from 'virtual:uni-layouts'
import HiCounter from '@/components/HiCounter.vue'
import { visitedRoute } from '@/middleware/track'

definePage({
  layout: 'home',
  // 页面级中间件，排在全局中间件后面。名字取文件名转 camelCase：hiGuard.ts → hiGuard
  middleware: ['hiGuard'],
  style: {
    navigationBarTitleText: 'Hi',
  },
})

const { value: name } = useQuery('name')

// 布局通过 defineExpose 暴露的方法，页面挂载后才能拿到实例。
// 变量名要和这里一致，插件据此给包裹页面的布局标签加 ref。
const uniLayout = useUhUniLayoutRef<{ toast: (message: string) => void }>()

function handleToast() {
  uniLayout.value?.toast(`Hi ${name.value || 'uni-app'}`)
}
</script>

<template>
  <view>{{ name }}</view>

  <HiCounter />

  <!-- 全局中间件 track 写进来的路径 -->
  <view class="mt-3 text-xs text-gray-500">
    中间件最近访问：{{ visitedRoute }}
  </view>

  <view class="mt-3 text-center">
    <view
      class="inline-flex cursor-pointer rounded-full bg-teal-600 px-4 py-1 text-sm text-white"
      @click="handleToast"
    >
      toast
    </view>
  </view>
</template>
