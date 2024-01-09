var $5cQZ9$swchelperscjs_define_propertycjs = require("@swc/helpers/cjs/_define_property.cjs");
var $5cQZ9$swchelperscjs_object_spreadcjs = require("@swc/helpers/cjs/_object_spread.cjs");
var $5cQZ9$swchelperscjs_sliced_to_arraycjs = require("@swc/helpers/cjs/_sliced_to_array.cjs");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "extractColorVars", function () { return $9828b74540a27f95$export$32c16e5e41792a8e; });
$parcel$export(module.exports, "parseColor", function () { return $9828b74540a27f95$export$6e865ea70d7724f; });
$parcel$export(module.exports, "filterTheme", function () { return $9828b74540a27f95$export$ee3ae46d966b4e6e; });



var $c26ebf480572c2fe$export$ab3b77028c846f42 = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
var $c26ebf480572c2fe$export$bb880f9af92a184c = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
var $c26ebf480572c2fe$export$764bd63f4c2043a2 = /(?:\d+|\d*\.\d+)%?/;
var $c26ebf480572c2fe$export$62264d2667e12528 = /(?:\s*,\s*|\s+)/;
var $c26ebf480572c2fe$export$2127034f7d4747b9 = /\s*[,/]\s*/;
var $c26ebf480572c2fe$export$d0409b251f678afb = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/;
var $c26ebf480572c2fe$export$8f9ece5a47764b93 = new RegExp("^(rgba?)\\(\\s*(".concat($c26ebf480572c2fe$export$764bd63f4c2043a2.source, "|").concat($c26ebf480572c2fe$export$d0409b251f678afb.source, ")(?:").concat($c26ebf480572c2fe$export$62264d2667e12528.source, "(").concat($c26ebf480572c2fe$export$764bd63f4c2043a2.source, "|").concat($c26ebf480572c2fe$export$d0409b251f678afb.source, "))?(?:").concat($c26ebf480572c2fe$export$62264d2667e12528.source, "(").concat($c26ebf480572c2fe$export$764bd63f4c2043a2.source, "|").concat($c26ebf480572c2fe$export$d0409b251f678afb.source, "))?(?:").concat($c26ebf480572c2fe$export$2127034f7d4747b9.source, "(").concat($c26ebf480572c2fe$export$764bd63f4c2043a2.source, "|").concat($c26ebf480572c2fe$export$d0409b251f678afb.source, "))?\\s*\\)$"));
var $c26ebf480572c2fe$export$46d8b0f9bc8f87a2 = new RegExp("^(hsla?)\\(\\s*((?:".concat($c26ebf480572c2fe$export$764bd63f4c2043a2.source, ")(?:deg|rad|grad|turn)?|").concat($c26ebf480572c2fe$export$d0409b251f678afb.source, ")(?:").concat($c26ebf480572c2fe$export$62264d2667e12528.source, "(").concat($c26ebf480572c2fe$export$764bd63f4c2043a2.source, "|").concat($c26ebf480572c2fe$export$d0409b251f678afb.source, "))?(?:").concat($c26ebf480572c2fe$export$62264d2667e12528.source, "(").concat($c26ebf480572c2fe$export$764bd63f4c2043a2.source, "|").concat($c26ebf480572c2fe$export$d0409b251f678afb.source, "))?(?:").concat($c26ebf480572c2fe$export$2127034f7d4747b9.source, "(").concat($c26ebf480572c2fe$export$764bd63f4c2043a2.source, "|").concat($c26ebf480572c2fe$export$d0409b251f678afb.source, "))?\\s*\\)$"));


function $9828b74540a27f95$export$32c16e5e41792a8e(colorObj) {
    var colorGroup = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", prefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "--tw", mode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "hex";
    return Object.entries(colorObj).reduce(function(vars, param) {
        var _param = (0, $5cQZ9$swchelperscjs_sliced_to_arraycjs._)(param, 2), colorKey = _param[0], value = _param[1];
        var _parseColor;
        var cssVariable = colorKey === "DEFAULT" ? "".concat(prefix).concat(colorGroup) : "".concat(prefix).concat(colorGroup, "-").concat(colorKey);
        var newVars = typeof value === "string" ? (0, $5cQZ9$swchelperscjs_define_propertycjs._)({}, cssVariable, mode === "hex" ? value : (_parseColor = $9828b74540a27f95$export$6e865ea70d7724f(value)) === null || _parseColor === void 0 ? void 0 : _parseColor.color.join(", ")) : $9828b74540a27f95$export$32c16e5e41792a8e(value, "-".concat(colorKey), prefix, mode);
        return (0, $5cQZ9$swchelperscjs_object_spreadcjs._)({}, vars, newVars);
    }, {});
}
function $9828b74540a27f95$export$ee3ae46d966b4e6e(keys, themeColors) {
    return keys.reduce(function(filteredTheme, key) {
        if (themeColors[key]) filteredTheme[key] = themeColors[key];
        return filteredTheme;
    }, {});
}
function $9828b74540a27f95$export$6e865ea70d7724f(value) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_loose = _ref.loose, loose = _ref_loose === void 0 ? false : _ref_loose;
    var _match__toString, _match_;
    value = value.trim();
    var hex = value.replace($c26ebf480572c2fe$export$bb880f9af92a184c, function(_, r, g, b, a) {
        return [
            "#",
            r,
            r,
            g,
            g,
            b,
            b,
            a ? a + a : ""
        ].join("");
    }).match($c26ebf480572c2fe$export$ab3b77028c846f42);
    if (hex !== null) return {
        mode: "rgb",
        color: [
            parseInt(hex[1], 16),
            parseInt(hex[2], 16),
            parseInt(hex[3], 16)
        ].map(function(v) {
            return v.toString();
        }),
        alpha: hex[4] ? (parseInt(hex[4], 16) / 255).toString() : undefined
    };
    var _value_match;
    var match = (_value_match = value.match($c26ebf480572c2fe$export$8f9ece5a47764b93)) !== null && _value_match !== void 0 ? _value_match : value.match($c26ebf480572c2fe$export$46d8b0f9bc8f87a2);
    if (match === null) return null;
    var color = [
        match[2],
        match[3],
        match[4]
    ].filter(Boolean).map(function(v) {
        return v.toString();
    });
    if (color.length === 2 && color[0].startsWith("var(")) return {
        mode: match[1],
        color: [
            color[0]
        ],
        alpha: color[1]
    };
    if (!loose && color.length !== 3) return null;
    if (color.length < 3 && !color.some(function(part) {
        return /^var\(.*?\)$/.test(part);
    })) return null;
    return {
        mode: match[1],
        color: color,
        alpha: (_match_ = match[5]) === null || _match_ === void 0 ? void 0 : (_match__toString = _match_.toString) === null || _match__toString === void 0 ? void 0 : _match__toString.call(_match_)
    };
}
/**
 * Tailwind CSS plugin that exposes Tailwind colors as custom CSS properties on the :root element.
 * @param options - The plugin configuration options.
 * @returns A function that can be used as a Tailwind CSS plugin.
 */ module.exports = function(param) {
    var _param_extract = param.extract, extract = _param_extract === void 0 ? "all" : _param_extract, _param_prefix = param.prefix, prefix = _param_prefix === void 0 ? "--tw" : _param_prefix, _param_mode = param.mode, mode = _param_mode === void 0 ? "hex" : _param_mode;
    return function(param) {
        var addBase = param.addBase, theme = param.theme;
        if (extract === "all") addBase({
            ":root": $9828b74540a27f95$export$32c16e5e41792a8e(theme("colors"), "", prefix, mode)
        });
        if (Array.isArray(extract)) addBase({
            ":root": $9828b74540a27f95$export$32c16e5e41792a8e($9828b74540a27f95$export$ee3ae46d966b4e6e(extract, theme("colors")), "", prefix, mode)
        });
    };
};


//# sourceMappingURL=index.js.map
