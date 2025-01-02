import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colors, images, icons } from "../constants/index";
import * as Progress from "react-native-progress";
import image from "../constants/image";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProgressDonut from "../components/ProgressDonut";
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
  const dummyimages = [
    icons.chemistry,
    icons.genral,
    icons.physics,
    icons.biology,
  ];
  const refreshActivity = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor={"black"}
            refreshing={refreshing}
            onRefresh={refreshActivity}
          />
        }
      >
        <>
          <View className="gap-y-2">
            <View className={`bg-primary-100`}>
              <View className="w-full py-6 px-3 flex-row justify-between items-enter">
                <TouchableOpacity
                  onPress={() => router.push("/(tabs)/settings")}
                >
                  <Image
                    source={images.maleAvatar}
                    className="w-14 h-14"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View className="flex-1 px-4">
                  <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-lg font-pmedium text-black">
                      My Level Progress
                    </Text>
                    <Text className="text-md font-pmedium text-yellow-200">
                      2056 XP
                    </Text>
                  </View>
                  <View className="flex-1">
                    <View className="flex-1 border border-slate-200 rounded-xl h-2 overflow-hidden">
                      <View
                        className="h-full rounded"
                        style={{
                          backgroundColor: "white",
                          width: "50%",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => router.push("/(tabs)/settings")}
                  className="w-12 h-12 rounded-full border-[1.5px] border-black p-1 items-center justify-center"
                >
                  <Image
                    source={icons.notification}
                    className="w-7 h-7"
                    tintColor={"black"}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity className="px-3 pt-3 ">
              <Image
                source={icons.menu}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View className="py-2 px-3 gap-y-1">
              <Text className="font-pregular text-lg text-slate-500">
                Hi, <Text className="text-black">Hassan</Text>
              </Text>
              <Text className=" font-pbold text-3xl text-dark-100">
                Let's start learning
              </Text>
            </View>
          </View>
          <View className="p-4 gap-4 mb-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-[#7E80D8] font-bold">
                My Subjects
              </Text>
              <TouchableOpacity>
                <AntDesign name="plus" size={28} color="#7E80D8" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={dummyimages}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Image
                    source={item}
                    className="w-20 h-20 mr-4 "
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View className="h-48">
            <Image
              source={images.banner}
              resizeMode="cover"
              className="w-full h-full"
            />
          </View>
          <TouchableOpacity className="my-2">
            <Text className="text-center text-2xl text-black font-pbold">
              Test Yourself
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center justify-between py-2 px-3">
            <Text className="text-2xl text-dark-100 font-bold">
              Continue doing
            </Text>
            <TouchableOpacity>
              <Text className="text-lg text-slate-400 font-pregular">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center justify-around my-3">
            <ProgressDonut progress={55} size={85} strokeWidth={10} />
            <ProgressDonut progress={25} size={85} strokeWidth={10} />
            <ProgressDonut progress={85} size={85} strokeWidth={10} />
          </View>
        </>
      </ScrollView>
      <StatusBar style="dark" backgroundColor={colors.PRIMARYCOLOR} />
    </SafeAreaView>
  );
};

export default HomeScreen;
