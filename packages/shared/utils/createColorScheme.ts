const createColorScheme = (
  colorSource: { [key: string]: string },
  prefix = "",
  sourcePrefix: string
) => {
  const colorScheme = {} as { [key: string]: string };
  for (let i = 1; i <= 12; i++) {
    colorScheme[`${prefix}${i}`] = colorSource[`${sourcePrefix}${i}`];
  }
  return colorScheme;
};

export default createColorScheme;
