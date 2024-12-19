import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Implement login logic here
    console.log("Login attempted with:", email, password);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-800">
      <View className="py-4 px-3">
        <Ionicons
          name="chevron-back"
          size={30}
          onPress={() => router.back()}
          color={"#ffffff"}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-start px-5 "
      >
        <View className="bg-gray-900 p-8 rounded-xl shadow-md">
          <Text className="text-4xl font-psemibold text-start text-green-500 mb-2">
            Forget Password
          </Text>
          <Text className="text-lg font-pregular text-start mb-6 text-white">
            Enter your email to get a recovery code.
          </Text>

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#6B7280"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="border border-gray-700 p-3 rounded-md mb-4 text-base text-green-200 bg-gray-800"
          />

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-green-600 p-4 rounded-md items-center mb-6"
          >
            <Text className="text-white text-base font-bold">Find Account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default ForgetPassword;
