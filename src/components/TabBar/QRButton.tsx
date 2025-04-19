//* packages import
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

//* assets import
import QR from "@/assets/icons/svgs/QR";

//* constants import
import colors from "@/constants/colors";

const QRButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <QR />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default QRButton;
