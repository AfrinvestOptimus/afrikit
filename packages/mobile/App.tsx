import { StatusBar } from "expo-status-bar";
import { Appearance, View } from "react-native";
import "./global.css";
import StorybookUIRoot from "./.storybook";
import { useColorScheme } from "nativewind";
import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  useFonts,
} from "@expo-google-fonts/manrope";

import AppTitle from "./atoms/AppTitle";
import AppText from "./atoms/AppText";

export default function App() {
  const { colorScheme } = useColorScheme();
  const { setColorScheme } = Appearance;
  const [fontsLoaded, fontError] = useFonts({
    Manrope400: Manrope_400Regular,
    Manrope500: Manrope_500Medium,
    Manrope600: Manrope_600SemiBold,
    Manrope700: Manrope_700Bold,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

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
      <AppText
        size={2}
        color={"text-dark-red9"}
        weight={"regular"}
        align={"left"}
        className={"mb-2xl"}
        onPress={() => console.log("AppText pressed")}
      >
        Small bold text involved
      </AppText>

      <AppTitle
        title={"Title"}
        align={"left"}
        hasSubtitle={true}
        subtitle="Subtitle"
        spacing={1}
        titlePosition="top"
      />

      <StatusBar style="dark" backgroundColor="red" />
    </View>
  );
}
