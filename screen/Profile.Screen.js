import React from "react";
import { Image, StatusBar, Text, View, TouchableOpacity, StyleSheet, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const ProfileScreen = () => {
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
    <View
      style={{
        flex: 1,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333",
        color:"white"
      
      }}
    >
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/picture.png")}
            style={{ height: 150, width: 150 }}
          />
        </View>

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
        Profile
      </Text>
      
      
        <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginTop: 250,
              fontWeight: "bold",
              color:"#dca332"
            }}
          >
            Skunk Auto Salon
          </Text>

        
      </ScrollView>

      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>

    </View>
  );
};

export default ProfileScreen;

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
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  
});