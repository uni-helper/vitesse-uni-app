<script setup lang="ts">
import AppLogos from '@/components/AppLogos.vue'
import InputEntry from '@/components/InputEntry.vue'
import { greeting } from '@/platform/greeting'

// definePage 的写法两种都行：直接传对象，或者传函数按平台合并配置。
// 函数里的条件在扫描阶段就算成普通对象，不会进产物。
definePage(({ define }) =>
  define({
    type: 'home',
    style: {
      navigationBarTitleText: 'Vitesse Uni App',
    },
  }).ifdef('mp-weixin', {
    style: {
      navigationBarBackgroundColor: '#07c160',
    },
  }),
)
</script>

<template>
  <AppLogos />
  <InputEntry />

  <!-- 平台文件：greeting.ts 是基础实现，greeting.h5.ts / greeting.mp-weixin.ts 按平台覆盖它 -->
  <view class="mt-6 text-xs text-gray-500">
    {{ greeting }}
  </view>

  <!-- 平台修饰符：命中的那份会整个替换默认 class，所以公共样式要在每份里写全 -->
  <view
    class="mt-2 inline-block rounded px-2 py-1 text-xs text-gray-500"
    class.h5="mt-2 inline-block rounded bg-blue-50 px-2 py-1 text-xs text-blue-600"
    class.mp-weixin="mt-2 inline-block rounded bg-green-50 px-2 py-1 text-xs text-green-700"
  >
    平台修饰符
  </view>
</template>

<style></style>
