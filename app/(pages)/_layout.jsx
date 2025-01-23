import { Stack } from "expo-router";
import React from "react";

const PageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="quiz" options={{ headerShown: false }} />
      <Stack.Screen name="sample" options={{ headerShown: false }} />
      <Stack.Screen name="dummy" options={{ headerShown: false }} />
      <Stack.Screen name="freeStyle" options={{ headerShown: false }} />
      <Stack.Screen name="notification" options={{ headerShown: false }} />
      <Stack.Screen name="new" options={{ headerShown: false }} />
    </Stack>
  );
};

export default PageLayout;
