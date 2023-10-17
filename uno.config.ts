import {
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { defineConfig, presetUni } from '@uni-helper/unocss-uni'

export default defineConfig({
  presets: [
    presetUni(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
