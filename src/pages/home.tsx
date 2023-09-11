import React, { useEffect, useState } from "react";
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

  interface Item {
    description: any;
    category: string;
    price: any;
    image: any;
    id: string;
    imageSource: any;
    title: string;
  }

  const [data, setData] = useState<Item[]>([]); 


  const [selectedCategory, setSelectedCategory] = useState("All");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/"
        );
        if (response.status === 200) {
          const responseData = await response.json();
          const items = responseData.body.data.items;
          if (Array.isArray(items)) {
            setData(items);
          } else {
            console.error("Os dados da API não estão no formato esperado.");
          }
        } else {
          console.error(
            "A requisição não foi bem-sucedida. Código de status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClickcategory = (category) => {
    setSelectedCategory(category);
  };



  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.usertext}>Hi, John</Text>

          <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
            <Image source={require("../../assets/userimage.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.flatlistVerticalText}>
          <Text style={styles.flatlistVerticalText}>Most popular</Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cardList}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <MediuCard
                  veiwDetails={() =>
                    navigation.navigate("Details", {
                      id: item.id,
                      imageSource: item.image,
                      title: item.title,
                      value: item.price,
                      category: item.category,
                      description: item.description,
                    })
                  }
                  id={item.id}
                  imageSource={item.image}
                  title={item.title}
                  value={item.price}
                  navigation={navigation}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            onPress={() => handleButtonClickcategory("All")}
            style={[
              styles.button,
              selectedCategory === "All" && styles.selectedButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                selectedCategory === "All" && styles.selectedButtonText,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonClickcategory("Indoor")}
            style={[
              styles.button,
              selectedCategory === "Indoor" && styles.selectedButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                selectedCategory === "Indoor" && styles.selectedButtonText,
              ]}
            >
              Indoor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonClickcategory("Outdoor")}
            style={[
              styles.button,
              selectedCategory === "Outdoor" && styles.selectedButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                selectedCategory === "Outdoor" && styles.selectedButtonText,
              ]}
            >
              Outdoor
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.longcardlist}>
          {data
            .filter((item) =>
              selectedCategory === "All"
                ? true
                : item.category === selectedCategory
            )
            .map((item) => (
              <LongCard
                veiwDetails={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    imageSource: item.image,
                    title: item.title,
                    value: item.price,
                    category: item.category,
                    description: item.description,
                  })
                }
                key={item.id}
                imageSource={item.image}
                onAddToCart={() => console.log("adicionado ao carrinho")}
                title={item.title}
                value={item.price}
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
    paddingLeft: 5, 
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
    color: "#141414", 
  },

  longcardlist: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
