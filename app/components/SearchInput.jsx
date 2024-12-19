import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import icon from "../constants/icon";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchInput = ({ props }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="w-full my-2">
          <View
            className={`flex flex-row justify-start items-center relative bg-white rounded-xl border border-green-100 focus:border-yellow-500 `}
          >
            <View className="ml-4">
              <AntDesign name="search1" size={24} color="#9ca3af" />
            </View>

            <TextInput
              placeholder="Search Course"
              className={`rounded-full p-5  font-JakartaSemiBold text-[16px] flex-1 text-left`}
              {...props}
            />
            <TouchableOpacity>
              <Image source={icon.filter} className={`w-6 h-6 mr-4`} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SearchInput;
