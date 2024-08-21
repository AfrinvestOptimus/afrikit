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
      <Text className={"text-light-optiblue9 dark:text-dark-optiblue11"}>
        Open up App.tsx to start working on your app!
      </Text>

      <Icon
        name="ri-bank-fill"
        size="24"
        color={colorScheme === "light" ? colors.light.cyan9 : colors.dark.cyan9}
      />

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
