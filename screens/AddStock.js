import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
// import { Picker } from "@react-native-picker/picker";

export default function AddStock() {
  const [quantity, setQuantity] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Stock</Text>

      {/* <Picker style={styles.input} onLayout="Select Items">
        <Picker.Item label="-- Select Category --" value="" />
        <Picker.Item label="Cold Drinks" value="7 up" />
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

      <Picker style={styles.input} onLayout="Select Items">
        <Picker.Item label="-- Select Brand --" value="" />
        <Picker.Item label="7 up" value="Cold Drinks" />
        <Picker.Item label="Silla Rice" value="rice" />
        <Picker.Item label="Dalda " value="Dalda oil" />
        <Picker.Item label="Nestle " value="nestle nido" />
        <Picker.Item label="Surf Excel" value="surf" />
        <Picker.Item label="Dawn Breakfast" value="medium" />
        <Picker.Item label="Lipton " value="Tea" />
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

      <Picker style={styles.input} onLayout="Select Items">
        <Picker.Item label="-- Select  Item Name--" value="" />
        <Picker.Item label="Cold Drinks" value="7 up" />
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
      </Picker> */}

      <TextInput style={styles.input} placeholder="Item Code" />

      <View style={{ justifycontent: "space-around", flexDirection: "row" }}>
        <View style={{ marginRight: 80 }}>
          <Text style={styles.qty}>Quantity</Text>
        </View>
        <Button
          style={{ width: 50 }}
          title="-"
          onPress={() => setQuantity(Math.abs(quantity - 1))}
        />
        <Text>{quantity}</Text>
        <Button
          style={{ width: 50 }}
          title="+"
          onPress={() => setQuantity(quantity + 1)}
        />
      </View>

      <View style={styles.button}>
        <Button color="cornflowerblue" alignSelf="center" title="Save" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
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
  qty: {
    padding: 5,
    fontSize: 18,
  },
  button: {
    width: 200,
    alignSelf: "center",
    marginTop: 30,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  no: { width: "50%", padding: 5, textAlign: "center" },
});
