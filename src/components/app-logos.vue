<template>
  <view class="inline-flex cursor-default text-2xl font-300">
    <view
      class="flex flex-col items-center"
      hover-class="drop-shadow-md drop-shadow-color-green5"
    >
      <image class="inline-block h-18 w-18" src="/static/logo.svg" />
      <text class="text-green5 -mt-2">
        uni-helper
      </text>
    </view>
    <view
      class="i-carbon-add mx-4 my-auto transform text-3xl text-gray4 transition-all-500 hover:rotate-135"
    />
    <view class="flex flex-col" hover-class="drop-shadow-md drop-shadow-color-purple5">
      <image class="inline-block h-18 w-18" src="/static/vite.png" />
      <text class="text-purple5 -mt-2">
        Vite
      </text>
    </view>
  </view>
</template>
