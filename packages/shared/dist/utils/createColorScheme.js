"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createColorScheme = (colorSource, prefix = "", sourcePrefix) => {
    const colorScheme = {};
    for (let i = 1; i <= 12; i++) {
        colorScheme[`${prefix}${i}`] = colorSource[`${sourcePrefix}${i}`];
    }
    return colorScheme;
};
exports.default = createColorScheme;
