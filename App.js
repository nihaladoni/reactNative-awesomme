import React, { useEffect } from "react";
import { Text, View, StyleSheet, Alert, BackHandler } from "react-native";
import Constants from "expo-constants";

import QuoteBox from "./components/quoteBox.js";
import getRandomColor from "./components/helpers.js";

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit App", "Are you sure you want to Exit the app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  let arr = [
    "Q",
    "u",
    "o",
    "t",
    "e",
    " ",
    "G",
    "e",
    "n",
    "e",
    "r",
    "a",
    "t",
    "o",
    "r",
  ];

  const getColours = () => {
    let colors = ["#4285F4", "#DB4437", "#000000", "#0F9D58"];
    let index = Math.floor(Math.random() * 4);
    return colors[index];
  };
  return (
    <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 40,
          marginVertical: 30,
        }}
      >
        {arr.map((d, i) => (
          <Text key={i} style={{ color: getColours() }}>
            {d}
          </Text>
        ))}
      </Text>
      <QuoteBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
