import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
    key: 1,
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
    key: 2,
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
    key: 3,
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Food",
    key: 4,
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
    key: 5,
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
    key: 6,
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
    key: 7,
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
        flexDirection: "row",
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Loop starts here */}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
