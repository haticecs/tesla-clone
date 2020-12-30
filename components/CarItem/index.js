import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

import StyledButton from ".././StyledButton";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
        <Text></Text>
      </View>

      <StyledButton
        type="primary"
        content="Custom Order"
        onPress={() => {
          console.warn("Custom Order button is pressed");
        }}
      />
      <StyledButton
        type="secondary"
        content="Existing Inventory"
        onPress={() => {
          console.warn("Existing Inventory button is pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
