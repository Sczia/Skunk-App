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
import { ScrollView } from "react-native-gesture-handler";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPasswordAndNameAndCompanyAndVehicleAndAddressAndNumber(
        email,
        password,
        name,
        company,
        vehicle,
        address,
        number
      )
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  const goToLogin = () => {
    navigation.replace("Login");
  };
  const goToProfile = () => {
    navigation.replace("Profile");
  };

  return (
    <ImageBackground
        source={require("../assets/crop4.jpg")} // Replace with the path to your image file
        style={styles.image}>

<KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <ScrollView style={styles.scrollView}>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              marginBottom: 30,
              fontWeight: "bold",
              color:"#dca332"
            }}
          >
            LOYALTY CARD
          </Text>
          <Text style={{ fontSize: 12, textAlign: "center", marginBottom: 30, color:"white" }}>
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
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="*Email"
            placeholderTextColor={"black"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="*Password"
            placeholderTextColor={"black"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="*Company Name"
            placeholderTextColor={"black"}
            value={company}
            onChangeText={(text) => setCompany(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="*Vehicle and Year Model"
            placeholderTextColor={"black"}
            value={vehicle}
            onChangeText={(text) => setVehicle(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="*Complete Address"
            placeholderTextColor={"black"}
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="*Contact Number"
            placeholderTextColor={"black"}
            value={number}
            onChangeText={(text) => setNumber(text)}
            style={styles.input}
          />
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goToProfile} style={styles.button}>
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
    borderStyle: "dotted"

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
    borderColor:"#dca332"
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
