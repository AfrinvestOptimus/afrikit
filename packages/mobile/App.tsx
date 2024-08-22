import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import "./global.css";
import { useColorScheme } from "nativewind";
import Icon from "react-native-remix-icon";
import colors from "../shared/colors";

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <View
      className={
        "justify-center items-center flex-1 bg-light-optiblue4 dark:bg-dark-optiblue4"
      }
    >
      <Icon
        name="ri-home-wifi-line"
        size="24"
        color={colorScheme === "light" ? colors.light.cyan9 : colors.dark.red9}
      />
      <Text className={"text-light-optiblue9 dark:text-dark-optiblue11"}>
        You can test your components on this screen!
      </Text>

      <Pressable
        onPress={() =>
          setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
        className={"bg-light-optiblue9 px-md py-sm rounded-lg mt-2xl"}
      >
        <Text className="">Set Colorscheme</Text>
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}
