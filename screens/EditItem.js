import React from "react";
import { Text, TextInput, View, Image, StyleSheet, Button } from "react-native";

export default function EditItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Item</Text>
      <Image style={styles.image} source={require("../assets/edititem.png")} />
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Brand" />
        <TextInput style={styles.input} placeholder="Item Code" />
        <TextInput style={styles.input} placeholder="Item Name" />
        <TextInput style={styles.input} placeholder="Quantity" />
        <TextInput style={styles.input} placeholder="Cost Price" />
        <TextInput style={styles.input} placeholder="Retail Price" />
        <TextInput style={styles.input} placeholder="Treshhold Qty" />
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button color="#c0c0c0" title="Cancel" />
        </View>
        <View style={styles.button}>
          <Button color="#00ff00" title="Save" />
        </View>
        <View style={styles.button}>
          <Button color="#4b0082" title="Update" />
        </View>
        <View style={styles.button}>
          <Button color="#ff0000" title="Delete" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 20,
    color: "tomato",
    alignSelf: "center",
  },
  form: {
    padding: 10,
  },
  input: {
    padding: 5,

    borderBottomWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: 70,
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignSelf: "center",
  },
});
