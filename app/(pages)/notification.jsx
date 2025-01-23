import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { icons } from "../constants/index";
const Notifications = () => {
  const notifications = [
    {
      id: 32,
      type: "payment",
      message: "Successfull Purchase",
    },
    {
      id: 1,
      type: "message",
      message: "Congratulations on completing Quiz S06/2022",
    },
    {
      id: 2,
      type: "message",
      message: "Congratulations on completing Quiz S06/2022",
    },
    {
      id: 3,
      type: "payment",
      message: "Successfull Purchase",
    },
    {
      id: 22,
      type: "message",
      message: "Congratulations on completing Quiz S06/2022",
    },
    {
      id: 33,
      type: "payment",
      message: "Successfull Purchase",
    },
  ];
  return (
    <SafeAreaView className="bg-white h-full ">
      <FlatList
        data={notifications}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <View className="h-28 px-2 py-2">
              <View className="h-full w-full bg-white shadow-sm rounded-xl flex-row items-center  px-4 py-2 gap-x-4 ">
                <View
                  className={` h-16 w-16 rounded-xl ${
                    item.type == "message" ? "bg-slate-100" : "bg-orange-100"
                  }  items-center justify-center`}
                >
                  <Image
                    resizeMode="contain"
                    source={item.type == "message" ? icons.message : icons.card}
                    tintColor={item.type == "message" ? "seagreen" : "orange"}
                    className="w-8 h-8"
                  />
                </View>
                <View className="flex-1 gap-y-1">
                  <Text
                    numberOfLines={1}
                    className="text-md font-pregular text-dark-100 "
                  >
                    {item.message}
                  </Text>
                  <Text className="text-sm font-pregular text-slate-400">
                    <MaterialCommunityIcons
                      name="clock-time-four"
                      size={14}
                      color="grey"
                    />{" "}
                    Just Now
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
        ListHeaderComponent={() => (
          <>
            <TouchableOpacity onPress={() => router.back()} className="p-2">
              <Ionicons
                name="chevron-back-circle-outline"
                size={36}
                color="black"
              />
            </TouchableOpacity>
            <View className="px-4 py-1">
              <View>
                <Text className="text-start text-4xl font-pbold text-dark-100">
                  Notifications
                </Text>
              </View>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Notifications;
