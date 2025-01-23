import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../constants/image";
import SearchInput from "../components/SearchInput";
import QuizTypeButton from "../components/QuizTypeButton";
import { router } from "expo-router";
const LearnScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-4 w-full ">
        <Text className="text-3xl font-pbold text-dark-100">Let's Learn!</Text>
      </View>
      <View className="px-6 py-3 flex-1 justify-center ">
        <View className="my-2 gap-y-6 ">
          <QuizTypeButton
            label="Free Style"
            icon={image.training}
            className="bg-red-500 shadow"
            onPress={() => router.push("/(pages)/freeStyle")}
          />
          <QuizTypeButton
            label="Time Trial"
            icon={image.study}
            className="bg-blue-500 shadow"
            onPress={() => router.push("/(pages)/sample")}
          />
          <QuizTypeButton
            label="Past Papers"
            icon={image.pastpaper}
            className="bg-green-500 shadow"
            onPress={() => router.push("/(pages)/dummy")}
          />
          <QuizTypeButton
            label="New Paper"
            icon={image.pastpaper}
            className="bg-yellow-500 shadow"
            onPress={() => router.push("/(pages)/new")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LearnScreen;
