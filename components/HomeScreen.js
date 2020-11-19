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
      <Text>Times I've been on this page: {count}</Text>
      <Button
        title="Go to Game"
        onPress={() => navigation.navigate("Game", { count: count + 1 })}
      />
    </View>
  );
}
