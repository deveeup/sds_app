import React, { useState, useContext } from "react";
import { Button, Text, SafeAreaView } from "react-native";
import { ContextApi } from "../../context";

export default function UserScreen() {
  const { state: { user }, logout } = useContext(ContextApi);

  return (
    <SafeAreaView>
      <Text>{user?.name}</Text>
      <Button
        title={"Logout"}
        onPress={() => logout()}
      />
    </SafeAreaView>
  )
};