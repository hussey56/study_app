import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";

const CustomScrollIndicator = ({
  children,
  initialProgress = 0.2,
  indicatorColor = "#99CC29",
  trackColor = "#E0E0E0",
  indicatorHeight = 4,
  containerStyle = {},
}) => {
  const scrollViewRef = useRef(null);
  const [scrollProgress] = useState(new Animated.Value(0));
  const screenWidth = Dimensions.get("window").width;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollProgress } } }],
    { useNativeDriver: false }
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: indicatorHeight + 10 }}
      >
        {children}
      </ScrollView>

      <View
        style={[
          styles.trackStyle,
          {
            height: indicatorHeight,
            backgroundColor: trackColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.progressStyle,
            {
              height: "100%",
              backgroundColor: indicatorColor,
              width: scrollProgress.interpolate({
                inputRange: [0, screenWidth],
                outputRange: [`${initialProgress * 100}%`, "100%"],
                extrapolate: "clamp",
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  trackStyle: {
    position: "absolute",
    bottom: 0,
    left: 10,
    right: 10,
    borderRadius: 1,
  },
  progressStyle: {
    borderRadius: 1,
  },
});

export default CustomScrollIndicator;
