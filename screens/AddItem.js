import React, { useState } from "react";
import { Text, TextInput, View, Image, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { API_URL } from "../constants";

export default function AddItem() {
  function ClearlItem() {
    fetch(API_URL + "/Items/ClearItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Item_No: ItemCode,
        Item_Name: ItemName,
        Category: selectedValue,
        Brand: Brand,
        Retail_Price: RetailPrice,
        Cost_Price: CostPrice,
        Threshhold_Quantity: THreshHold,
        Quantity: Quantity,
      }),
    });
  }
  function SaveItem() {
    fetch(API_URL + "/Items/AddItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Item_No: ItemCode,
        Item_Name: ItemName,
        Category: selectedValue,
        Brand: Brand,
        Retail_Price: RetailPrice,
        Cost_Price: CostPrice,
        Threshhold_Quantity: THreshHold,
        Quantity: Quantity,
      }),
    });
  }
  function UpdateItem() {
    fetch(API_URL + "/Items/ModifyItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Item_No: ItemCode,
        Item_Name: ItemName,
        Category: selectedValue,
        Brand: Brand,
        Retail_Price: RetailPrice,
        Cost_Price: CostPrice,
        Threshhold_Quantity: THreshHold,
        Quantity: Quantity,
      }),
    });
    alert("Pressed");
  }

  const [selectedValue, setSelectedValue] = useState("");
  const [Brand, setBrand] = useState("");
  const [ItemCode, setItemCode] = useState("");
  const [ItemName, setItemName] = useState("");
  const [CostPrice, setCostPrice] = useState("");
  const [RetailPrice, setRetailPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [THreshHold, setTHreshHold] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Item</Text>
      {/* <Image style={styles.image} source={require("../assets/edititem.png")} /> */}
      <View style={styles.form}>
        <Picker
          style={styles.input}
          onLayout="Select Items"
          onValueChange={(item) => setSelectedValue(item)}
        >
          <Picker.Item label="-- Select Category--" value="" />
          <Picker.Item label="Pepsi" value="7 up" />

          <Picker.Item label="Rice" value="rice" />
          <Picker.Item label="Dalda oil" value="Dalda oil" />
          <Picker.Item label="Nestle Needo" value="nestle nido" />
          <Picker.Item label="Surf Excel" value="surf" />
          <Picker.Item label="Bread" value="medium" />
          <Picker.Item label="Lipton Tea" value="Tea" />
          <Picker.Item label="Axe " value="perfume" />
          <Picker.Item label="Rose Petal" value="tissue" />
          <Picker.Item label="Chicken Spread" value="chicken" />
          <Picker.Item label="Vinegar" value="liquid" />
          <Picker.Item label="Salt" value="salt" />
          <Picker.Item label="Sugar" value="sugar" />
          <Picker.Item label="Magnum Icecream" value="icecream" />
          <Picker.Item label="Dairy milk Choclate" value="choclate" />
          <Picker.Item label="Mineral Water" value="water" />
          <Picker.Item label="Slice Juice" value="juice" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Brand"
          onChangeText={(item) => setBrand(item)}
        />
        <TextInput
          style={styles.input}
          placeholder="Item Code"
          onChangeText={(item) => setItemCode(item)}
        />
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          onChangeText={(item) => setItemName(item)}
        />
        <TextInput
          style={styles.input}
          placeholder="Cost Price"
          onChangeText={(item) => setCostPrice(item)}
        />
        <TextInput
          style={styles.input}
          placeholder="Retail Price"
          onChangeText={(item) => setRetailPrice(item)}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          onChangeText={(item) => setQuantity(item)}
        />
        <TextInput
          style={styles.input}
          placeholder="THreshHold  Qty"
          onChangeText={(item) => setTHreshHold(item)}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              color="deepskyblue"
              title="Cancel"
              onPress={() => ClearlItem(null)}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="chartreuse"
              title="Save"
              onPress={() => SaveItem()}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#4b0082"
              title="Update"
              onPress={() => UpdateItem()}
            />
          </View>
          {/* <View style={styles.button}>
            <Button color="#ff0000" title="Delete" />
          </View> */}
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
    marginTop: 30,
  },
  button: {
    width: 70,
    margin: 20,
  },
  image: {
    width: 150,
    height: 90,
    alignSelf: "center",
  },
});
