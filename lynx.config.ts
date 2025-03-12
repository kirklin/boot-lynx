import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { UnoCSSRspackPlugin } from "@unocss/webpack/rspack";
import { presetAttributify, presetUno } from "unocss";

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx(),
  ],
  tools: {
    rspack: {
      plugins: [
        UnoCSSRspackPlugin({
          presets: [presetUno(), presetAttributify()],
          theme: {
            animation: {
              keyframes: {
                shake: "{0%{transform:scale(1)}50%{transform:scale(0.9)}100%{transform:scale(1)}}",
              },
            },
            colors: {
              white: {
                DEFAULT: "#ffffff",
                65: "rgba(255,255,255,0.65)",
                85: "rgba(255,255,255,0.85)",
              },
            },
          },
          shortcuts: {
            "animate-shake": "animate-[shake_0.5s_ease_infinite]",
          },
        }),
      ],
    },
  },
});
