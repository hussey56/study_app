import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { colors } from "../constants";

const ProgressDonut = ({ progress = 75, size = 200, strokeWidth = 20 }) => {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View
      style={{
        width: size + 10,
        height: size + 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Svg
        width={size}
        height={size}
        style={{ transform: [{ rotate: "-90deg" }] }}
      >
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors.DARKCOLOR}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors.PRIMARYCOLOR}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      <Text
        style={{
          position: "absolute",
          fontSize: size * 0.15,
          fontWeight: "bold",
        }}
      >
        {progress}%
      </Text>
    </View>
  );
};

export default ProgressDonut;
