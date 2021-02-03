import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const MyButton = ({ title, onPress }) => {
  return (
    <>
      <View>
        <Button
          style={{ padding: 10, marginHorizontal: 80 }}
          mode="contained"
          onPress={onPress}
        >
          {title}
        </Button>
      </View>
    </>
  );
};

export default MyButton;
