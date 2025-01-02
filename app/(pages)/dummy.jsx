import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const DummyScreen = () => {
  const units = [
    {
      title: "Unit 1",
      lessons: [
        { type: "cell", completed: true, id: 1 },
        { type: "cell", completed: true, id: 2 },
        { type: "cell", completed: false, id: 3 },
        { type: "crown", completed: false, id: 4 },
        { type: "cell", completed: false, id: 5 },
        { type: "cell", completed: false, id: 6 },
        { type: "cell", completed: false, id: 7 },
        { type: "crown", completed: false, id: 8 },
      ],
    },
    {
      title: "Unit 2",
      lessons: [
        { type: "cell", completed: false, id: 1 },
        { type: "cell", completed: false, id: 2 },
        { type: "cell", completed: false, id: 3 },
        { type: "crown", completed: false, id: 4 },
      ],
    },
  ];

  const LessonCircle = ({ completed, type, id }) => (
    <TouchableOpacity
      className={`h-16 w-16  rounded-full items-center justify-center ${
        completed ? "bg-[#58CC02]" : "bg-[#E5E5E5]"
      } ${id % 2 == 0 ? "ml-8" : ""}`}
    >
      {type === "crown" ? (
        <FontAwesome5
          name="crown"
          color={completed ? "#FFF" : "#B4B4B4"}
          size={24}
        />
      ) : (
        <AntDesign
          name="star"
          color={completed ? "#FFF" : "#B4B4B4"}
          size={24}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-4 h-16">
        <Text className="text-xl font-bold">Biology</Text>
      </View>

      <ScrollView className="flex-1 px-4">
        {units.map((unit, unitIndex) => (
          <View key={unitIndex} className="mb-8">
            <Text className="text-lg font-bold text-[#4B4B4B] mb-4">
              {unit.title}
            </Text>
            <View className="flex-row justify-between mb-6">
              <View className="w-40 h-40 bg-[#F7F7F7] rounded-2xl items-center justify-center mt-8 flex-1">
                <Text className="text-gray-400">Progress Chart</Text>
              </View>
              <View className="flex-1 pl-6">
                {unit.lessons.map((lesson, lessonIndex) => (
                  <View key={lessonIndex} className={`mb-4`}>
                    <LessonCircle {...lesson} />
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View className="h-16 bg-[#58CC02] mx-4 mb-4 rounded-xl items-center justify-center">
        <Text className="text-white font-bold text-lg">START LESSON</Text>
      </View>
    </SafeAreaView>
  );
};

export default DummyScreen;
