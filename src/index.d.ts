type PluginOptions = {
    extract: string | Array<string>
    prefix: `-${string}`
    mode: 'hex' | 'rgb'
};

type ColorObjectType = Record<string, string>;

/**
 * Extracts color variables based on the provided keys recursively.
 * @param colorObj - The object containing color definitions.
 * @param colorGroup - The current color group, used for nesting.
 * @param prefix - The prefix to use for CSS variables.
 * @param mode - The selected color mode to display the extracted colors.
 * @returns An object with CSS variables representing the extracted colors.
 */
export function extractColorVars(colorObj: ColorObjectType, colorGroup?: string, prefix?: string, mode?: string): {};

/**
 * Filters a color theme based on the specified keys.
 * @param keys - The keys to filter the color theme.
 * @param themeColors - The complete color theme object.
 * @returns A filtered color theme object containing only the specified keys.
 */
export function filterTheme(keys: Array<keyof ColorObjectType>, themeColors: ColorObjectType): ColorObjectType;

/**
 * Parses a color string and extracts color components.
 * @param value - The color string to parse.
 * @param loose - If set to true, allows lenient parsing of color strings.
 * @returns An object with information about the parsed color, or null if parsing fails.
 */
export function parseColor(value: string, { loose }?: {
    loose?: boolean | undefined;
}): {
    mode: string;
    color: string[];
    alpha: string | undefined;
} | null;

/**
 * Tailwind CSS plugin that exposes Tailwind colors as custom CSS properties on the :root element.
 * @param options - The plugin configuration options.
 * @returns A function that can be used as a Tailwind CSS plugin.
 */
export default function exposeColors(options?: PluginOptions);
