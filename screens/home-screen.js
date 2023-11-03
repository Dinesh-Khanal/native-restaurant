import { View, Text, TextInput, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 py-2">
        <View className="flex-row flex-1 items-center p-2 border border-gray-800 rounded-3xl">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Resturants"
            className="ml-2 flex-1"
            keyboardType="default"
          />
          <View className="flex-row items-center pl-2 space-x-2 border-0 border-l-2 border-gray-300">
            <Icon.MapPin width={20} height={20} stroke="gray" />
            <Text className="text-gray-400">New Your, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: "orange" }}
          className="p-3 rounded-full "
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row space-x-8 overflow-visible pl-4 pb-2"
      >
        <Text>Bean</Text>
        <Text>Bean</Text>
        <Text>Bean</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
