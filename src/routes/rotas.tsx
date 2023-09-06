import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicialPage from "../pages/inicialPage";
import Home from "../pages/home";
import FavoritePage from "../pages/favoritePage";
import Details from "../pages/detailsPage";
import CartPage from "../pages/cartPage";
import { Colors } from "react-native/Libraries/NewAppScreen";
export type RootStackParamList = {
  Home: undefined;
  InicialPage: undefined;
  Details: { id: number };
  Cart: undefined;
  Favorite: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="InicialPage" screenOptions={{contentStyle: { backgroundColor: Colors.white }}}>
      <Stack.Screen
        name="InicialPage"
        component={InicialPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartPage}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name="Favorite"
        component={FavoritePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
