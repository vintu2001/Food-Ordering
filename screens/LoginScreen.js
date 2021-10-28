import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import firebase from "../firebase";

const logo = require("../assets/images/mainLogo.png");
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);

      console.log("Logged in with: ", email);
    } catch (error) {
      Alert.alert(error.message);
    }
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
            marginTop: 25,
          }}
        />
        <View style={styles.container}>
          <View style={styles.input}>
            <View>
              <Text style={styles.title}>Email</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Enter Your Email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.title}>Password</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Enter Your Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={handleLogin}
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
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", marginTop: 45 }}>
            <Text style={{ fontSize: 18 }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.replace("Signup")}>
              <Text
                style={{ fontWeight: "700", color: "#1078C2", fontSize: 17 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

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

export default LoginScreen;
