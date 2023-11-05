import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RestaurantScreen() {
  const {
    params: { item },
  } = useRoute();
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View className="px-4">
        <Text>RestaurantScreen</Text>
        <Text>{item.name}</Text>
      </View>
    </SafeAreaView>
  );
}
