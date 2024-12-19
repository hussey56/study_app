import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../constants/image";
import SearchInput from "../components/SearchInput";
import QuizTypeButton from "../components/QuizTypeButton";
import { router } from "expo-router";
const LearnScreen = () => {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="px-6 py-3">
        <View className="flex-row justify-between items-center my-2">
          <View>
            <Text className="font-pbold text-3xl text-white">Courses</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/(tabs)/settings")}>
            <Image
              source={image.maleAvatar}
              className="w-14 h-14"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View className="my-2">
          <SearchInput />
        </View>
        <View className="my-2  gap-y-8 px-2">
          <QuizTypeButton
            label="Training"
            icon={image.training}
            className="bg-red-500"
          />
          <QuizTypeButton
            label="Study"
            icon={image.study}
            className="bg-blue-500"
          />
          <QuizTypeButton
            label="Past Papers"
            icon={image.pastpaper}
            className="bg-green-500"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LearnScreen;
