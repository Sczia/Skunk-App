import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from 'axios';

const RegistrationScreen = () => {
  const navigation = useNavigation(); // Add this line to get the navigation object
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const handleRegister = () => {
    // Perform client-side validation
    if (!name || !email || !password || !company || !address || !number) {
      Alert.alert("Please fill in all fields");
      return;
    }

    // Send registration data to the server
    const userData = {
      name,
      email,
      password,
      company,
      address,
      number,
    };

    axios
      .post("https://983d-136-158-65-29.ngrok-free.app/api/register", userData)
      .then((response) => {
        Alert.alert(response.data.message);
        // Optionally, you can navigate to a different screen upon successful registration
        // navigation.navigate('Home');
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("An error occurred during registration");
      });
  };
  const goToLogin = () => {
    navigation.replace("Login");
  };

  return (
    <ImageBackground
      source={require("../assets/crop4.jpg")} // Replace with the path to your image file
      style={styles.image}
    >
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          <ScrollView style={styles.scrollView}>
            <Text
              style={{
                fontSize: 30,
                textAlign: "center",
                marginBottom: 30,
                fontWeight: "bold",
                color: "#dca332",
              }}
            >
              LOYALTY CARD
            </Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
                marginBottom: 30,
                color: "white",
              }}
            >
              After filling out this form and finished all requirements given in
              our page (ex: follow, share and mention friends), we will contact
              you to claim your card here in our shop. If you would like faster
              service and direct information contact us at: 0976 241 2556 | 0998
              565 7434
            </Text>
            <TextInput
              placeholder="*Full Name"
              placeholderTextColor={"black"}
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

            <TextInput
              placeholder="*Email"
              placeholderTextColor={"black"}
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />

            <TextInput
              placeholder="*Company Name"
              placeholderTextColor={"black"}
              value={company}
              onChangeText={setCompany}
              style={styles.input}
            />

            <TextInput
              placeholder="*Password"
              placeholderTextColor={"black"}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />

            <TextInput
              placeholder="*Complete Address"
              placeholderTextColor={"black"}
              value={address}
              onChangeText={setAddress}
              style={styles.input}
            />

            <TextInput
              placeholder="*Contact Number"
              placeholderTextColor={"black"}
              value={number}
              onChangeText={setNumber}
              style={styles.input}
            />
          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleRegister} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToLogin}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Back</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 5,
    borderStyle: "dotted",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",

    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#dca332",
    width: "100%",
    padding: 15,
    borderColor: "black",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "black",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 2,
    borderColor: "#dca332",
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  scrollView: {
    maxHeight: "100%",
    minHeight: "70%",
  },
  image: {
    flex: 1,
    resizeMode: "cover", // Choose the desired resize mode ('cover', 'contain', 'stretch', 'repeat', 'center')
    width: "100%",
    height: "100%",
  },
});
