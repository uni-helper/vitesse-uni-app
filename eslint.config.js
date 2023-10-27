const antfu = require('@antfu/eslint-config').default
const unocss = require('@unocss/eslint-plugin')

module.exports = antfu(
  {
    ignores: ['src/manifest.json', 'src/pages.json'],
    rules: {
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: [
            'page-meta',
            'navigator',
            'web-view',
          ],
        },
      ],
    },
  },
  unocss.configs.flat,
)
