//* packages import
import React, { Fragment } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

//* components import
import TabBarButton from "./tabButton";
import TabBarIcon from "./TabBarIcon";
import QRButton from "./QRButton";

//* constants import
import colors from "@/constants/colors";

const { width, height } = Dimensions.get("window");

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.tabBarStyle}>
      {state.routes.map((route, index) => {
        console.log("🚀 ~ {state.routes.map ~ index:", index);
        const { options } = descriptors[route.key];
        const label: string =
          options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Fragment>
            <TabBarButton
              href={buildHref(route.name, route.params)}
              Icon={
                <TabBarIcon
                  iconName={label}
                  color={isFocused ? colors.skyBlue : colors.newGray}
                />
              }
              isFocused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
              key={label}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
            >
              {label}
            </TabBarButton>
            {index == 1 && <QRButton />}
          </Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    width: width * 0.9,
    height: height * 0.09,
    marginBottom: 10,
    paddingHorizontal: "5%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 100,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3, // For Android shadow
  },
});

export default CustomTabBar;
