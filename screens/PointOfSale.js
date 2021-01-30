import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import { API_URL } from "../constants";

export default function PointOfSale({ navigation }) {
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
      <Text style={styles.heading}>Point Of Sale</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{
            paddingHorizontal: 10,
            borderWidth: 1,
            width: "80%",
          }}
          placeholder="Search Item by Item No"
          value={itemNo}
          onChangeText={setItemNo}
        />
        <View style={{ padding: 5 }}>
          <Button title="Search" onPress={searchItem} />
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={(props) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Product</Text>
            <Text style={{ fontWeight: "bold" }}>Quantity</Text>
            <Text style={{ fontWeight: "bold" }}>Price</Text>
          </View>
        )}
        renderItem={({ item: { Item_Name, Quantity, Retail_Price } }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: "45%" }}>{Item_Name}</Text>
            <View style={{ flexDirection: "row", width: "45%" }}>
              <Button title="-" />
              <TextInput style={{ borderWidth: 1 }} value={0} />
              <Button title="+" />
            </View>
            <Text style={{ width: "10%" }}>{Retail_Price}</Text>
          </View>
        )}
      />

      {/* ----------- */}

      {/* ----------- */}

      <TouchableOpacity style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Receipt")}
          color="tomato"
          title="GOTO  RECEIPT"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 30,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 20,
    color: "tomato",
    alignSelf: "center",
  },
  button: {
    width: 160,
    margin: 20,
    padding: 10,
    alignSelf: "center",
  },
});
