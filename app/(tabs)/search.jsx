import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View>
        <Text className="text-center text-3xl text-white">Search Tab</Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
