import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { API_URL } from "../constants";

export default function ShowStock({ navigation }) {
  const [itemNo, setItemNo] = useState("");
  const [items, setItems] = useState([]);

  function searchItem() {
    fetch(API_URL + `/items/searchitem?ItemNo=${itemNo}`)
      .then((response) => {
        if (response.status === 404) {
          response.json().then(function (err) {
            alert(err.Message);
          });
        } else if (response.status === 200) {
          response.json().then(function (item) {
            setItems(items.concat([...item]));
          });
        }
      })
      .catch((err) => alert(err.name, err.message));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Stock</Text>

      <TextInput style={styles.input} placeholder="Search name" />

      <View style={styles.button}>
        <Button title="Search" onPress={searchItem} />
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
    padding: 2,
    borderBottomWidth: 1.5,
    borderColor: "black",
    marginBottom: 5,
    width: "100%",
  },

  button: {
    width: 100,
    alignSelf: "flex-end",
    marginTop: 20,
  },

  no: { width: "50%", padding: 5, textAlign: "center" },
});
