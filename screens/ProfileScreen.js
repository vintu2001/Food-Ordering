import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../firebase";
import { Divider } from "react-native-elements";

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();

    console.log("Signed Out");
  } catch (error) {
    Alert.alert(error.message);
  }
};

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Image
          style={{ height: 150, width: 150, borderRadius: 150 }}
          resizeMode="contain"
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png",
          }}
        />
        <Text style={{ fontSize: 18, marginTop: 15 }}>
          {firebase.auth().currentUser.email}
        </Text>

        <TouchableOpacity
          onPress={handleSignout}
          style={{ marginTop: 15, backgroundColor: "black", borderRadius: 25 }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 22,
              paddingHorizontal: 20,
              paddingVertical: 7,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          bottom: 0,
          position: "absolute",

          width: "100%",
        }}
      >
        <Divider width={1} />
        <BottomTabs />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
