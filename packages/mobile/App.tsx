import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className={"justify-center items-center flex-1 bg-dark-optiblue4"}>
      <Text className={"text-dark-optiblue9"}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
