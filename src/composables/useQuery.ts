import type { MaybeRef } from '@vueuse/core'

export function useQuery(key?: MaybeRef<string>) {
  const query = ref<AnyObject>({})
  onLoad((q) => {
    query.value = q || {}
  })
  const value = computed(() => (key ? query.value[unref(key)] : null))
  return { query, value }
}
