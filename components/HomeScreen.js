import React from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Welcome to my awesome app!
      </Text>
      <Button title="Go to Game" onPress={() => navigation.navigate("Game")} />
    </View>
  );
}
