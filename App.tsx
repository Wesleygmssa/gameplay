import React from "react";
import { Routes } from "./src/Routes";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { StatusBar, LogBox } from "react-native";
import { AuthProvider } from "./src/hooks/auth";

LogBox.ignoreLogs([
  "You are not currently signed in to Expo on your development machine",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });
  //hold a home screen
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* AuthProvider Reponsável de passar as informções global */}
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
