import React, { useState, useContext } from "react";
import {
  Button,
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
} from "react-native";






const ItemComponents = ({ navigation }) => {

  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.basicBackground}>
        <Text
          style={{
            fontSize: 18,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {"\n"}
          {"\n"}B A G O F T H E M O N T H{"\n"}
          {"\n"}
        </Text>


        <Text
          style={{
            fontSize: 12,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            textDecorationLine: "underline",
          }}
        >
          {"\n"}The bag: 'Snapshot' from MARC JACOBS
          {"\n"}
          {"\n"}
        </Text>
        <Text></Text>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: "https://images.unsplash.com/photo-1575890318083-4d7c6ebcd60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
          }}
        />
        <ScrollView style={{ width: 250 }}>
          <Text
            style={{
              fontSize: 18,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            www.marcjacobs.com
            {"\n"}Details: Brown leather with rosegold details.
          </Text>
        </ScrollView>
      </View>

      <View style={styles.buttons}>
        <Button
          color="#ddd6cf"
          title="G o   t o   H o m e p a g e"
          onPress={() => navigation.popToTop()}
        ></Button>
      </View>
    </View>
  );
};

export default ItemComponents;

const styles = StyleSheet.create({
  basicBackground: {
    width: "90%",
    height: "78%",
    backgroundColor: "white",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
    alignItems: "center",
  },

  buttons: {
    margin: 10,
    padding: 0,
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 10,
    alignItems: "center",
  },
});
