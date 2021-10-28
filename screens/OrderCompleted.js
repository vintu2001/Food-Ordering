import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetails/MenuItems";
import { useNavigation } from "@react-navigation/core";

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ width: 100, alignSelf: "center" }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 20,
            textAlign: "center",
            paddingBottom: 15,
          }}
        >
          Your order at {restaurantName} has been placed for{" "}
          {totalUSD.replace("US", "")}
        </Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
        </ScrollView>
        {/* cooking */}
        <LottieView
          style={{
            width: 250,
            alignSelf: "center",
            marginBottom: 50,
            alignItems: "center",
          }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            bottom: 30,
            borderRadius: 30,
            alignContent: "center",
          }}
          onPress={() => navigation.replace("Home")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              paddingHorizontal: 35,
              paddingVertical: 15,
              alignSelf: "center",
            }}
          >
            Go To Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
