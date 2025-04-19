//* packages import
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";

//* constants import
import colors from "@/constants/colors";

const InviteFriend = () => {
  return (
    <View style={styles.inviteCard}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Invite your Friend &</Text>
        <Text style={styles.subtitle}>Earn Coins</Text>
      </View>
      <ImageBackground
        style={styles.imageContainer}
        source={require("@/assets/images/inviteImageBG.png")}
        resizeMode="cover"
      >
        <Image
          source={require("@/assets/images/inviteImage.png")}
          resizeMode="cover"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  inviteCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.semiTransparentGray,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginTop: 20,
  },
  textContainer: {
    marginHorizontal: "5%",
  },
  title: {
    fontSize: 16,
    fontFamily: "ZainRegular",
    color: colors.skyBlue,
    marginBottom: -10,
  },
  subtitle: {
    fontSize: 36,
    fontFamily: "ZainItalic",
    color: colors.skyBlue,
  },
  imageContainer: {
    paddingVertical: 5,
  },
});

export default InviteFriend;
