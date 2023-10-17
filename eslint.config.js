const antfu = require('@antfu/eslint-config').default
const unocss = require('@unocss/eslint-plugin')

module.exports = antfu(
  {
    ignores: ['src/manifest.json', 'src/pages.json'],
  },
  unocss.configs.flat,
)
