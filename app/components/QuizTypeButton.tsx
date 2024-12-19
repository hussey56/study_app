import { View, Text, Image } from "react-native";
import React from "react";

const QuizTypeButton = ({
  icon,
  label,
  className,
}: {
  icon?: any;
  label: string;
  className: string;
}) => {
  return (
    <View
      className={`${className} p-4 flex-row justify-around items-center rounded-lg`}
    >
      <Image className="w-12 h-12" resizeMode="contain" source={icon} />
      <Text className="font-pbold text-3xl text-white ">{label}</Text>
      <Image className="w-12 h-12" resizeMode="contain" source={icon} />
    </View>
  );
};

export default QuizTypeButton;
