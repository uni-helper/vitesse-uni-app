<template>
  <view inline-flex text-2xl font-300 cursor-default>
    <view
      flex
      flex-col
      items-center
      hover-class="drop-shadow-md drop-shadow-color-green5"
    >
      <image w-18 h-18 inline-block src="/static/logo.svg" />
      <text text-green5 mt--2>
        uni-helper
      </text>
    </view>
    <view
      text="3xl gray4"
      m="x-4 y-auto"
      transition-all-500
      transform
      hover:rotate-135
      i-carbon-add
    />
    <view flex flex-col hover-class="drop-shadow-md drop-shadow-color-purple5">
      <image w-18 h-18 inline-block src="/static/vite.png" />
      <text text-purple5 mt--2>
        Vite
      </text>
    </view>
  </view>
</template>
