import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      renderItem={({ item }) => <Card />}
      keyExtractor={(item) => item.toString()}
      //horizontal yatay olarak yan yana gelmesini sağlıyor.
      horizontal={true}
      className="mt-4"
    />
  );
};

export default Cards;

const styles = StyleSheet.create({});
