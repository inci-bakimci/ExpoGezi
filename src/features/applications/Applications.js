import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import Header from "./Header";
import Tabs from "./Tabs";
import Cards from "./Cards";

const Applications = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <StatusBar style="auto" />
      <View className="flex-1 p-10 ">
        <Header />
        <Tabs/>
        <Cards />
      </View>
    </SafeAreaView>
  );
};

export default Applications;

const styles = StyleSheet.create({});
