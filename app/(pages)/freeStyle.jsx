import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";

const CurvedSnakeLayout = () => {
  const windowWidth = Dimensions.get("window").width;
  const cellSize = 70;
  const items = Array.from({ length: 15 }, (_, i) => i + 1);

  // Calculate curved positions for each cell
  const getPosition = (index) => {
    const period = 1; // Controls the frequency of the curve
    const amplitude = 80; // Controls the width of the curve
    const verticalSpacing = 80; // Space between rows

    return {
      left:
        Math.sin(index / period) * amplitude + (windowWidth / 2 - cellSize / 2),
      top: index * verticalSpacing,
    };
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ height: items.length * 60 + 100 }}>
        {items.map((item, index) => (
          <View
            key={item}
            style={{
              position: "absolute",
              width: cellSize,
              height: cellSize,
              borderRadius: cellSize / 2,
              backgroundColor: "#4CAF50",
              justifyContent: "center",
              alignItems: "center",
              ...getPosition(index),
            }}
          >
            <Text style={{ color: "white" }}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CurvedSnakeLayout;
