import React from "react";
import { View, Text } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements";

const OrdersScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <Text style={{ fontSize: 30 }}>OrdersScreen</Text>
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

export default OrdersScreen;
