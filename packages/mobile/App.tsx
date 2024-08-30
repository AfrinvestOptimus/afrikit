import { StatusBar } from "expo-status-bar";
import { Appearance, Text, View } from "react-native";
import Icon from "react-native-remix-icon";
import colors from "./../shared/colors";
import "./global.css";
import StorybookUIRoot from "./.storybook";
import { useColorScheme } from "nativewind";
import AppText from "./atoms/AppText";

export default function App() {
  const { colorScheme } = useColorScheme();
  const { setColorScheme } = Appearance;
  const SHOW_STORYBOOK = true;
  if (SHOW_STORYBOOK) {
    return <StorybookUIRoot />;
  }

  return (
    <View
      className={
        "justify-center flex-1 bg-light-optiblue4 dark:bg-dark-optiblue4 px-2xl"
      }
    >
      <Icon
        name="ri-home-wifi-line"
        size="24"
        color={colorScheme === "light" ? colors.light.red9 : colors.dark.red9}
      />
      <Text className={"text-light-crimson9 dark:text-dark-crimson6 text-left"}>
        You can test your components on this screen!
      </Text>

      <AppText
        onPress={() =>
          setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
        size={4}
        color={
          colorScheme === "light"
            ? "text-light-crimson3"
            : "text-dark-optiblue9"
        }
        weight={"normal"}
        align={"center"}
      >
        A house
      </AppText>

      <StatusBar style="dark" backgroundColor="red" />
    </View>
  );
}
