//* packages import
import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

//* constants import
import colors from "@/constants/colors";

const { width, height } = Dimensions.get("window");

const HistoryButton = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Image
        source={require("@/assets/icons/historyIcon.png")}
        style={styles.icon}
      />
      <Text style={styles.text}>History</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderColor: colors.periwinkle,
    borderRadius: 15,
    width: width * 0.25,
    borderWidth: 0.5,
    height: height * 0.031,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    color: "black",
    fontFamily: "ZainBold",
  },
});

export default HistoryButton;
