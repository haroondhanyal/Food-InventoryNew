import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider, useUser } from "./contexts/UserContext";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppNavigation from "./screens/AppNavigation";
import Login from "./screens/Login";

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

  return (
    <NavigationContainer>
      <UserProvider>
        <StartApp />
      </UserProvider>
    </NavigationContainer>
  );
}

function StartApp() {
  const { user } = useUser();

  return user ? <AppNavigation /> : <Login />;
}
