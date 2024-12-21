import { Stack } from "expo-router";
import React from "react";

const PageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="quiz" options={{ headerShown: false }} />
    </Stack>
  );
};

export default PageLayout;
