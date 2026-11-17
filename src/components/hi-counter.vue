<script setup lang="ts">
import { useCount } from '@/composables/use-count'

const { count, inc, dec } = useCount()
</script>

<template>
  <view class="my-3 inline-flex">
    <view class="btn" @click="dec()">
      <text class="i-carbon-subtract" />
    </view>
    <view class="m-auto inline-block w-15 font-mono">
      {{ count }}
    </view>
    <view class="btn" @click="inc()">
      <text class="i-carbon-add" />
    </view>
  </view>
</template>

<style>
.btn {
  --at-apply: w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white cursor-pointer;
}
</style>
