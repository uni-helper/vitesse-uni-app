<script setup lang="ts">
import AppFooter from '@/components/app-footer.vue'
</script>

<template>
  <view class="px-10 py-20 text-center">
    <slot />
    <AppFooter />
    <view class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </view>
  </view>
</template>
