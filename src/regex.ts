const HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i
const SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i
const VALUE = /(?:\d+|\d*\.\d+)%?/
const SEP = /(?:\s*,\s*|\s+)/
const ALPHA_SEP = /\s*[,/]\s*/
const PROPERTY = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/

const RGB = new RegExp(
  `^(rgba?)\\(\\s*(${VALUE.source}|${PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${PROPERTY.source}))?\\s*\\)$`,
)
const HSL = new RegExp(
  `^(hsla?)\\(\\s*((?:${VALUE.source})(?:deg|rad|grad|turn)?|${PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${PROPERTY.source}))?\\s*\\)$`,
)

export { HEX, SHORT_HEX, VALUE, SEP, ALPHA_SEP, PROPERTY, RGB, HSL }
