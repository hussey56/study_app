import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { router } from "expo-router";
import { getItem, setItem } from "../utils/local_storage";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get("window");

const OnBoardingScreen = () => {
  const handleDone = async () => {
    await setItem("onboarded", "1");
    const item = await getItem("onboarded");
    console.log(item);
    router.push("/(auth)/sign-in");
  };
  return (
    <View className="flex-1">
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        titleStyles={{
          fontWeight: "bold",
        }}
        containerStyles={{ paddingHorizontal: 15, height: height }}
        pages={[
          {
            backgroundColor: "#000000",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/animations/B1.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Challenge Yourself!",
            subtitle:
              "Discover fun quizzes, learn new things, and compete with others.",
          },
          {
            backgroundColor: "#26355d",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/animations/B2.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Prepare for Exams",
            subtitle: "Play quizzes and sharpen your mind.",
          },
          {
            backgroundColor: "#02383c",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/animations/B3.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Quiz Adventure",
            subtitle: "Discover, learn, and have fun.",
          },
        ]}
      />
      <StatusBar style="light" />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width,
  },
});
