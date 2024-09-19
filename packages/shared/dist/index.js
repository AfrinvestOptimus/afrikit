"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const radius_1 = __importDefault(require("./radius"));
const spacing_1 = __importDefault(require("./spacing"));
const tokens_1 = __importDefault(require("./tokens"));
const colors_1 = __importDefault(require("./colors"));
const config = {
    theme: {
        colors: Object.assign({ white: '#ffffff', black: '#131518' }, colors_1.default),
        borderRadius: {
            xs: radius_1.default.full['1'],
            'xs-max': radius_1.default.full['1-max'],
            sm: radius_1.default.full['2'],
            'sm-max': radius_1.default.full['2-max'],
            md: radius_1.default.full['3'],
            'md-max': radius_1.default.full['3-max'],
            lg: radius_1.default.full['4'],
            'lg-max': radius_1.default.full['4-max'],
            xl: radius_1.default.full['5'],
            'xl-max': radius_1.default.full['5-max'],
            '2xl': radius_1.default.full['6'],
            '2xl-max': radius_1.default.full['6-max'],
            full: radius_1.default.full['6-max'],
        },
        spacing: Object.assign(Object.assign({}, spacing_1.default), tokens_1.default.space),
    },
    // plugins: [plugin],
};
exports.default = config;
