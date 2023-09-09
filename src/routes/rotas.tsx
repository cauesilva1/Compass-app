import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicialPage from "../pages/inicialPage";
import Home from "../pages/home";
import FavoritePage from "../pages/favoritePage";
import Details from "../pages/detailsPage";
import CartPage from "../pages/cartPage";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/registerPage";
import UserProfile from "../pages/userPage";
import CartProvider from "../context/cart";



export type RootStackParamList = {
  Home: undefined;
  InicialPage: undefined;
  Details: { id: number };
  Cart: undefined;
  Favorite: undefined;
  LoginPage: undefined;
  RegisterPage: undefined;
  UserProfile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigation() {

  

  return (
    <>

      <Stack.Navigator
        initialRouteName="InicialPage"
        screenOptions={{ contentStyle: { backgroundColor: Colors.white } }}
      >
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
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          // options={{ headerShown: false }}
        />
        
      </Stack.Navigator>

    </>
  );
}

export default StackNavigation;
