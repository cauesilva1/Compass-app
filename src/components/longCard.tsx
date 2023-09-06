import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LongCard = ({ imageSource, title, value, onAddToCart }) => {


// Estado local para controlar se o botão de coração foi clicado
const [isHeartClicked, setIsHeartClicked] = useState(false);

// Função para lidar com o clique no botão de coração
const handleHeartClick = () => {
  // Inverte o estado atual
  setIsHeartClicked(!isHeartClicked);
};

// Nome do ícone com base no estado isHeartClicked
const heartIconName = isHeartClicked ? "heart" : "heart-outline";

  return (
    <View style={styles.card}>


      {/* Imagem que cobre quase 70% do cartão */}
      <Image source={imageSource} style={styles.image} />

      <TouchableOpacity
        style={[
          styles.heartButton,
          isHeartClicked && styles.heartButtonClicked, // Aplica o estilo de botão clicado se isHeartClicked for verdadeiro
        ]}
        onPress={handleHeartClick}
      >
        {/* Use o componente Ionicons para o ícone de coração */}
        <Ionicons name={heartIconName} size={20} color={isHeartClicked ? "green" : "black"} />
      </TouchableOpacity>

      {/* Conteúdo abaixo da imagem */}
      <View style={styles.content}>
        <View>
        {/* Título */}
        <Text style={styles.title}>{title}</Text>

        {/* Valor */}
        <Text style={styles.value}>${value}</Text>

        </View>
        {/* Botão "Add to Cart" */}
        <TouchableOpacity onPress={onAddToCart} style={styles.cartButton}>
          {/* <image name="cart-outline" size={20} color="white" /> */}
          <Image source={require("../../assets/shoppingBag.png")} />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: 300,
    height: 280,
    borderRadius: 8,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
    overflow: "hidden",
    position: "relative",

  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1.5,
    resizeMode: "cover", // Controla a proporção da imagem (ajuste conforme necessário)
  },
  content: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    // marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: "#666",
    // marginBottom: 8,
  },
  cartButton: {
    backgroundColor: "#418B64",
    borderRadius: 50,
    height: 30,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  heartButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
        ios: {
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        },
        android: {
          elevation: 3,
        },
      }),
  },
  heartButtonClicked: { 
    backgroundColor: "white", 
    ...Platform.select({
        ios: {
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        },
        android: {
          elevation: 3,
        },
      }),
  },
});

export default LongCard;
