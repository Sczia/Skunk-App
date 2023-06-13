import { useNavigation ,useRoute} from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image , Alert} from "react-native";
import axios from "axios";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params;
  const { cars } = route.params;
  const handleLogout = async () => {
      try {
        // Send a request to the logout endpoint of your Laravel API
        const response = await axios.post(`https://6d26-136-158-65-232.ngrok-free.app/api/logout/${user.id}`);
        console.log(response);
        // Perform any additional logout actions here (e.g., clearing user data, resetting app state)
  
        // Redirect the user to the login screen or any other desired screen
        // Replace "Login" with the appropriate screen or route name
        navigation.replace("Login");
      } catch (error) {
        console.log(error);
        Alert.alert("An error occurred while logging out.");
      }
    };

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("../assets/logo1.png")} />

      <Text
        style={{
          fontSize: 15,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 5,
        }}
      >
        {user.name}
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
          color: "white",
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
          color: "white",
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
        style={{ height: 250, width: 400 }}
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
          color: "white",
        }}
      >
        Points Redeemed:
      </Text>

      <TouchableOpacity onPress={handleLogout} style={styles.button}>
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
