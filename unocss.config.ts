import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify,
} from "unocss-applet";

const isApplet = process.env?.UNI_PLATFORM?.startsWith("mp");

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetApplet({ enable: isApplet }),
    presetAttributify(),
    presetRemToRpx({ enable: isApplet }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify({ enable: isApplet }),
    transformerApplet({ enable: isApplet }),
  ],
});
