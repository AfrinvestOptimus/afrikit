type fontSizeType = [fontSize: string, lineHeight: string];

const fontSizes: { [key: string]: fontSizeType } = {
  xs: ["12px", "16px"],
  sm: ["14px", "20px"],
  base: ["16px", "24px"],
  lg: ["18px", "26px"],
  xl: ["20px", "28px"],
  "2xl": ["24px", "30px"],
  "3xl": ["28px", "36px"],
  "4xl": ["35px", "44px"],
  "5xl": ["60px", "60px"],
};
export default fontSizes;
