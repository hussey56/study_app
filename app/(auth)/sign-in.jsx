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
import { useRouter } from "expo-router";
const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login logic here
    console.log("Login attempted with:", email, password);
    router.replace("/(tabs)/home");
  };

  const handleSocialLogin = (platform) => {
    // Implement social login logic
    console.log(`Attempting login with ${platform}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100 ">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center px-5 "
      >
        <View className=" p-7   rounded-lg  bg-white border-[0.5px] border-slate-200 ">
          <Text className="text-4xl font-psemibold text-start text-green-500 mb-2">
            Login
          </Text>
          <Text className="text-lg font-pregular text-start mb-6 text-dark-100">
            Access to your account to get started.
          </Text>

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#6B7280"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="border  border-slate-300 p-3 rounded-md mb-4 text-base text-black bg-white"
          />

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#6B7280"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="border  border-slate-300 p-3 rounded-md mb-4 text-base text-black bg-white"
          />
          <TouchableOpacity
            className="mb-4 flex-row justify-end "
            onPress={() => router.push("/(auth)/forget_password")}
          >
            <Text className="text-green-500 font-pregular text-sm">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-green-600 p-4 rounded-md items-center mb-6"
          >
            <Text className="text-white text-base font-bold">Sign In</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center space-x-4 gap-4 mb-4">
            <TouchableOpacity
              onPress={() => handleSocialLogin("Google")}
              className="bg-blue-500 p-3 rounded-full items-center "
            >
              <Ionicons name="logo-google" color="#FFF" size={24} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSocialLogin("Apple")}
              className="bg-black p-3 rounded-full items-center"
            >
              <Ionicons name="logo-apple" color="#FFF" size={24} />
            </TouchableOpacity>
          </View>

          {/* Forgot Password & Sign Up Links */}
          <View className="flex-row justify-center mt-4">
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
              <Text className="text-dark-100 font-pregular">
                Don't Have an Account?{" "}
                <Text className="text-green-500">Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SignIn;
