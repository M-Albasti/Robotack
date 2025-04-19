//* packages import
import React, { Ref, forwardRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TabTriggerSlotProps } from "expo-router/ui";
import { PlatformPressable } from "@react-navigation/elements";

//* constants import
import colors from "@/constants/colors";

export type TabButtonProps = TabTriggerSlotProps & {
  Icon?: React.JSX.Element;
};

const TabBarButton = forwardRef(
  ({ Icon, children, isFocused, ...props }: TabButtonProps, ref: Ref<View>) => {
    return (
      <PlatformPressable ref={ref} {...props} style={styles.buttonStyle}>
        <View style={styles.iconContainerStyle}>{Icon}</View>
        <Text
          style={[
            styles.buttonTextStyle,
            isFocused
              ? { color: colors.skyBlue }
              : { color: colors.mediumGray },
          ]}
        >
          {children}
        </Text>
      </PlatformPressable>
    );
  }
);

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: "100%",
  },
  iconContainerStyle: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    fontSize: 13,
    fontFamily: "ZainRegular",
  },
});

export default TabBarButton;
