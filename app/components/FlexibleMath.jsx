import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MathView from "react-native-math-view";

const MathText = ({ text }) => {
  // Split the text by LaTeX expressions
  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <View style={styles.container}>
      {parts.map((part, index) => {
        // Check if the part is a LaTeX expression
        if (part.startsWith("$") && part.endsWith("$")) {
          const mathExpression = part.slice(1, -1); // Remove the $ symbols
          return (
            <MathView key={index} math={mathExpression} style={styles.math} />
          );
        }
        // Render regular text
        return (
          <Text key={index} style={styles.text}>
            {part}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    margin: 2,
    color: "white",
  },
  math: {
    fontSize: 16,
    margin: 2,
    color: "white",

    width: "auto", // Adjust width as needed
  },
});

export default MathText;
