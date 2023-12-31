import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      className="overflow-visible"
    >
      {categories?.map((category) => {
        let isActive = category.id == activeCategory;
        let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
        let textClass = isActive
          ? " font-semibold text-gray-800"
          : " text-gray-500";
        return (
          <View
            key={category.id}
            className="flex justify-center items-center mr-6"
          >
            <TouchableOpacity
              className={"p-1 rounded-full shadow" + btnClass}
              onPress={() => setActiveCategory(category.id)}
            >
              <Image
                style={{ width: 45, height: 45 }}
                source={category.image}
              />
            </TouchableOpacity>
            <Text className={"text-sm" + textClass}>{category.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
