import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const QuizTypeButton = ({
  icon,
  label,
  className,
  onPress,
}: {
  icon?: any;
  label: string;
  className: string;
  onPress?: void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress!}
      className={`${className} p-4 flex-row justify-around items-center rounded-lg`}
    >
      <Image className="w-12 h-12" resizeMode="contain" source={icon} />
      <Text className="font-pbold text-3xl text-white ">{label}</Text>
      <Image className="w-12 h-12" resizeMode="contain" source={icon} />
    </TouchableOpacity>
  );
};

export default QuizTypeButton;
