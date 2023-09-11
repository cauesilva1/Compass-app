// App.js
import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/routes/rotas";
import colors from "./colors/colors";
import CartProvider from "./src/context/cart";
import FavoriteProvider from "./src/context/favorite"

export default function App() {
  const [fontsLoaded] = useFonts({
    poppins: require("./assets/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar />

      <CartProvider>
        
      <FavoriteProvider>

        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>

      </FavoriteProvider>

      </CartProvider>

    </>
  );
}
