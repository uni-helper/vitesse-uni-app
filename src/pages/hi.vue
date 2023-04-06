<script lang="ts" setup>
const { value: name } = useQuery('name')
</script>

<template>
  <view>{{ name }}</view>

  <Counter />
</template>

<route lang="json">
{
  "layout": "home"
}
</route>
