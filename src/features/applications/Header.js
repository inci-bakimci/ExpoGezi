import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";



const Header = () => {
  return (
    <View className="flex-row items-baseline justify-between">
      <Text
        className="text-2xl font-semibold text-gray-800 
            font-poppins600"
      >
        Kategoriler
      </Text>
      <TouchableOpacity className="bg-yellow-400 p-3 rounded-full ">
        <Feather name="menu" size={28} color={colors.gray[800]} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
