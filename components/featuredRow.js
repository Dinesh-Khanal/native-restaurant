import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See all
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
