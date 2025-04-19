//* packages import
import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

//* components import
import MerchentRate from "./MerchentRate";

//* types import
import { Merchent } from "@/types/merchents";

//* constants import
import colors from "@/constants/colors";

const { width, height } = Dimensions.get("window");

const CARD_WIDTH = width * 0.8;

const MerchentCard = ({ item }: { item: Merchent }) => {
  return (
    <View style={styles.merchentCard}>
      <View style={styles.leftNotchContainer} />
      <View style={styles.merchentImageContainer}>
        <Image source={item.logo} style={styles.merchentLogo} />
      </View>
      <View style={styles.merchentInfo}>
        <Text style={styles.merchentVoucher}>{item.voucher}</Text>
        <Text style={styles.merchentName}>{item.name}</Text>
        <MerchentRate item={item} />
      </View>
      <View style={styles.rightNotchContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  merchentCard: {
    width: width * 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.semiTransparentGray,
    marginRight: 18,
  },
  merchentImageContainer: {
    width: "30%",
    height: "90%",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 3,
    borderColor: colors.offWhite,
  },
  merchentLogo: {
    width: CARD_WIDTH * 0.25,
    height: CARD_WIDTH * 0.25,
    borderRadius: 25,
  },
  merchentInfo: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  merchentName: {
    fontSize: 14,
    color: colors.steelGray,
    fontFamily: "ZainRegular",
  },
  merchentVoucher: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "ZainBold",
  },
  leftNotchContainer: {
    height: 40,
    width: "5%",
    backgroundColor: colors.offWhite,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderWidth: 1,
    borderColor: colors.semiTransparentGray,
  },
  rightNotchContainer: {
    height: 40,
    width: "5%",
    backgroundColor: colors.offWhite,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderWidth: 1,
    borderColor: colors.semiTransparentGray,
  },
});

export default MerchentCard;
