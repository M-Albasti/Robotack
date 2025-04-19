//* packages import
import React, { Suspense, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    ZainBlack: require("@/assets/fonts/Zain-Black.ttf"),
    ZainExtraBold: require("@/assets/fonts/Zain-ExtraBold.ttf"),
    ZainItalic: require("@/assets/fonts/Zain-Italic.ttf"),
    ZainLightItalic: require("@/assets/fonts/Zain-LightItalic.ttf"),
    ZainBold: require("@/assets/fonts/Zain-Bold.ttf"),
    ZainExtraLight: require("@/assets/fonts/Zain-ExtraLight.ttf"),
    ZainLight: require("@/assets/fonts/Zain-Light.ttf"),
    ZainRegular: require("@/assets/fonts/Zain-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        layout={({ children, state, descriptors, navigation }) => (
          <Suspense fallback={<Text>Loading ...</Text>}>
            <SafeAreaView style={styles.container}>{children}</SafeAreaView>
          </Suspense>
        )}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
