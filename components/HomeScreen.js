import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen({ route, navigation }) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (route.params && route.params.count) {
      setCount(route.params.count);
    }
  }, [route.params]);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "#FFDC00",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Welcome to my awesome app!
      </Text>
      <View style={{ alignSelf: "stretch" }}>
        <Button
          title="Go to Game"
          onPress={() =>
            navigation.navigate("Game", { screen: "Play", params: { count } })
          }
        />
      </View>
      <Text style={{ alignSelf: "center" }}>
        Times I've been on this page: {count}
      </Text>
    </View>
  );
}
