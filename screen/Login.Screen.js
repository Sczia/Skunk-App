import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const goToRegister = () => {
    navigation.replace("Landing");
  };
  const goToHome = () => {
    navigation.replace("Home");
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    console.log(email);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
      <ImageBackground
        source={require("../assets/crop4.jpg")} // Replace with the path to your image file
        style={styles.image}>

<KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
      
        <View style={styles.imgContainer}>
          <Image style={styles.logo} source={require("../assets/logo1.png")} />
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
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"black"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
 
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goToHome} style={styles.button}>
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
