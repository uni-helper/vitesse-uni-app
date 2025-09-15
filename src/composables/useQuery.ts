interface UseQueryOptions {
  /** 是否自动解码 URL 编码 */
  decode?: boolean
  /** 是否尝试解析 JSON 字符串 */
  parseJSON?: boolean
  /** 是否智能检测（仅对明显编码的内容进行解码） */
  smart?: boolean
}

export function useQuery(key?: MaybeRefOrGetter<string>, options: UseQueryOptions = {}) {
  const { decode = true, parseJSON = true, smart = true } = options

  const query = ref<AnyObject>({})

  // 检测是否需要解码的工具函数
  const needsDecode = (value: string): boolean => {
    if (!smart)
      return true
    // 检测是否包含编码字符（%xx 格式）
    return /%[0-9a-f]{2}/i.test(value)
  }

  // 检测是否是 JSON 格式
  const isJSON = (value: string): boolean => {
    if (!parseJSON)
      return false
    const trimmed = value.trim()
    return (trimmed.startsWith('{') && trimmed.endsWith('}'))
      || (trimmed.startsWith('[') && trimmed.endsWith(']'))
  }

  // 解析单个值的工具函数
  const parseValue = (value: string): any => {
    if (!value)
      return value

    let result = value

    // 1. 智能 URL 解码（只对真正编码的内容解码）
    if (decode && needsDecode(result)) {
      try {
        result = decodeURIComponent(result)
      }
      catch {
        console.warn('URL decode failed for value:', value)
      }
    }

    // 2. JSON 解析
    if (parseJSON && isJSON(result)) {
      try {
        result = JSON.parse(result)
      }
      catch {
        // 不是有效的 JSON，继续使用原值
      }
    }

    return result
  }

  // 编码单个值的工具函数
  const encodeValue = (value: any): string => {
    if (value === null || value === undefined)
      return ''

    let result = value

    // 1. 对象/数组转 JSON
    if (typeof value === 'object') {
      result = JSON.stringify(value)
    }
    else {
      result = String(value)
    }

    // 2. URL 编码
    return encodeURIComponent(result)
  }

  onLoad((q) => {
    const rawQuery = q || {}
    const parsedQuery: AnyObject = {}

    // 处理所有查询参数
    Object.keys(rawQuery).forEach((key) => {
      parsedQuery[key] = parseValue(rawQuery[key])
    })

    query.value = parsedQuery
  })

  const value = computed(() => (key ? query.value[toValue(key)] : null))

  // 编码查询参数的方法
  const encode = (data: AnyObject): string => {
    const params = new URLSearchParams()
    Object.keys(data).forEach((key) => {
      const encodedValue = encodeValue(data[key])
      if (encodedValue) {
        params.append(key, encodedValue)
      }
    })
    return params.toString()
  }

  // 编码单个参数的方法
  const encodeParam = (paramKey: string, paramValue: any): string => {
    return `${encodeURIComponent(paramKey)}=${encodeValue(paramValue)}`
  }

  // 简化的 URL 构建方法（支持简单字符串拼接）
  const buildUrl = (path: string, params: AnyObject | string): string => {
    if (typeof params === 'string') {
      // 如果是字符串，直接拼接（支持像 InputEntry 中的简单用法）
      return `${path}?${params}`
    }

    // 如果是对象，使用编码方法
    const queryString = encode(params)
    return queryString ? `${path}?${queryString}` : path
  }

  return {
    query,
    value,
    encode,
    encodeParam,
    encodeValue,
    buildUrl,
  }
}
