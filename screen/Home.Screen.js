import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image,  } from "react-native";
import { auth } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
     
        <Image
          style={styles.tinyLogo}
          source={require("../assets/logo1.png")}
        />

<Text
        style={{
          fontSize: 15,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 5
        }}
      >
        Krysia Lee
      </Text>
    

        <Text
          style={{
            fontSize: 15,
            textAlign: "left",
          
            fontWeight: "400",
            marginRight: 340,
            color: "white",
          }}
        >
          Vehicle:
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "left",
            fontWeight: "400",
            marginRight: 290,
            color: "white"
          }}
        >
          Driver License:
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "left",
            fontWeight: "400",
            marginRight: 290,
            color: "white"
          }}
        >
          Plate number:
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            marginBottom: 10,
            fontWeight: "bold",
            paddingTop: 20,
            color: "#dca332",
          }}
        >
         LOYALTY CARD
        </Text>
        <Image
          source={require("../assets/loyalty.jpg")}
          style={{ height: 250, width:400 }}
        />
 <Text
          style={{
            fontSize: 15,
            textAlign: "left",
            fontWeight: "400",
            marginRight: 300,
            color: "white",
            marginTop: 10,
          }}
        >
          Points Earned:
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "left",
            fontWeight: "400",
            marginRight: 290,
            color: "white"
          }}
        >
         Points Redeemed:
        </Text>






        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
     
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#333",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#dca332",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  tinyLogo: {
    height: 150,
    width: 150,
  },
});
