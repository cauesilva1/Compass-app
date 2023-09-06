import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Footer = ({ navigation, currentPage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.option}>
        <Ionicons name="home-outline" size={20} color={currentPage === "Home" ? "#418B64" : "#000000"} />
        <Text style={{ color: currentPage === "Home" ? "#418B64" : "#000000" }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Favorite")} style={styles.option}>
        <Ionicons name="heart-outline" size={20} color={currentPage === "Favorite" ? "#418B64" : "#000000"} />
        <Text style={{ color: currentPage === "Favorite" ? "#418B64" : "#000000" }}>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.option}>
        <Ionicons name="cart-outline" size={20} color={currentPage === "Cart" ? "#418B64" : "#000000"} />
        <Text style={{ color: currentPage === "Cart" ? "#418B64" : "#000000" }}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  option: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default Footer;
