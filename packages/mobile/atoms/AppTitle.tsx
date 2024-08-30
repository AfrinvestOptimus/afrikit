import { memo } from "react";
import { Text, View } from "react-native";
import { classNames } from "../utilities/classnames";
import { AppTitleAtomProps } from "../types/atoms";

function AppTitle({
  title,
  subtitle,
  align,
  titlePosition = "top",
  spacing,
  hasSubtitle = false,
}: AppTitleAtomProps) {
  return (
    <View
      className={classNames(
        "",
        align === "center" ? "items-center" : "items-start",
        titlePosition === "top"
          ? "flex-col"
          : titlePosition === "bottom"
          ? "flex-col-reverse"
          : "",
        spacing === 2 ? "gap-y-sm" : spacing === 3 ? "gap-y-lg" : ""
      )}
    >
      <Text
        className={classNames(
          "text-h2 font-bold text-light-type-gray dark:text-dark-type-gray"
        )}
      >
        {title}
      </Text>
      {hasSubtitle && (
        <Text
          className={
            "text-body2 font-normal text-light-type-gray-muted dark:text-dark-type-gray-muted"
          }
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
}

export default memo(AppTitle);
