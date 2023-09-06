import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FooterHeader from "../components/footer"; // Importe o componente FooterHeader
import MediuCard from "../components/mediuCard";

import LongCard from "../components/longCard";

const Home = ({ navigation }) => {
  // Array de dados fictícios para a FlatList
  const data = [
    {
      id: "1",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Green Vines",
      value: "$9.20",
    },
    {
      id: "2",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Another Item",
      value: "$12.99",
    },
    {
      id: "3",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Yet Another Item",
      value: "$7.50",
    },
    {
      id: "4",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Green Vines",
      value: "$9.20",
    },
    {
      id: "5",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Another Item",
      value: "$12.99",
    },
    {
      id: "6",
      imageSource: require("../../assets/cardmedio.png"),
      title: "Yet Another Item",
      value: "$7.50",
    },
  ];

  const dataLongCard = [
    {
      id: "1",
      imageSource: require("../../assets/imagelongcard.png"),
      title: "Green Vines",
      value: "$9.20",
    },
    {
      id: "2",
      imageSource: require("../../assets/imagelongcard.png"),
      title: "Another Item",
      value: "$12.99",
    },
    {
      id: "3",
      imageSource: require("../../assets/imagelongcard.png"),
      title: "Yet Another Item",
      value: "$7.50",
    },
  ];

  const [selectedButton, setSelectedButton] = useState("All");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.usertext}>Hi, John</Text>
          <Image source={require("../../assets/userimage.png")} />
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
                  imageSource={item.imageSource}
                  title={item.title}
                  value={item.value}
                  onAddToCart={() => console.log("adicionado ao carrinho")}
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
        <FlatList
        data={dataLongCard}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LongCard
            imageSource={item.imageSource}
            onAddToCart={() => console.log("adicionado ao carrinho")}
            title={item.title}
            value={item.value}
          />
        )}
      />
          </View>
      </View>

      <FooterHeader navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    // flex: 1,
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
    paddingLeft: 10, // Adicione um espaçamento à esquerda para separar os cards
  },
  cardContainer: {
    width: Dimensions.get("window").width - 10,
  },
  flatlistVerticalText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
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