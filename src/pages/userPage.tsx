import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ButtonComponent from '../components/button';
import Toast from 'react-native-toast-message';

const UserProfile = ({ navigation }) => {
  // Suponhamos que você tenha essas informações do usuário
  const userName = 'zezinho';
  const userEmail = 'zezinho@email.com';

  const showToastLogout = () => {
    Toast.show({
      type: 'error', 
      text1: 'Tchau 👋',
      text2: 'Voce esta fazendo logout!',
      position: 'top',  
      visibilityTime: 2500, 
      autoHide: true, 
      topOffset: 2, 
      bottomOffset: 40, 
      keyboardOffset: 10,
    });
  }

    function Logout()   {
        console.log("Logout")
        showToastLogout()

        setTimeout(() => {
        navigation.navigate("InicialPage");
      }, 2500);
    }


    
  return (
    <View style={styles.container}>

    <Toast />

      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={require('../../assets/cardmedio.png')} />
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userName}</Text>
        <View style={styles.separator}></View>

        <View  style={styles.email}>

        <Text style={styles.emailUser}>Email: </Text>
        <Text style={styles.userEmail}>{userEmail}</Text>

        </View>
        

      </View>

    <View style={styles.buttoncentralize}> 
      <ButtonComponent 
      style={styles.button}
        text={"Logout"}
        onPress={
            Logout
        }
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatarContainer: {
    backgroundColor: '#5050502f',
    width: "100%", 
    height: 200,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  avatar: {
    marginTop: 60,
    width: 130,
    height: 130,
    borderRadius: 50,
    backgroundColor: '#7575754b',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  userInfo: {
    marginTop: 20,
    alignItems: 'center',
    width: "100%",
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center', 
    borderBottomWidth: 1,
    borderColor: '#505050', 
  },
  userEmail: {
    fontSize: 16,
  },
  email: {
    padding: 5,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: "100%",
  },

  emailUser: {
    fontSize: 16,
  },
  button: {
    width: "80%",
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: "#a31818",
  },
  buttoncentralize: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  }
  // Adicione estilos adicionais conforme necessário
});

export default UserProfile;
