<script lang="ts" setup>
const { value: name } = useQuery('name')
</script>

<template>
  <view>{{ name }}</view>

  <hi-counter />
</template>

<route lang="json">
{
  "layout": "home"
}
</route>
