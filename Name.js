import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ContextUserName } from "../App";

function Name() {
  const myName = useContext(ContextUserName);
  myName.setName("Pauline Broängen");

  return (
    <View>
      <Text>Username: {myName.name}</Text>
    </View>
  );
}

export default Name;
