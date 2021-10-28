import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

import firebase from "../firebase";

const logo = require("../assets/images/mainLogo.png");

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => Alert.alert(error.message));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ backgroundColor: "#E1F5E4", flex: 1 }}>
        <Image
          source={logo}
          style={{
            width: 230,
            height: 180,
            alignSelf: "center",
            marginTop: 50,
          }}
        />
        <View style={styles.container}>
          <View style={styles.input}>
            <View>
              <Text style={styles.title}>Email</Text>
              <TextInput
                style={styles.inputText}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter Your Email"
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.title}>Password</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Enter Your Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={handleSignup}
            >
              <View
                style={{
                  height: 50,
                  width: 350,
                  backgroundColor: "#2980d6",
                  justifyContent: "center",
                  marginTop: 20,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    color: "white",
                    alignSelf: "center",
                  }}
                >
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", marginTop: 45 }}>
            <Text style={{ fontSize: 18 }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.replace("Login")}>
              <Text
                style={{ fontWeight: "700", color: "#1078C2", fontSize: 17 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4285F4",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    marginTop: 20,
    flexDirection: "row",
  },
  googleText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 22,
  },

  facebookText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 22,
  },
  inputText: {
    height: 45,
    backgroundColor: "white",
    fontSize: 16,
    marginTop: 5,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 8,
    // marginTop: 10,
  },
  input: {
    marginHorizontal: 20,
    marginTop: 22,
  },
  container: {
    justifyContent: "center",
    marginTop: 30,
  },
});
