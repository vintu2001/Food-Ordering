import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// export const localRestaurants = [
//   {
//     name: "Beachside Bar",
//     image_url:
//       "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
//     categories: ["Cafe", "Bar"],
//     price: "$$",
//     reviews: 1244,
//     rating: 4.5,
//   },
//   {
//     name: "Benihana",
//     image_url:
//       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//     categories: ["Cafe", "Bar"],
//     price: "$$",
//     reviews: 1244,
//     rating: 3.7,
//   },
//   {
//     name: "India's Grill",
//     image_url:
//       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//     categories: ["Indian", "Bar"],
//     price: "$$",
//     reviews: 700,
//     rating: 4.9,
//   },
// ];

const RestaurantItems = ({ navigation, ...props }) => {
  return (
    <>
      {props.restaurantsData.map((restaurant, index) => (
        <TouchableOpacity
          activeOpacity={0.85}
          style={{ marginBottom: 0 }}
          key={index}
          onPress={() =>
            navigation.navigate("RestaurantDetails", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              categories: restaurant.categories,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 10, backgroundColor: "white" }}
          >
            {/* Restaurant Image */}
            <RestaurantImage image={restaurant.image_url} />
            {/* Restaurant Info */}
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{ uri: props.image }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 10, top: 10 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
      {/* ------------------- */}
    </>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "grey" }}>30-40 - min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          paddingHorizontal: 10,
          alignItems: "center",
          borderRadius: 15,
          justifyContent: "center",
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItems;
