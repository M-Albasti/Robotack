//* packages import
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Progress from "react-native-progress";

//* types import
import { Merchent } from "@/types/merchents";

//* constants import
import colors from "@/constants/colors";

const MerchentRate = ({ item }: { item: Merchent }) => {
  return (
    <View style={styles.rateContainer}>
      <Text style={styles.merchentCounter}>{item.reviewsCounter}</Text>
      <Image
        source={require("@/assets/icons/coinsIcon.png")}
        style={styles.rateIconStyle}
      />
      <View style={styles.lineBreakerStyle} />
      <Progress.Bar
        progress={item.rate / 100}
        borderColor={colors.white}
        color={colors.skyBlue}
        unfilledColor={colors.offWhite}
        borderRadius={10}
        width={50}
      />
      <Text style={styles.merchentRate}>{item.rate}%</Text>
      <Image source={require("@/assets/icons/lockIcon.png")} />
    </View>
  );
};

export default MerchentRate;

const styles = StyleSheet.create({
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  rateIconStyle: {
    width: 13,
    height: 13,
    marginBottom: 5,
  },
  lineBreakerStyle: {
    height: "100%",
    borderRightWidth: 1,
    borderColor: colors.offWhite,
    marginHorizontal: 5,
  },
  merchentCounter: {
    fontSize: 16,
    color: colors.skyBlue,
    fontFamily: "ZainRegular",
  },
  merchentRate: {
    fontSize: 16,
    color: colors.black,
    fontFamily: "ZainRegular",
    marginLeft: 10,
    marginRight: 2,
  },
});
