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
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fulname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const handleLogin = () => {
    // Implement login logic here
    console.log("Login attempted with:", email, password);
  };

  const handleSocialLogin = (platform) => {
    // Implement social login logic
    console.log(`Attempting login with ${platform}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-800">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center px-5 "
      >
        <View className="bg-gray-900 p-7 rounded-xl shadow-md">
          <Text className="text-4xl font-bold text-start text-green-500 mb-2">
            Register
          </Text>
          <Text className="text-lg font-regular text-start mb-6 text-white">
            Create your account to get started.
          </Text>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#6B7280"
            value={fulname}
            onChangeText={setEmail}
            autoCapitalize="none"
            className="border border-gray-700 p-3 rounded-md mb-4 text-base text-green-200 bg-gray-800"
          />
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

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#6B7280"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="border border-gray-700 p-3 rounded-md mb-6 text-base text-green-200 bg-gray-800"
          />
          {/* Gender Selection */}
          <View className="mb-6">
            <Text className="text-white font-pmedium mb-2">Select Gender:</Text>
            <View className="flex-row space-x-4 gap-4 ">
              <TouchableOpacity
                onPress={() => setGender("male")}
                className={`flex-row items-center ${
                  gender === "male" ? "bg-green-600" : "bg-gray-800"
                } p-3  rounded-md`}
              >
                <Text className="text-white">Male</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setGender("female")}
                className={`flex-row items-center ${
                  gender === "female" ? "bg-green-600" : "bg-gray-800"
                } p-3 rounded-md  `}
              >
                <Text className="text-white ">Female</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Sign up Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-green-600 p-4 rounded-md items-center mb-6"
          >
            <Text className="text-white text-base font-bold">
              Create Account
            </Text>
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
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
              <Text className="text-white">
                Already have an Account?{" "}
                <Text className="text-green-500">Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
