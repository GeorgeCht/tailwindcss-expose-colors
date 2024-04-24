import type { PluginAPI } from 'tailwindcss/types/config'
import * as RegExp from './regex'

declare type PluginOptions = {
  extract: string | Array<string>
  prefix: `-${string}`
  mode: 'hex' | 'rgb'
}

declare type ColorObjectType = Record<string, string>

/**
 * Extracts color variables based on the provided keys recursively.
 * @param colorObj - The object containing color definitions.
 * @param colorGroup - The current color group, used for nesting.
 * @param prefix - The prefix to use for CSS variables.
 * @param mode - The selected color mode to display the extracted colors.
 * @returns An object with CSS variables representing the extracted colors.
 */
export function extractColorVars(colorObj: ColorObjectType, colorGroup = '', prefix = '--tw', mode = 'hex') {
  return Object.entries(colorObj).reduce((vars, [colorKey, value]) => {
    const cssVariable =
      colorKey === 'DEFAULT' ? `${prefix}${colorGroup}` : `${prefix}${colorGroup}-${colorKey}`

    const newVars: ColorObjectType =
      typeof value === 'string'
        ? {
            [cssVariable]: mode === 'hex' ? value : parseColor(value)?.color.join(', '),
          }
        : extractColorVars(value, `${colorGroup}-${colorKey}`, prefix, mode)

    return { ...vars, ...newVars }
  }, {})
}

/**
 * Filters a color theme based on the specified keys.
 * @param keys - The keys to filter the color theme.
 * @param themeColors - The complete color theme object.
 * @returns A filtered color theme object containing only the specified keys.
 */
export function filterTheme(
  keys: Array<keyof ColorObjectType>,
  themeColors: ColorObjectType,
): ColorObjectType {
  return keys.reduce((filteredTheme, key) => {
    if (themeColors[key]) {
      filteredTheme[key] = themeColors[key]
    }
    return filteredTheme
  }, {} as ColorObjectType)
}

/**
 * Parses a color string and extracts color components.
 * @param value - The color string to parse.
 * @param loose - If set to true, allows lenient parsing of color strings.
 * @returns An object with information about the parsed color, or null if parsing fails.
 */
export function parseColor(value: string, { loose = false } = {}) {
  value = value.trim()

  const hex = value
    .replace(RegExp.SHORT_HEX, (_, r, g, b, a) => ['#', r, r, g, g, b, b, a ? a + a : ''].join(''))
    .match(RegExp.HEX)

  if (hex !== null) {
    return {
      mode: 'rgb',
      color: [parseInt(hex[1]!, 16), parseInt(hex[2]!, 16), parseInt(hex[3]!, 16)].map((v) => v.toString()),
      alpha: hex[4] ? (parseInt(hex[4], 16) / 255).toString() : undefined,
    }
  }

  const match = value.match(RegExp.RGB) ?? value.match(RegExp.HSL)
  if (match === null) return null

  const color = [match[2], match[3], match[4]].filter(Boolean).map((v) => v!.toString())

  if (color.length === 2 && color[0]!.startsWith('var('))
    return { mode: match[1], color: [color[0]], alpha: color[1] }

  if (!loose && color.length !== 3) return null

  if (color.length < 3 && !color.some((part) => /^var\(.*?\)$/.test(part))) return null

  return { mode: match[1], color, alpha: match[5]?.toString?.() }
}

/**
 * Tailwind CSS plugin that exposes Tailwind colors as custom CSS properties on the :root element.
 * @param options - The plugin configuration options.
 * @returns A function that can be used as a Tailwind CSS plugin.
 */
module.exports = function exposeColors({ extract = 'all', prefix = '--tw', mode = 'hex' }: PluginOptions) {
  return function ({ addBase, theme }: PluginAPI) {
    if (extract === 'all') {
      addBase({ ':root': extractColorVars(theme('colors'), '', prefix, mode) })
    }
    if (Array.isArray(extract)) {
      addBase({
        ':root': extractColorVars(filterTheme(extract, theme('colors')), '', prefix, mode),
      })
    }
  }
}
