import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="justify-center items-center flex-1">
      <Text className="font-pblack text-3xl">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-500 text-xl font-semibold">Go to Home</Link>
    </View>
  );
};

export default App;
