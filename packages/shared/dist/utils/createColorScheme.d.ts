declare const createColorScheme: (colorSource: {
    [key: string]: string;
}, prefix: string | undefined, sourcePrefix: string) => {
    [key: string]: string;
};
export default createColorScheme;
