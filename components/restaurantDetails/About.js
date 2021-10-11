import React from "react";
import { View, Text, Image } from "react-native";

const About = (props) => {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories}${
    price ? " • " + price : ""
  } • 🎟️ • ${rating}🌟 (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const RestaurantName = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "700",
        marginTop: 5,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );
};

const RestaurantDescription = (props) => {
  return (
    <>
      <Text
        style={{
          marginTop: 5,
          marginHorizontal: 15,
          fontWeight: "400",
          fontSize: 15.5,
        }}
      >
        {props.description}
      </Text>
    </>
  );
};

export default About;
