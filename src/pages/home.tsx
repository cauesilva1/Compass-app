import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Footer from "../components/footer"; // Importe o componente FooterHeader
import MediuCard from "../components/mediuCard";

import LongCard from "../components/longCard";
import { useRoute } from "@react-navigation/native";

const Home = ({ navigation }) => {

  const data: Item[]  = [
    {
      id: "1",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Green Vines",
      value: "9.20",
    },
    {
      id: "2",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Another Item",
      value: "12.99",
    },
    {
      id: "3",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Yet Another Item",
      value: "7.50",
    },
    {
      id: "4",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Green Vines",
      value: "9.20",
    },
    {
      id: "5",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Another Item",
      value: "12.99",
    },
    {
      id: "6",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Yet Another Item",
      value: "7.50",
    },
  ];

  interface Item {
    id: string;
    imageSource: any; 
    title: string;
    value: string;
  }

  const dataLongCard: Item[] = [
    {
      id: "1",
      imageSource: require("../../assets/imagelongcard.png"),
      title: "Green Vines",
      value: "9.20",
    },
    {
      id: "2",
      imageSource: require("../../assets/imagelongcard.png"),
      title: "Another Item",
      value: "12.99",
    },
    {
      id: "3",
      imageSource: require("../../assets/imagelongcard.png"),
      title: "Yet Another Item",
      value: "7.50",
    },
  ];

  const [selectedButton, setSelectedButton] = useState("All");
  

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  }; 

  return (
    <>
      <ScrollView style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.usertext}>Hi, John</Text>

          <TouchableOpacity 
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Image source={require("../../assets/userimage.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.flatlistVerticalText}>
          <Text style={styles.flatlistVerticalText}>Most popular</Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.cardList}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <MediuCard
                  id={item.id}
                  imageSource={item.imageSource}
                  title={item.title}
                  value={item.value}
                  onAddToCart={() => console.log("adicionado ao carrinho")}
                  navigation={navigation}

                />
              </View>
            )}
          />
        </View>

        <View>
        <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={() => handleButtonClick("All")}
          style={[
            styles.button,
            selectedButton === "All" && styles.selectedButton,
          ]}
        >
          <Text style={[styles.buttonText, selectedButton === "All" && styles.selectedButtonText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonClick("Indoor")}
          style={[
            styles.button,
            selectedButton === "Indoor" && styles.selectedButton,
          ]}
        >
          <Text style={[styles.buttonText, selectedButton === "Indoor" && styles.selectedButtonText]}>Indoor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonClick("Outdoor")}
          style={[
            styles.button,
            selectedButton === "Outdoor" && styles.selectedButton,
          ]}
        >
          <Text style={[styles.buttonText, selectedButton === "Outdoor" && styles.selectedButtonText]}>Outdoor</Text>
        </TouchableOpacity>
        </View>

        </View>

        <View style={styles.longcardlist}>
          {dataLongCard.map((item) => (
            <LongCard
              veiwDetails={() =>  navigation.navigate("Details", {
                id: item.id,
                imageSource:item.imageSource,
                title: item.title,
                value: item.value,
              })}
              key={item.id}
              imageSource={item.imageSource}
              onAddToCart={() => console.log("adicionado ao carrinho")}
              title={item.title}
              value={item.value}
              id={item.id}
            />
          ))}
          </View>
      </ScrollView>

      <Footer navigation={navigation} currentPage="Home" />

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  cardList: {
    paddingLeft: 5, // Adicione um espaçamento à esquerda para separar os cards
  },
  cardContainer: {
    marginHorizontal: 10,
  },
  flatlistVerticalText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  flatlisthorizontalText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#a0a0a0",
  },
  selectedButton: {
    backgroundColor: "none",
  },
  selectedButtonText: {
    color: "#141414", // Texto branco para o botão selecionado
  },

  longcardlist: {
      alignItems: "center",
      justifyContent: "center",
  }
});

export default Home;
