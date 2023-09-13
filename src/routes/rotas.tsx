import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/home";
import FavoritePage from "../pages/favoritePage";
import CartPage from "../pages/cartPage";
import UserProfile from "../pages/userPage";
import InicialPage from "../pages/inicialPage";
import Details from "../pages/detailsPage";
import { Ionicons } from "@expo/vector-icons";
import RegisterPage from "../pages/registerPage";

export type RootStackParamList = {
  InicialPage: undefined;
  LoginPage: { onLogin: () => void };
  Home: undefined;
  Favorite: undefined;
  Cart: undefined;
  UserProfile: undefined
  Details: { id: number };
  RegisterPage: undefined
};

export type BottomTabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorite: undefined;
  Details: { id: number };
  RegisterPage: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

function AuthenticatedNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#418B64", 
        tabBarInactiveTintColor: "black", 
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        tabBarIcon: ({ color, size, focused }) => { // Use a propriedade focused
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          // Retorna o ícone correspondente com base no estado de foco da guia
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
  <Tab.Screen
    name="Home"
    component={Home}
    options={{
      headerShown: false,
      tabBarIcon: ({ color, size, focused }) => ( 
        <Ionicons
          name={focused ? "home" : "home-outline"}
          size={size}
          color={color}
        />
      ),
    }}
  />
  <Tab.Screen
    name="Favorite"
    component={FavoritePage}
    options={{
      headerShown: false,
      tabBarIcon: ({ color, size, focused }) => ( 
        <Ionicons
          name={focused ? "heart" : "heart-outline"} 
          size={size}
          color={color}
        />
      ),
    }}
  />
  <Tab.Screen
    name="Cart"
    component={CartPage}
    options={{
      headerShown: false,
      tabBarIcon: ({ color, size, focused }) => ( 
        <Ionicons
          name={focused ? "cart" : "cart-outline"} 
          size={size}
          color={color}
        />
      ),
    }}
  />
</Tab.Navigator>
  );
}

function AppNavigator() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={userLoggedIn ? "Home" : "InicialPage"}
        screenOptions={{ contentStyle: { backgroundColor: Colors.white } }}
      >
        <Stack.Screen name="InicialPage" component={InicialPage} options={{ headerShown: false }} />

        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />

        <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />

        <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={AuthenticatedNavigator} options={{ headerShown: false }} />

        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
