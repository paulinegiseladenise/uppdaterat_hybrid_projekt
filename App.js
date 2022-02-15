import React from "react";
import { Platform, Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterComponent from "./src/RegisterComponent";
import * as Animatable from "react-native-animatable";
import { createContext, useState } from "react";
import Name from "./src/Name";

const Stack = createNativeStackNavigator();

export const ContextUserName = createContext();

function HomeScreen({ navigation }) {
  const [name, setName] = useState("Greta");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 26,
          color: "#f37021",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Animatable.Text
            animation="pulse"
            duration={2000}
            iterationCount={"infinite"}
          >
            {"\n"}
            You can win an exclusive bag!
            {"\n"}
            {"\n"}
          </Animatable.Text>
        </View>
      </Text>

      <ContextUserName.Provider value={{ name, setName }}>
        <View>
          <Name />
        </View>
      </ContextUserName.Provider>

      <View style={styles.platformSpecific}>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {"\n"}You register with first and
          {"\n"}last name and can only
          {"\n"}register once on each item.
          {"\n"}
          {"\n"}Click on the button below to go to
          {"\n"}the register page.
          {"\n"}
          {"\n"}
        </Text>

        <View style={styles.buttons}>
          <Button
            color="#675b51"
            title="R e g i s t e r"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>

      <View style={styles.platformSpecific}>
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
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "T H E   B A G   L O T T E R Y",
            headerStyle: { backgroundColor: "#332d28" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterComponent}
          options={{
            headerRight: () => (
              <Button
                color="#675b51"
                title="I n f o"
                onPress={() =>
                  alert(
                    "Bag of the month: 'Snapshot' from MARC JACOBS. Lycka till!"
                  )
                }
              />
            ),
            title: "R e g i s t e r   P a g e",
            headerStyle: { backgroundColor: "#332d28" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="Example"
          getComponent={() => require("./src/Example").default}
          options={{
            title: "The Example",
            headerStyle: { backgroundColor: "#332d28" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="Item"
          getComponent={() => require("./src/ItemComponents").default}
          options={{
            title: "B a g   o f   t h e   m o n t h",
            headerStyle: { backgroundColor: "#332d28" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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

  buttons: {
    margin: 10,
    padding: 0,
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 10,
    alignItems: "center",
  },

  platformSpecific: {
    flex: 1,
    ...Platform.select({
      ios: {
        width: "90%",
        height: "40%",
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        margin: 10,
      },
      android: {
        width: "90%",
        height: "40%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        margin: 10,
      },

      default: {
        width: "90%",
        height: "40%",
        backgroundColor: "#ddd6cf",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        margin: 10,
      },
    }),
  },
});
