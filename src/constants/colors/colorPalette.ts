import type { ColorFormat, PalettesProps } from "@kirklin/palette";
// 从 @kirklin/palette 导入我们需要的所有类型和函数
import {
  generateColorPalette,
  generateColorPalettes,
  presetPalettes,
  presetPalettesHsla,
  presetPalettesRgba,
} from "@kirklin/palette";

// 重新导出我们需要的内容
export {
  generateColorPalette,
  generateColorPalettes,
  presetPalettes,
  presetPalettesHsla,
  presetPalettesRgba,
};

export type { ColorFormat, PalettesProps };
