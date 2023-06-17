import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import axios from "axios";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://983d-136-158-65-29.ngrok-free.app/api/login",
        {
          email,
          password,
        }
      );
      const { user } = response.data;
      const { points } = response.data;

      // Perform actions after successful login, such as storing user data
      // Assuming you have a function to store user data, replace `storeUserData` with the appropriate implementation
      storeUserData(user, points);

      // Redirect to the "Home" screen
      navigation.replace("Home", { user, points });
    } catch (error) {
      // Handle error responses
      console.log(error);
      if (error.response && error.response.status === 401) {
        Alert.alert("Invalid credentials");
      } else {
        Alert.alert("An error occurred");
      }
    }
  };

  const storeUserData = (user, points) => {
    // Store the user data using your preferred method (e.g., AsyncStorage, Redux store)
    // Replace this placeholder implementation with your actual code
    console.log("Storing user data:", user, points);
  };

  const goToRegister = () => {
    navigation.replace("Landing");
  };

  return (
    <ImageBackground
      source={require("../assets/crop4.jpg")} // Replace with the path to your image file
      style={styles.image}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/logo1.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginBottom: 30,
              fontWeight: "bold",
            }}
          >
            Skunk Auto Salon
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={"black"}
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"black"}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goToRegister}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;

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
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    borderColor: "black",
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
    borderColor: "#dca332",
    borderWidth: 2,
    borderStyle: "solid",
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
  logo: {
    height: 180,
    width: 180,
  },
  imgContainer: {
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover", // Choose the desired resize mode ('cover', 'contain', 'stretch', 'repeat', 'center')
    width: "100%",
    height: "100%",
  },
});
