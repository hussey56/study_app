import React from "react";
import { Redirect, Stack, usePathname } from "expo-router";
const AuthLayout = () => {
  const pathName = usePathname();

  return (
    <Stack>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="forget_password" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
