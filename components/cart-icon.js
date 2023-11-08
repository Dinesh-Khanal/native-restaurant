import { View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotal, selectBasketItems } from "../redux/basket-slice";
import { useNavigation } from "@react-navigation/native";

export default function CartIcon() {
  const navigation = useNavigation();
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View
      className="rounded-full w-full absolute bottom-2 z-20"
      style={{ backgroundColor: themeColors.bgColor(1) }}
    >
      <TouchableOpacity
        className="flex-row space-x-2 items-center justify-between"
        onPress={() => navigation.navigate("Cart")}
      >
        <View
          className="rounded-full mx-4 my-2"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        >
          <Text className="py-2 px-4 text-xl text-white">
            {basketItems.length}
          </Text>
        </View>
        <Text className="text-white text-center text-xl">View cart</Text>
        <Text className=" text-white text-xl pr-4">${basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}
