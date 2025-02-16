import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";

interface Props {
  onPress?: () => void;
}

export const Featured = ({ onPress }: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className="flex flex-col items-start w-60 h-80 relative"
      >
        <Image source={images.japan} className="size-full rounded-2xl" />
        <Image
          source={images.cardGradient}
          className="size-full rounded-2xl absolute bottom-0"
        />
        <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
          <Image source={icons.star} className="size-2.5" />
          <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
            4.4
          </Text>
        </View>
        <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
          <Text
            className="text-xl font-rubik-extraBold text-white"
            numberOfLines={1}
          >
            Modern House
          </Text>
          <Text className="text-base font-rubik text-white">
            Durio I blok DC 19 NO 11
          </Text>
          <View className="flex flex-row items-center justify-between w-full">
            <Text className="text-xl font-rubik-extraBold text-white">
              $2,500
            </Text>
            <Image source={icons.heart} className="size-5" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      className="w-60 p-3 rounded-2xl bg-white shadow-lg relative"
      onPress={onPress}
    >
      {/* Badge Rating */}
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          4.8
        </Text>
      </View>

      {/* Image */}
      <Image source={images.newYork} className="w-full h-36 rounded-lg" />

      {/* Text Content */}
      <View className="mt-3">
        <Text className="text-lg font-rubik-bold text-black-300">
          La Grand Maison
        </Text>
        <Text className="text-sm font-rubik text-black-100">Tokyo, Japan</Text>

        {/* Price and Favorite Icon */}
        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-lg font-rubik-bold text-primary-300">
            $17821
          </Text>
          <TouchableOpacity>
            <Image
              source={icons.heart}
              className="w-5 h-5"
              tintColor="#191D31"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
