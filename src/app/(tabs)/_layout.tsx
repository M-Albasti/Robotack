//* packages import
import React from "react";
import { Tabs } from "expo-router";

//* components import
import CustomTabBar from "@/components/TabBar/CustomTabBar";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="transactions/index"
        options={{
          title: "Transactions",
        }}
      />
      <Tabs.Screen
        name="joy/index"
        options={{
          title: "JOY",
        }}
      />
      <Tabs.Screen
        name="myCard/index"
        options={{
          title: "MyCard",
        }}
      />
    </Tabs>
  );
}
