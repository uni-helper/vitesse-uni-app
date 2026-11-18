<script setup lang="ts">
import AppFooter from '@/components/app-footer.vue'

function toast(message: string) {
  uni.showToast({
    icon: 'none',
    title: message,
  })
}

// 页面用 useUhUniLayoutRef 就能拿到这里暴露的方法
defineExpose({ toast })
</script>

<template>
  <view class="px-10 py-20 text-center">
    <slot />
    <AppFooter />
    <view class="mx-auto mt-5 text-center text-sm opacity-25">
      [Home Layout]
    </view>
  </view>
</template>
