import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootNavigation } from "./navigation";
import firebase from "./firebase";

import { Platform } from "react-native";

if (Platform.OS === "android") {
  // only android needs polyfill
  require("intl"); // import intl object
  require("intl/locale-data/jsonp/en-IN"); // load the required locale details
  require("intl/locale-data/jsonp/en-US");
}

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = (user) => {
    user ? setCurrentUser(user) : setCurrentUser(null);
  };

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => userHandler(user));
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RootNavigation user={currentUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
