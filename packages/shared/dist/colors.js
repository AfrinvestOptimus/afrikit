"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("@radix-ui/colors");
const opti = {
    blue: {
        light: {
            optiblue1: '#FBFDFF',
            optiblue2: '#F4F9FF',
            optiblue3: '#E8F3FE',
            optiblue4: '#DAEDFF',
            optiblue5: '#C9E3FE',
            optiblue6: '#B5D6F8',
            optiblue7: '#9BC5F0',
            optiblue8: '#74AEE7',
            optiblue9: '#117ACA',
            optiblue10: '#006CBB',
            optiblue11: '#0274C4',
            optiblue12: '#0E385B',
        },
        dark: {
            optiblue1: '#07121D',
            optiblue2: '#0C1A27',
            optiblue3: '#022848',
            optiblue4: '#003365',
            optiblue5: '#004078',
            optiblue6: '#004E8A',
            optiblue7: '#025FA2',
            optiblue8: '#0073C2',
            optiblue9: '#117ACA',
            optiblue10: '#006CBB',
            optiblue11: '#65BBFF',
            optiblue12: '#C6E5FF',
        },
        alphaLight: {
            optiblueA1: 'rgba(0,128,255,0.0157)',
            optiblueA2: 'rgba(0,116,255,0.0431)',
            optiblueA3: 'rgba(0,122,244,0.0902)',
            optiblueA4: 'rgba(0,131,255,0.1451)',
            optiblueA5: 'rgba(0,123,251,0.2118)',
            optiblueA6: 'rgba(1,114,231,0.2902)',
            optiblueA7: 'rgba(0,108,217,0.3922)',
            optiblueA8: 'rgba(0,107,211,0.5451)',
            optiblueA9: 'rgba(0,113,198,0.9322)',
            optiblueA10: '#006CBB',
            optiblueA11: 'rgba(0,115,196,0.9922)',
            optiblueA12: 'rgba(0,44,82,0.9451)',
        },
        alphaDark: {
            optiblueA1: 'rgba(0,37,253,0.051)',
            optiblueA2: 'rgba(0,113,251,0.0941)',
            optiblueA3: 'rgba(0,117,255,0.2314)',
            optiblueA4: 'rgba(0,114,255,0.3529)',
            optiblueA5: 'rgba(0,125,253,0.4353)',
            optiblueA6: 'rgba(0,137,255,0.5098)',
            optiblueA7: 'rgba(0,144,254,0.6118)',
            optiblueA8: 'rgba(0,149,255,0.7451)',
            optiblueA9: 'rgba(17,151,254,0.7804)',
            optiblueA10: 'rgba(0,144,254,0.7176)',
            optiblueA11: '#65BBFF',
            optiblueA12: '#C6E5FF',
        },
    },
    gray: {
        light: {
            optigray1: '#FBFCFE',
            optigray2: '#F6FAFD',
            optigray3: '#EBF1F6',
            optigray4: '#E1EAF0',
            optigray5: '#D8E3EB',
            optigray6: '#CFDCE5',
            optigray7: '#C1D1DD',
            optigray8: '#A9BFD0',
            optigray9: '#7B91A1',
            optigray10: '#708696',
            optigray11: '#546774',
            optigray12: '#14212A',
            optigray13: "#60646C"
        },
        dark: {
            optigray1: '#000000',
            optigray2: '#07141D',
            optigray3: '#0D212E',
            optigray4: '#152A38',
            optigray5: '#1D3241',
            optigray6: '#263C4A',
            optigray7: '#344A59',
            optigray8: '#4D6474',
            optigray9: '#5A7182',
            optigray10: '#677F8F',
            optigray11: '#9FB7C9',
            optigray12: '#E4F0F9',
        },
        alphaLight: {
            optigray1: 'rgba(0,64,192,0.0157)',
            optigray2: 'rgba(0,114,199,0.0353)',
            optigray3: 'rgba(0,77,141,0.0784)',
            optigray4: 'rgba(0,77,128,0.1174)',
            optigray5: 'rgba(0,72,125,0.1529)',
            optigray6: 'rgba(0,70,117,0.1882)',
            optigray7: 'rgba(0,66,116,0.2434)',
            optigray8: 'rgba(0,66,116,0.3373)',
            optigray9: 'rgba(0,43,74,0.5176)',
            optigray10: 'rgba(0,40,68,0.5608)',
            optigray11: 'rgba(0,29,48,0.6706)',
            optigray12: 'rgba(0,14,24,0.9216)',
        },
        alphaDark: {
            optigray1: 'rgba(0,0,0,0)',
            optigray2: 'rgba(62,176,255,0.11)',
            optigray3: 'rgba(73,183,255,0.18)',
            optigray4: 'rgba(96,192,255,0.22)',
            optigray5: 'rgba(114,197,255,0.26)',
            optigray6: 'rgba(131,207,255,0.29)',
            optigray7: 'rgba(149,213,255,0.35)',
            optigray8: 'rgba(170,220,255,0.45)',
            optigray9: 'rgba(177,222,255,0.51)',
            optigray10: 'rgba(184,227,255,0.56)',
            optigray11: 'rgba(202,232,255,0.79)',
            optigray12: 'rgba(234,246,255,0.98)',
        },
    },
};
const createColorScheme = (colorSource, prefix = '', sourcePrefix) => {
    const colorScheme = {};
    for (let i = 1; i <= 12; i++) {
        colorScheme[`${prefix}${i}`] = colorSource[`${sourcePrefix}${i}`];
    }
    return colorScheme;
};
const { light: optiBlueLight, dark: optiBlueDark, alphaLight: optiBlueAlphaLight, alphaDark: optiBlueAlphaDark, } = opti.blue;
const accent = {
    light: createColorScheme(optiBlueLight, 'accent', 'optiblue'),
    dark: createColorScheme(optiBlueDark, 'accent', 'optiblue'),
    alphaLight: createColorScheme(optiBlueAlphaLight, 'accentA', 'optiblueA'),
    alphaDark: createColorScheme(optiBlueAlphaDark, 'accentA', 'optiblueA'),
};
const neutral = {
    light: createColorScheme(colors_1.slate, 'neutral', 'slate'),
    dark: createColorScheme(colors_1.slateDark, 'neutral', 'slate'),
    alphaLight: createColorScheme(colors_1.slateA, 'neutralA', 'slateA'),
    alphaDark: createColorScheme(colors_1.slateDarkA, 'neutralA', 'slateA'),
};
const error = {
    light: createColorScheme(colors_1.red, 'error', 'red'),
    dark: createColorScheme(colors_1.redDark, 'error', 'red'),
    alphaLight: createColorScheme(colors_1.redA, 'errorA', 'redA'),
    alphaDark: createColorScheme(colors_1.redDarkA, 'errorA', 'redA'),
};
const success = {
    light: createColorScheme(colors_1.green, 'success', 'green'),
    dark: createColorScheme(colors_1.greenDark, 'success', 'green'),
    alphaLight: createColorScheme(colors_1.greenA, 'successA', 'greenA'),
    alphaDark: createColorScheme(colors_1.greenDarkA, 'successA', 'greenA'),
};
const warning = {
    light: createColorScheme(colors_1.amber, 'warning', 'amber'),
    dark: createColorScheme(colors_1.amberDark, 'warning', 'amber'),
    alphaLight: createColorScheme(colors_1.amberA, 'warningA', 'amberA'),
    alphaDark: createColorScheme(colors_1.amberDarkA, 'warningA', 'amberA'),
};
const info = {
    light: createColorScheme(colors_1.sky, 'info', 'sky'),
    dark: createColorScheme(colors_1.skyDark, 'info', 'sky'),
    alphaLight: createColorScheme(colors_1.skyA, 'infoA', 'skyA'),
    alphaDark: createColorScheme(colors_1.skyDarkA, 'infoA', 'skyA'),
};
const semantics = {
    error,
    success,
    warning,
    info,
};
const createColorState = (primary, hover, pressed) => ({
    DEFAULT: primary,
    hover,
    pressed,
});
const createColorStateText = ({ primary, muted, placeholder, disabled, inverse, bold, isGray = false, }) => (Object.assign({ DEFAULT: primary, inverse }, (isGray ? { muted, placeholder, disabled } : { bold })));
const createTextColorScheme = ({ color, alpha, string, grayDef, }) => createColorStateText({
    primary: grayDef || alpha[`${string}A11`],
    muted: color[`${string}11`],
    placeholder: alpha[`${string}A9`],
    disabled: alpha[`${string}A8`],
    inverse: color[`${string}1`],
    bold: color[`${string}12`],
    isGray: !!grayDef,
});
const typeColors = {
    light: {
        gray: createTextColorScheme({
            color: neutral.light,
            alpha: neutral.alphaLight,
            string: 'neutral',
            grayDef: '#131518',
        }),
        accent: createTextColorScheme({
            color: accent.light,
            alpha: accent.alphaLight,
            string: 'accent',
        }),
        success: createTextColorScheme({
            color: success.light,
            alpha: success.alphaLight,
            string: 'success',
        }),
        error: createTextColorScheme({
            color: error.light,
            alpha: error.alphaLight,
            string: 'error',
        }),
        warning: createTextColorScheme({
            color: warning.light,
            alpha: warning.alphaLight,
            string: 'warning',
        }),
        info: createTextColorScheme({
            color: info.light,
            alpha: info.alphaLight,
            string: 'info',
        }),
        tomato: createTextColorScheme({
            color: colors_1.tomato,
            alpha: colors_1.tomatoA,
            string: 'tomato',
        }),
        violet: createTextColorScheme({
            color: colors_1.violet,
            alpha: colors_1.violetA,
            string: 'violet',
        }),
        cyan: createTextColorScheme({
            color: colors_1.cyan,
            alpha: colors_1.cyanA,
            string: 'cyan',
        }),
    },
    dark: {
        gray: createTextColorScheme({
            color: neutral.dark,
            alpha: neutral.alphaDark,
            string: 'neutral',
            grayDef: '#FFF',
        }),
        accent: createTextColorScheme({
            color: accent.dark,
            alpha: accent.alphaDark,
            string: 'accent',
        }),
        success: createTextColorScheme({
            color: success.dark,
            alpha: success.alphaDark,
            string: 'success',
        }),
        error: createTextColorScheme({
            color: error.dark,
            alpha: error.alphaDark,
            string: 'error',
        }),
        warning: createTextColorScheme({
            color: warning.dark,
            alpha: warning.alphaDark,
            string: 'warning',
        }),
        info: createTextColorScheme({
            color: info.dark,
            alpha: info.alphaDark,
            string: 'info',
        }),
        tomato: createTextColorScheme({
            color: colors_1.tomatoDark,
            alpha: colors_1.tomatoDarkA,
            string: 'tomato',
        }),
        violet: createTextColorScheme({
            color: colors_1.violetDark,
            alpha: colors_1.violetDarkA,
            string: 'violet',
        }),
        cyan: createTextColorScheme({
            color: colors_1.cyanDark,
            alpha: colors_1.cyanDarkA,
            string: 'cyan',
        }),
    },
};
const createColorStateBorder = ({ primary, light, lighter, strong, subtle, hover, active, isGray = false, }) => (Object.assign({ DEFAULT: primary, strong }, (isGray ? { subtle, hover, active } : { light, lighter })));
const createBorderColorScheme = ({ alpha, string, isGray = false, }) => createColorStateBorder({
    primary: isGray ? alpha[`${string}A6`] : alpha[`${string}A8`],
    light: alpha[`${string}A7`],
    lighter: alpha[`${string}A6`],
    strong: alpha[`${string}A11`],
    subtle: alpha[`${string}A5`],
    hover: alpha[`${string}A8`],
    active: alpha[`${string}A9`],
    isGray,
});
const createBgColorScheme = (colorVariant, alphaColorVariant, string) => ({
    transparent: createColorState('rgba(252,252,253,0)', alphaColorVariant[`${string}A3`], alphaColorVariant[`${string}A4`]),
    base: createColorState(colorVariant[`${string}9`], colorVariant[`${string}10`], colorVariant[`${string}10`]),
    light: createColorState(alphaColorVariant[`${string}A3`], alphaColorVariant[`${string}A4`], alphaColorVariant[`${string}A5`]),
    lighter: createColorState(alphaColorVariant[`${string}A2`], alphaColorVariant[`${string}A3`], alphaColorVariant[`${string}A4`]),
    bold: createColorState(colorVariant[`${string}12`], colorVariant[`${string}12`], colorVariant[`${string}12`]),
});
const borderColors = {
    light: {
        disable: neutral.alphaLight.neutralA6,
        gray: createBorderColorScheme({
            alpha: neutral.alphaLight,
            string: 'neutral',
            isGray: true,
        }),
        accent: createBorderColorScheme({
            alpha: accent.alphaLight,
            string: 'accent',
        }),
        success: createBorderColorScheme({
            alpha: success.alphaLight,
            string: 'success',
        }),
        error: createBorderColorScheme({
            alpha: error.alphaLight,
            string: 'error',
        }),
        warning: createBorderColorScheme({
            alpha: warning.alphaLight,
            string: 'warning',
        }),
        info: createBorderColorScheme({
            alpha: info.alphaLight,
            string: 'info',
        }),
    },
    dark: {
        disable: neutral.alphaDark.neutralA6,
        gray: createBorderColorScheme({
            alpha: neutral.alphaDark,
            string: 'neutral',
            isGray: true,
        }),
        accent: createBorderColorScheme({
            alpha: accent.alphaDark,
            string: 'accent',
        }),
        success: createBorderColorScheme({
            alpha: success.alphaDark,
            string: 'success',
        }),
        error: createBorderColorScheme({
            alpha: error.alphaDark,
            string: 'error',
        }),
        warning: createBorderColorScheme({
            alpha: warning.alphaDark,
            string: 'warning',
        }),
        info: createBorderColorScheme({
            alpha: info.alphaDark,
            string: 'info',
        }),
    },
};
const bgColors = {
    light: {
        disable1: neutral.alphaLight.neutralA3,
        disable2: neutral.alphaLight.neutralA2,
        accent: createBgColorScheme(accent.light, accent.alphaLight, 'accent'),
        neutral: createBgColorScheme(neutral.light, neutral.alphaLight, 'neutral'),
        success: createBgColorScheme(success.light, success.alphaLight, 'success'),
        error: createBgColorScheme(error.light, error.alphaLight, 'error'),
        warning: createBgColorScheme(warning.light, warning.alphaLight, 'warning'),
        info: createBgColorScheme(info.light, info.alphaLight, 'info'),
    },
    dark: {
        disable1: neutral.alphaDark.neutralA3,
        disable2: neutral.alphaDark.neutralA2,
        accent: createBgColorScheme(accent.dark, accent.alphaDark, 'accent'),
        neutral: createBgColorScheme(neutral.dark, neutral.alphaDark, 'neutral'),
        success: createBgColorScheme(success.dark, success.alphaDark, 'success'),
        error: createBgColorScheme(error.dark, error.alphaDark, 'error'),
        warning: createBgColorScheme(warning.dark, warning.alphaDark, 'warning'),
        info: createBgColorScheme(info.dark, info.alphaDark, 'info'),
    },
};
const variables = {
    light: {
        'white-to-dark': '#FFFFFF',
        'white-to-dark2': '#FFFFFF',
        'dark-to-white': '#131518',
        backdrop: neutral.alphaLight.neutralA8,
        translucent: 'rgba(255,255,255,0.8)',
        solid: 'rgba(255,255,255,1)',
    },
    dark: {
        'white-to-dark': neutral.dark.neutral1,
        'white-to-dark2': 'rgba(0,0,0,0.25)',
        'dark-to-white': '#FFFFFF',
        backdrop: 'rgba(0,0,0,0.75)',
        translucent: 'rgba(29,29,33,0.7)',
        solid: neutral.dark.neutral2,
    },
    alphaLight: {
        overlay: {
            black1: 'rgba(0,0,0,0.012)',
            black2: 'rgba(0,0,0,0.024)',
            black3: 'rgba(0,0,0,0.055)',
            black4: 'rgba(0,0,0,0.078)',
            black5: 'rgba(0,0,0,0.106)',
            black6: 'rgba(0,0,0,0.133)',
            black7: 'rgba(0,0,0,0.169)',
            black8: 'rgba(0,0,0,0.267)',
            black9: 'rgba(0,0,0,0.447)',
            black10: 'rgba(0,0,0,0.498)',
            black11: 'rgba(0,0,0,0.608)',
            black12: 'rgba(0,0,0,0.875)',
            white1: 'rgba(255,255,255,0)',
            white2: 'rgba(255,255,255,0.013)',
            white3: 'rgba(255,255,255,0.069)',
            white4: 'rgba(255,255,255,0.104)',
            white5: 'rgba(255,255,255,0.134)',
            white6: 'rgba(255,255,255,0.169)',
            white7: 'rgba(255,255,255,0.216)',
            white8: 'rgba(255,255,255,0.312)',
            white9: 'rgba(255,255,255,0.372)',
            white10: 'rgba(255,255,255,0.455)',
            white11: 'rgba(255,255,255,0.662)',
            white12: 'rgba(255,255,255,0.926)',
        },
    },
    alphaDark: {
        overlay: {
            black1: 'rgba(0,0,0,0.012)',
            black2: 'rgba(0,0,0,0.024)',
            black3: 'rgba(0,0,0,0.055)',
            black4: 'rgba(0,0,0,0.078)',
            black5: 'rgba(0,0,0,0.106)',
            black6: 'rgba(0,0,0,0.133)',
            black7: 'rgba(0,0,0,0.169)',
            black8: 'rgba(0,0,0,0.267)',
            black9: 'rgba(0,0,0,0.447)',
            black10: 'rgba(0,0,0,0.498)',
            black11: 'rgba(0,0,0,0.608)',
            black12: 'rgba(0,0,0,0.875)',
            white1: 'rgba(255,255,255,0)',
            white2: 'rgba(255,255,255,0.013)',
            white3: 'rgba(255,255,255,0.069)',
            white4: 'rgba(255,255,255,0.104)',
            white5: 'rgba(255,255,255,0.134)',
            white6: 'rgba(255,255,255,0.169)',
            white7: 'rgba(255,255,255,0.216)',
            white8: 'rgba(255,255,255,0.312)',
            white9: 'rgba(255,255,255,0.372)',
            white10: 'rgba(255,255,255,0.455)',
            white11: 'rgba(255,255,255,0.662)',
            white12: 'rgba(255,255,255,0.926)',
        },
    },
};
const themeColors = {
    light: {
        'page-bg': variables.light['white-to-dark'],
        'page-bg2': neutral.light.neutral3,
        surface: variables.light['white-to-dark2'],
        'surface-gray': neutral.alphaLight.neutralA3,
        'surface-accent': accent.alphaLight.accent2,
        overlay: variables.light.backdrop,
        'contrast-accent': '#FFFFFF',
        'contrast-white': '#FFFFFF',
        'contrast-black': '#131518',
    },
    dark: {
        'page-bg': variables.dark['white-to-dark'],
        'page-bg2': neutral.dark.neutral3,
        surface: variables.dark['white-to-dark2'],
        'surface-gray': neutral.alphaDark.neutralA3,
        'surface-accent': accent.alphaDark.accent2,
        overlay: variables.dark.backdrop,
        'contrast-accent': '#FFFFFF',
        'contrast-white': '#FFFFFF',
        'contrast-black': '#131518',
    },
};
const light = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, colors_1.tomato), colors_1.red), colors_1.crimson), colors_1.pink), colors_1.plum), colors_1.purple), colors_1.violet), colors_1.indigo), colors_1.blue), colors_1.cyan), colors_1.teal), colors_1.green), colors_1.orange), colors_1.brown), colors_1.sky), colors_1.mint), colors_1.lime), colors_1.yellow), colors_1.amber), colors_1.gray), colors_1.mauve), colors_1.slate), colors_1.sage), colors_1.olive), colors_1.sand), colors_1.bronze), colors_1.gold), colors_1.ruby), colors_1.iris), colors_1.jade), opti.blue.light), opti.gray.light), accent.light), neutral.light), semantics.error.light), semantics.success.light), semantics.warning.light), semantics.info.light), { background: Object.assign({}, bgColors.light), type: Object.assign({}, typeColors.light), edge: Object.assign({}, borderColors.light) }), variables.light), themeColors.light);
const dark = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, colors_1.tomatoDark), colors_1.redDark), colors_1.crimsonDark), colors_1.pinkDark), colors_1.plumDark), colors_1.purpleDark), colors_1.violetDark), colors_1.indigoDark), colors_1.blueDark), colors_1.cyanDark), colors_1.tealDark), colors_1.greenDark), colors_1.orangeDark), colors_1.brownDark), colors_1.skyDark), colors_1.mintDark), colors_1.limeDark), colors_1.yellowDark), colors_1.amberDark), colors_1.grayDark), colors_1.mauveDark), colors_1.slateDark), colors_1.sageDark), colors_1.oliveDark), colors_1.sandDark), colors_1.bronzeDark), colors_1.goldDark), colors_1.rubyDark), colors_1.irisDark), colors_1.jadeDark), opti.blue.dark), opti.gray.dark), accent.dark), neutral.dark), semantics.error.dark), semantics.success.dark), semantics.warning.dark), semantics.info.dark), { background: Object.assign({}, bgColors.dark), type: Object.assign({}, typeColors.dark), edge: Object.assign({}, borderColors.dark) }), variables.dark), themeColors.dark);
const alphaLight = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, colors_1.tomatoA), colors_1.redA), colors_1.crimsonA), colors_1.pinkA), colors_1.plumA), colors_1.purpleA), colors_1.violetA), colors_1.indigoA), colors_1.blueA), colors_1.cyanA), colors_1.tealA), colors_1.greenA), colors_1.orangeA), colors_1.brownA), colors_1.skyA), colors_1.mintA), colors_1.limeA), colors_1.yellowA), colors_1.amberA), colors_1.grayA), colors_1.mauveA), colors_1.slateA), colors_1.sageA), colors_1.oliveA), colors_1.sandA), colors_1.bronzeA), colors_1.goldA), colors_1.rubyA), colors_1.irisA), colors_1.jadeA), opti.blue.alphaLight), opti.gray.alphaLight), accent.alphaLight), neutral.alphaLight), semantics.error.alphaLight), semantics.success.alphaLight), semantics.warning.alphaLight), semantics.info.alphaLight), variables.alphaLight);
const alphaDark = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, colors_1.tomatoDarkA), colors_1.redDarkA), colors_1.crimsonDarkA), colors_1.pinkDarkA), colors_1.plumDarkA), colors_1.purpleDarkA), colors_1.violetDarkA), colors_1.indigoDarkA), colors_1.blueDarkA), colors_1.cyanDarkA), colors_1.tealDarkA), colors_1.greenDarkA), colors_1.orangeDarkA), colors_1.brownDarkA), colors_1.skyDarkA), colors_1.mintDarkA), colors_1.limeDarkA), colors_1.yellowDarkA), colors_1.amberDarkA), colors_1.grayDarkA), colors_1.mauveDarkA), colors_1.slateDarkA), colors_1.sageDarkA), colors_1.oliveDarkA), colors_1.sandDarkA), colors_1.bronzeDarkA), colors_1.goldDarkA), colors_1.rubyDarkA), colors_1.irisDarkA), colors_1.jadeDarkA), opti.blue.alphaDark), opti.gray.alphaDark), accent.alphaDark), neutral.alphaDark), semantics.error.alphaDark), semantics.success.alphaDark), semantics.warning.alphaDark), semantics.info.alphaDark), variables.alphaDark);
const darkColors = Object.assign(Object.assign({}, dark), alphaDark);
const lightColors = Object.assign(Object.assign({}, light), alphaLight);
const colors = {
    light: Object.assign({}, lightColors),
    dark: Object.assign({}, darkColors),
};
exports.default = colors;