//* packages import
import React from "react";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  View,
} from "react-native";

//* components import
import HistoryButton from "../HistoryButton";
import CoinsContainer from "../Coins/CoinsContainer";

//* constants import
import colors from "@/constants/colors";

const { width, height } = Dimensions.get("window");

const HomeHeader = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("@/assets/images/headerBG.png")}
    >
      <Text style={styles.headerTitle}>Loyalty</Text>
      <View style={styles.headerContentContainer}>
        <View style={styles.contentTextContainer}>
          <Text style={styles.goodMorningText}>Good Morning</Text>
          <Text style={styles.userNameText}>Mahmoud Albasti</Text>
        </View>
        <HistoryButton />
      </View>
      <CoinsContainer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.33,
  },
  headerTitle: {
    textAlign: "center",
    fontFamily: "ZainBold",
    fontSize: 25,
    paddingVertical: 20,
  },
  headerContentContainer: {
    flexDirection: "row",
    width: width - 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentTextContainer: {
    width: width * 0.5,
  },
  goodMorningText: {
    color: colors.charcoal,
    textAlign: "left",
    fontSize: 20,
    fontFamily: "ZainRegular",
  },
  userNameText: {
    color: colors.black,
    textAlign: "left",
    fontSize: 20,
    fontFamily: "ZainRegular",
    marginTop: -5,
  },
});

export default HomeHeader;
