<script lang="ts" setup>
function handleClickGithub() {
  // 小程序和 App 没有 window，只能走 toast 提示
  if (typeof window !== 'undefined' && window.open) {
    window.open('https://github.com/uni-helper/vitesse-uni-app')
  }
  else {
    uni.showToast({
      icon: 'none',
      title: '请使用浏览器打开',
    })
  }
}
</script>

<template>
  <view class="m-5 flex items-center justify-center gap-3 text-xl text-gray4">
    <navigator url="/pages/index" open-type="redirect">
      <view class="i-carbon-campsite" />
    </navigator>

    <view class="cursor-pointer" @click="handleClickGithub">
      <view class="i-carbon:logo-github" />
    </view>
  </view>
</template>
