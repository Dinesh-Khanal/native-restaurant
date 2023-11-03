import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="px-4 py-2">
        <Text className="text-2xl text-red-600">
          Hello gyes ! its restaurant
        </Text>
      </View>
    </SafeAreaView>
  );
}
