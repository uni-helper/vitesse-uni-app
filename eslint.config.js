import uni from '@uni-helper/eslint-config'

export default uni({
  unocss: true,
}, {
  files: ['pnpm-workspace.yaml'],
  rules: {
    'pnpm/yaml-enforce-settings': 'off',
  },
}, {
  ignores: ['**/uni-layouts.d.ts', '**/uni-pages.d.ts'],
})
