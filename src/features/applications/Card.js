import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Pill from "./Pill";
import colors from "tailwindcss/colors";


const Card = () => {
  return (
    <View className="bg-white self-start p-4 w-[350px] rounded-xl">
      <View className="flex-row  justift-between items-center">
        <Text className="font-poppins-600 text-gray-800">
          House for 9 guests in Bursa
        </Text>
        <Text className="font-poppins-600 text-gray-800">🔥6 guests</Text>
      </View>
        <Text className="mt-4 font-poppins-500 text-gray-600">
          Agustos 20 - Agustos 21
        </Text>
        { <View className="mt-4 flex-row flex-wrap">
             <Pill color={colors.teal[500]}>9 guests</Pill>
             <Pill color={colors.purple[500]}>6 bedrooms</Pill>
             <Pill color={colors.green[500]}>$100 - $900</Pill>
             <Pill color={colors.blue[500]}>Open Pool</Pill>
             <Pill color={colors.orange[500]}>Kitchen</Pill>
             <Pill color={colors.pink[500]}>Wi-fi</Pill>
        </View> }
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
