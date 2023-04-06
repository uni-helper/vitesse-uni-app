<script lang="ts" setup>
function handleClickGithub() {
  window.open("https://github.com/uni-helper/vitesse-uni-app");
}
</script>

<template>
  <view text="xl gray4" m-5 flex justify-center items-center gap-3>
    <navigator url="/pages/index" open-type="redirect">
      <view i-carbon-campsite />
    </navigator>

    <view @click="handleClickGithub">
      <view i-carbon:logo-github />
    </view>
  </view>
</template>
