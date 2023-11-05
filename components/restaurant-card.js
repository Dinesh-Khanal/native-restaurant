import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Restaurant", { item })}>
      <View className="px-4 py-2">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="flex-row items-center space-x-1">
          <Image
            className="w-4 h-4"
            source={require("../assets/images/fullStar.png")}
          />
          <Text className="text-gray-500">
            <Text>{item.stars}</Text>
            <Text>{`, reviews ${item.reviews}`}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
