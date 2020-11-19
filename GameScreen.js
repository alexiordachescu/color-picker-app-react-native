import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { DeviceMotion } from "expo-sensors";
import MyButton from "./components/MyButton";

export default function GameScreen({ route, navigation }) {
  const { count } = route.params;
  const [color, set_color] = useState("white");
  const [paused, set_paused] = useState(false);

  useEffect(() => {
    DeviceMotion.setUpdateInterval(250);
    const subscription = DeviceMotion.addListener((data) => {
      const hue = Math.max(0, Math.round(150 + 150 * data.rotation.beta) % 360);

      // from 0% to 100% (from gray/black to fully saturated color)
      const saturation = Math.max(
        0,
        Math.round(30 + 60 * data.rotation.beta) % 100
      );
      if (!paused) {
        set_color(`hsl(${hue}, ${saturation}%, 50%)`);
      }
    });

    // cleanup on unmount
    return () => subscription.remove();
  }, [set_color, paused]);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: color,
      }}
    >
      <Text style={{ marginBottom: 20, fontSize: 24, fontWeight: "bold" }}>
        Use the phone's accelerometer to see more colors!
      </Text>
      <View style={{ marginBottom: 20 }}>
        <MyButton
          title={paused ? "Restart" : "Pause"}
          onPress={() => {
            set_paused(!paused);
          }}
        />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Times I've played this game: {count}
      </Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { count: count + 1 })}
      />
    </View>
  );
}
