import React, { useState, useEffect } from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-web";


const STORAGE_KEY = "@save_age";

const RegisterComponent = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    try {
      const firstName = await AsyncStorage.getItem(STORAGE_KEY);

      if (firstName !== null) {
        setFirstName(firstName);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, firstName);
      setFirstName(firstName);
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("Storage successfully cleared");
    } catch (e) {
      alert("Failed to clear the async storage");
    }
  };

  const onChangeText = (firstName) => setFirstName(firstName);

  const onSubmitEditing = () => {
    if (!firstName) return;
    saveData(firstName);
    setFirstName("");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.basicBackground}>
        <Text>Have a chance and make a difference...</Text>
        <Text>
          Maybe you are the winner of an exclusive bag!
          {"\n"}
        </Text>

        <View style={styles.registerInfo}>
          <Text>Enter your name and press enter</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            placeholder=" Firstname"
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          <Text>Your name is {firstName}</Text>
          <TouchableOpacity onPress={clearStorage}>
            <Button
              color="#675b51"
              title="Clear storage"
              onPress={clearStorage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.basicBackground}>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Click on the button below to see
          {"\n"}which bag you can win.
          {"\n"}
          {"\n"}
        </Text>
        <View style={styles.buttons}>
          <Button
            color="#675b51"
            title="B a g   o f   t h e   m o n t h"
            onPress={() => navigation.navigate("Item")}
          />
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          color="#ddd6cf"
          title="G o   t o   h o m e p a g e"
          onPress={() => navigation.popToTop()}
        ></Button>
      </View>
    </View>
  );
};

export default RegisterComponent;

const styles = StyleSheet.create({
  basicBackground: {
    width: "90%",
    height: "40%",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  registerInfo: {
    width: 200,
    height: 100,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 10,
    alignItems: "center",
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 3,
    borderColor: "black",
  },
});
