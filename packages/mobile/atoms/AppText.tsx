import {Text} from "react-native";
import {AppTextAtomProps} from "../types/atoms";
import {useColorScheme} from "nativewind";
import {classNames} from "../utilities/classnames";

/**
 * React functional component for rendering text with customizable properties.
 *
 * @component AppText
 * @param {Object} props - The properties for customizing the text.
 * @param {number} props.size - Select the size of the text from 1-9. The default value is 3.
 * @param {string} props.color - Select the color of the text from the Tailwind color palette. The default value is
 *   black.
 * @param {string} props.trim - Select the trim of the text from normal, start, end, or both. The default value is
 *   normal.
 * @param {string} props.weight - Select the weight of the text from light, normal, medium, or bold. The default value
 *   is light.
 * @param {boolean} props.highContrast - Select the high contrast of the text. The default value is false.
 * @param {string} props.align - Select the alignment of the text from left, center, or right. The default value is
 *   left.
 * @param {ReactNode} props.children - The child elements to be rendered inside the text component.
 * @param {Object} props.rest - The rest of the props to be passed to the containing Text component.
 * @returns {ReactElement} The rendered AppText component.
 */
const AppText = ({
  size = 3,
  color = "slate4",
  trim = "normal",
  weight = "light",
  highContrast = false,
  align = "left",
  children,
  ...rest
}: AppTextAtomProps) => {
  const { colorScheme } = useColorScheme();
  const sizeClasses = {
    1: "text-one",
    2: "text-two",
    3: "text-three",
    4: "text-four",
    5: "text-five",
    6: "text-six",
    7: "text-seven",
    8: "text-eight",
    9: "text-nine",
  };
  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  };
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Text
      className={classNames(
        alignmentClasses[align as keyof typeof alignmentClasses],
        weightClasses[weight as keyof typeof weightClasses],
        `${color}`,
        sizeClasses[size as keyof typeof sizeClasses],
        highContrast ? `text-${colorScheme}-type-gray-muted` : ""
      )}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default AppText;
