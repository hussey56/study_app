import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MessageScreen = () => {
  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <View>
        <Text className="text-center text-white text-3xl">Message Tab</Text>
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
