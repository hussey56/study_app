import { Tabs } from "expo-router";
import React from "react";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { View, Text } from "react-native";
const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          height: 78,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopEndRadius: 16,
          borderTopStartRadius: 16,
          borderColor: "black",
        },
        tabBarActiveTintColor: "#22c55e",
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
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <View>
              <View className="rounded-full w-[60px] h-[60px] items-center justify-center bg-[#22c55e] mb-2">
                <AntDesign name="search1" size={24} color="white" />
              </View>
              <Text className="text-[#4B5563] text-center mt-[-3px]">
                Search
              </Text>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tabs.Screen
        name="messsage"
        options={{
          title: "Message",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
