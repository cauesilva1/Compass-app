import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import ButtonComponent from "../components/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../FirebaseConfig/config";

export default function RegisterPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    async function Register() {
      console.log('email: ' + email);
      console.log('password: ' + password);
    
      try {
        console.log("chegou aqui");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("usuario criado");
        navigation.navigate("LoginPage");
      } catch (error) {
        console.error("Erro no createUserWithEmailAndPassword:", error);
        // Trate o erro conforme necessário
      }
    
    
  }

  return (
    <ImageBackground
      source={require("../../assets/inicialpageimage.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.boxInicial}>
        <View style={styles.HeaderBox}>
          <Text style={styles.textHeader}>Register</Text>
        </View>

        <View style={styles.HeaderButtons}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(email) => setEmail(email)}
            placeholder="Digite um email..."
          />

          <TextInput
            style={styles.TextInput}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
            placeholder="Digite uma senha..."
          />

          <TextInput
            style={styles.TextInput}
            secureTextEntry
            placeholder="Confirme sua senha ..."
          />

          <ButtonComponent
            onPress={Register}
            text={"register"}
            style={styles.TextInput}
          />

          <TouchableOpacity onPress={() => navigation.navigate("InicialPage")}>
            <Text>Voltar ao inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Define flex 1 para que ocupe 100% da tela
    alignItems: "center", // Você pode ajustar isso conforme necessário
    justifyContent: "flex-end", // Você pode ajustar isso conforme necessário
  },

  boxInicial: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },

  TextInput: {
    paddingLeft: 10,
    borderWidth: 1,
    padding: 2,
    width: 250,
    borderRadius: 3,
  },

  textHeader: {
    fontSize: 40,
    fontWeight: "bold",
    width: "100%",
  },
  textcontent: {
    fontSize: 15,
    width: 300,
  },
  HeaderBox: {
    padding: 10,
    gap: 15,
  },
  HeaderButtons: {
    gap: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
});
