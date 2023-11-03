import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl text-red-600">Hello gyes ! its restaurant</Text>
      <StatusBar style="auto" />
    </View>
  );
}
