import { Tabs } from "expo-router";
import React from "react";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { colors } from "../constants";
import { View } from "react-native";
const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderColor: "white",
        },
        tabBarActiveTintColor: colors.PRIMARYCOLOR,
        tabBarInactiveTintColor: "#4B5563",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Performance",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="graph" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Account",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
