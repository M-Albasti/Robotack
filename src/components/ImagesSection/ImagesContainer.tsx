//* packages import
import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";

//* constants import
import colors from "@/constants/colors";

const { width, height } = Dimensions.get("window");

const ImagesContainer = () => {
  return (
    <View style={styles.imagesContainer}>
      <View style={styles.bigImageContainer}>
        <Image
          source={require("@/assets/images/Offers.png")}
          style={styles.offersImageStyle}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.smallImagesContainer}>
        <Image
          source={require("@/assets/images/RedeemNow.png")}
          resizeMode={"contain"}
        />
        <Image
          source={require("@/assets/images/EarnNow.png")}
          resizeMode={"contain"}
        />
      </View>
    </View>
  );
};

export default ImagesContainer;

const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: height * 0.225,
    marginTop: 10,
  },
  bigImageContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  smallImagesContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  offersImageStyle: {
    backgroundColor: colors.blushPink,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.lightPink,
  },
});
