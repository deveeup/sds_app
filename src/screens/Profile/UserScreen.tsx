import React, { useState, useContext } from "react";
import { Text, SafeAreaView } from "react-native";
import { ContextApi } from "../../context";

export default function UserScreen() {
  const { state: { user } } = useContext(ContextApi);

  return (
    <SafeAreaView>
      <Text>{user?.name}</Text>
    </SafeAreaView>
  )
};