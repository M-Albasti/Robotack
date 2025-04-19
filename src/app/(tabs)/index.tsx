//* packages import
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";

//* components import
import HomeHeader from "@/components/Home/HomeHeader";
import HomeBody from "@/components/Home/HomeBody";

//* constants import
import colors from "@/constants/colors";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.headerBG} style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <HomeHeader />
        <HomeBody />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
  },
  scrollContainer: {
    flex: 1,
  },
});

export default HomeScreen;
