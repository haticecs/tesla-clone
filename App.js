import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/ModelS.jpeg")}
        style={styles.image}
      >
        <View style={styles.carContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $69,420</Text>
            <Text></Text>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%", //to take full screen
    height: "100%",
  },
  titleContainer: {
    marginTop: "30%", //relatively below from the top
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 18,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
