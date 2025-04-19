//* packages import
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

//* constants import
import colors from "@/constants/colors";

const { width } = Dimensions.get("window");

const CoinsContainer = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("@/assets/images/coinsBlurBG.png")}
      resizeMode="cover"
    >
      <Text style={styles.coinsTitle}>Total Coins</Text>
      <View style={styles.coinsContainer}>
        <Text style={styles.textCoinsStyle}>35,880</Text>
        <Image
          source={require("@/assets/icons/coinsIcon.png")}
          style={styles.coinsIconStyle}
        />
      </View>
      <Text style={styles.textPendingCoinsStyle}>Pending: 50,000</Text>
    </ImageBackground>
  );
};

export default CoinsContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    width: width * 0.6,
  },
  coinsTitle: {
    textAlign: "center",
    fontFamily: "ZainBold",
    fontSize: 23,
    paddingTop: 5,
    marginBottom: -10,
  },
  coinsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -10,
  },
  textCoinsStyle: {
    fontSize: 45,
    color: colors.skyBlue,
    fontFamily: "ZainBold",
  },
  coinsIconStyle: {
    marginBottom: 10,
  },
  textPendingCoinsStyle: {
    color: colors.steelGray,
    fontSize: 22,
    fontFamily: "ZainRegular",
  },
});
