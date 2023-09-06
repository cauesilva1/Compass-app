import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Footer from "../components/footer";

import StickCard from "../components/stickCard";

export default function FavoritePage({ navigation }) {
  return (
    <>
    <ScrollView style={{ flex: 1 }}>

      <View style={styles.content}>
        <Text style={styles.usertext}>Favorites</Text>
      </View>

      <View style={styles.contentContainer}>

        <StickCard imageSource={require("../../assets/cardpequeno.png")} title={"Green Vines"} value={"$9.20"} isFavorite={true} />

        <StickCard imageSource={require("../../assets/cardpequeno.png")} title={"Green Vines"} value={"$9.20"} isFavorite={true} />

        <StickCard imageSource={require("../../assets/cardpequeno.png")} title={"Green Vines"} value={"$9.20"} isFavorite={true} />

        <StickCard imageSource={require("../../assets/cardpequeno.png")} title={"Green Vines"} value={"$9.20"} isFavorite={true} />



      </View>
    </ScrollView>
    
    <Footer navigation={navigation} currentPage="Favorite" /></>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1, 
    paddingHorizontal: 20,
  },

  content: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  usertext: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
});
