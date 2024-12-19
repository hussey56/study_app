import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants/index";
import * as Progress from "react-native-progress";
import image from "../constants/image";
import { router } from "expo-router";
const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dummydata = [
    {
      _id: "938423",
      paper_name: "Moles, Paper 1",
      exam_type: "practice",
      total_question: 40,
      attempted: 31,
    },
    {
      _id: "93842323",
      paper_name: "Chemistry, Modular 2023",
      exam_type: "practice",
      total_question: 30,
      attempted: 21,
    },
  ];
  const dummyimages = [image.education, image.physics, image.chemistry];
  const refreshActivity = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <FlatList
        data={dummydata}
        className="shadow"
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center mx-4 my-1 p-2 gap-3">
            <Progress.Pie progress={0.4} size={20} color="white" />

            <Text className="text-lg font-pregular text-white flex-1">
              {item.paper_name}
            </Text>
            <Text className="text-white text-lg font-pmedium">
              {item.attempted}{" "}
              <Text className="text-slate-400 font-pregular text-md">
                /{item.total_question}
              </Text>
            </Text>
          </View>
        )}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl
            tintColor={"white"}
            refreshing={refreshing}
            onRefresh={refreshActivity}
          />
        }
        ListHeaderComponent={() => {
          return (
            <>
              <View className="h-64 mb-1">
                <View className="bg-green-500">
                  <View className="w-full h-40 py-8 px-6 flex-row justify-between">
                    <View>
                      <Text className="font-pbold text-3xl">Hi, Hassan</Text>
                      <Text className="font-pregular text-lg">
                        Let's start learning
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => router.push("/(tabs)/settings")}
                    >
                      <Image
                        source={images.maleAvatar}
                        className="w-14 h-14"
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                  <View className="w-full h-36  absolute top-24 p-3 mt-2   ">
                    <View className="bg-gray-800 shadow-lg rounded-lg h-full p-4">
                      <View className="flex-row justify-between items-center mb-2">
                        <Text className="text-lg font-pregular text-slate-400">
                          Learn Today
                        </Text>
                        <Text className="text-lg font-pregular text-yellow-400">
                          My courses
                        </Text>
                      </View>
                      <Text className="text-3xl font-psemibold text-white">
                        15min{" "}
                        <Text className="text-lg font-pregular text-slate-400">
                          /30min
                        </Text>
                      </Text>
                      <View className="w-full my-2">
                        <Progress.Bar
                          progress={0.5}
                          width={300}
                          height={5}
                          color={"#fcb045"}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="p-4 gap-6 mb-6">
                <Text className="text-2xl text-white font-pmedium">
                  Popular among students
                </Text>
                <FlatList
                  data={dummyimages}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <Image
                      source={item}
                      className="w-64 h-40 mr-8 rounded-lg"
                      resizeMode={"cover"}
                    />
                  )}
                />
              </View>
              <View className="p-4">
                <Text className="text-2xl text-white font-pmedium">
                  Continue Doing
                </Text>
              </View>
            </>
          );
        }}
      />

      <StatusBar style="light" backgroundColor="black" />
    </SafeAreaView>
  );
};

export default HomeScreen;
