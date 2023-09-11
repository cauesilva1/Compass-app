import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importe o ícone desejado aqui
import { useFavorite } from "../context/favorite";
import { FavoriteItems } from "../pages/favoritePage";
 

const MediuCard = ({ navigation, id, imageSource, title, value, veiwDetails }) => {
  const isIOS = Platform.OS === "ios";

  // Estado local para controlar se o botão de coração foi clicado
  const [isHeartClicked, setIsHeartClicked] = useState(false); 

  const {favoriteItems, addFavorite, deletefavorite} = useFavorite();


  // Função para lidar com o clique no botão de coração
  const handleHeartClick = () => {

    // Inverte o estado atual
    setIsHeartClicked(!isHeartClicked); 

    const item = {
      id,
      imageSource,
      title,
      value,
    };
    addFavorite(item);

    if (isHeartClicked) {
      deletefavorite(id);
    }
    
  };

  

  // Nome do ícone com base no estado isHeartClicked
  const heartIconName = isHeartClicked ? "heart" : "heart-outline";

  return (
    <TouchableOpacity style={[styles.card, isIOS && styles.iosShadow]} onPress={veiwDetails} >

      {/* Imagem à esquerda */}
      <Image source={{ uri: imageSource }} style={styles.image} />


      {/* Botão de coração */}
      <TouchableOpacity
        style={[
          styles.heartButton,
          isHeartClicked && styles.heartButtonClicked, 
        ]}
        onPress={handleHeartClick}
      >
        
        <Ionicons name={heartIconName} size={20} color={isHeartClicked ? "#418B64" : "black"} />
      </TouchableOpacity>

      
      <View style={styles.content}>
        
        <Text style={styles.title}>{title}</Text>

        
        <Text style={styles.value}>${value}</Text>

       
        <TouchableOpacity onPress={veiwDetails} style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    height: 120,
    width: "100%",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
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
  iosShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  heartButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    borderRadius: 50,
    width: 25,
    height: 25,
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
  image: {
    width: 100,
    height: "100%",
    marginRight: 10,
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  value: {
    fontSize: 13,
    marginBottom: 30,
  },
  button: {
    marginTop: 8,
    marginLeft: 20,
    backgroundColor: "#418B64",
    borderRadius: 4,
    width: "70%",
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default MediuCard;
