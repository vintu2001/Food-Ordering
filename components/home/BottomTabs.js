import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontsAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 2,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      {/* <Text>BOTTOM</Text> */}
      <Icon name="home" text="HOME" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
};

const Icon = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View>
        <FontsAwesome5
          name={props.name}
          size={25}
          style={{
            marginBottom: 1,
            alignSelf: "center",
            color: "green",
          }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomTabs;
