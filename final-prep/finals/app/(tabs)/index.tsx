import { Stack } from "expo-router";
import React from "react";

export default function TabOneScreen({ data }) {
  return (
    <>
      <Stack.Screen options={{ title: "Events" }} />
    </>
  );
}
