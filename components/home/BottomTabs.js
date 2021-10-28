import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontsAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          margin: 2,
          marginHorizontal: 30,
          justifyContent: "space-between",
          // width: "80%",
        }}
      >
        {/* <Text>BOTTOM</Text> */}
        <Icon name="home" text="Home" goto={() => navigation.replace("Home")} />
        <Icon
          name="search"
          text="Browse"
          goto={() => navigation.replace("Browse")}
        />

        <Icon
          name="receipt"
          text="Orders"
          goto={() => navigation.replace("Orders")}
        />
        <Icon
          name="user"
          text="Account"
          goto={() => navigation.replace("Profile")}
        />
      </View>
    </View>
  );
};

const Icon = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.goto}>
      <View>
        <FontsAwesome5
          name={props.name}
          size={25}
          style={{
            marginBottom: 1,
            alignSelf: "center",
            color: "grey",
          }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomTabs;
