//* packages import
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

//* components import
import ImagesContainer from "../ImagesSection/ImagesContainer";
import MerchentList from "../MerchentCard/MerchentList";
import InviteFriend from "../InviteFriend";

//* constants import
import colors from "@/constants/colors";

const { width, height } = Dimensions.get("window");

const HomeBody = () => {
  return (
    <View style={styles.container}>
      <ImagesContainer />
      <MerchentList />
      <InviteFriend />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offWhite,
    width: width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: -15,
    padding: width * 0.025,
    alignItems: "center",
  },
});

export default HomeBody;
