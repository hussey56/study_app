import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { getItem, removeItem } from "../utils/local_storage";
import { images } from "../constants";

const SettingScreen = () => {
  const removeOnBoarding = async () => {
    await removeItem("onboarded");

    router.replace("/(auth)/sign-in");
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="px-6 py-4">
        <Text className="font-psemibold text-3xl text-white">Profile</Text>
      </View>
      <View className="bg-white my-8 mx-6 p-2 w-100 rounded-2xl shadow">
        <View className=" h-36 ">
          <View className="w-full h-36 items-center justify-center  ">
            <View
              className="absolute -top-16  h-30 w-30 justify-center items-center  border-green-500  p-1 gap-y-1 "
              style={{ borderRadius: 100 }}
            >
              <Image
                resizeMode="contain"
                className="h-28 w-28  p-1 border-2 border-green-500 bg-white"
                source={images.maleAvatar}
                style={{ borderRadius: 90 }}
              />
              <View className="mt-2 ">
                <Text className="text-gray-800 font-psemibold text-2xl text-center">
                  Hassan Khan
                </Text>
                <Text className="text-slate-400 text-lg font-pregular">
                  hassankhan123@gmail.com
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={removeOnBoarding}
          className="bg-red-500 p-4 rounded-xl mb-2"
        >
          <Text className="text-xl text-center font-pbold text-white">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
