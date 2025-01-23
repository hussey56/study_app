import { View, StyleSheet } from "react-native";
import React from "react";

import { MathJaxSvg } from "react-native-mathjax-html-to-svg";

const MathRenderer = ({ text, color = "red", font = 14 }) => {
  return (
    <View>
      <MathJaxSvg
        fontSize={font}
        color={color}
        fontCache
        style={StyleSheet.flatten([
          {
            backgroundColor: "transparent",
            alignItems: "center",
          },
          {
            justifyContent: "flex-start",
            marginVertical: 7,
          },
        ])}
      >
        {`<p>${text}</p>`}
      </MathJaxSvg>
    </View>
  );
};

export default MathRenderer;
