import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const FooterHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.option}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Favorite")} style={styles.option}>
        <Text>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.option}>
        <Text>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
  option: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default FooterHeader;
