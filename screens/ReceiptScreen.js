import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ScrollView,
} from "react-native";

const products = [
  {
    name: "Milk",
    quantity: 5,
    price: 725,
  },
  {
    name: "Ghee",
    quantity: 5,
    price: 990,
  },
  {
    name: "Milk",
    quantity: 55,
    price: 1000,
  },
  {
    name: "Milk",
    quantity: 55,
    price: 1000,
  },
  {
    name: "Milk",
    quantity: 55,
    price: 1000,
  },
  {
    name: "Milk",
    quantity: 55,
    price: 1000,
  },
];

export default function ReceiptScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 24,
            color: "tomato",
            textAlign: "center",
            marginBottom: 20,
            fontWeight: "bold",
          }}
        >
          Sale Invoice
        </Text>
      </View>
      <View
        style={[
          styles.tableRow,
          { borderTopWidth: 2, borderBottomWidth: 2, backgroundColor: "#ccc" },
        ]}
      >
        <View style={styles.tableRowCell}>
          <Text>Item Name</Text>
        </View>
        <View style={[styles.tableRowCell, { marginLeft: 5 }]}>
          <Text>Qty</Text>
        </View>
        <View style={styles.tableRowCell}>
          <Text>Rate</Text>
        </View>
        <View style={styles.tableRowCell}>
          <Text>Total</Text>
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(i, index) => index}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <View style={styles.tableRowCell}>
              <Text>{item.name}</Text>
            </View>
            <View style={styles.tableRowCell}>
              <Text>{item.quantity}</Text>
            </View>
            <View style={styles.tableRowCell}>
              <Text>{item.price}</Text>
            </View>
            <View style={styles.tableRowCell}>
              <Text>{item.quantity * item.price}</Text>
            </View>
          </View>
        )}
      />
      <View>
        <View style={styles.bottomItem}>
          <Text>Payment mode:</Text>
          <Text>Cash</Text>
        </View>
        <View style={styles.bottomItem}>
          <Text>Invoice net total:</Text>
          <Text>{products.reduce((t, i) => t + i.price * i.quantity, 0)}</Text>
        </View>
        <View
          style={[
            styles.bottomItem,
            { borderBottomWidth: 2, paddingBottom: 5 },
          ]}
        >
          <Text>Discount:</Text>
          <Text>
            5% ({products.reduce((t, i) => t + i.price * i.quantity, 0) * 0.05})
          </Text>
        </View>
        <View style={styles.bottomItem}>
          <Text>Total bill:</Text>
          <Text>
            {products.reduce((t, i) => t + i.price * i.quantity, 0) -
              products.reduce((t, i) => t + i.price * i.quantity, 0) * 0.05}
          </Text>
        </View>
        <View
          style={[
            styles.bottomItem,
            { borderBottomWidth: 2, paddingBottom: 5 },
          ]}
        >
          <Text>Cash paid:</Text>
          <Text>{500000}</Text>
        </View>
        <View
          style={[
            styles.bottomItem,
            { borderBottomWidth: 4, paddingBottom: 5 },
          ]}
        >
          <Text>Customer balance:</Text>
          <Text>
            {500000 -
              products.reduce((t, i) => t + i.price * i.quantity, 0) -
              products.reduce((t, i) => t + i.price * i.quantity, 0) * 0.05}
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button color="tomato" alignSelf="center" title="Pay" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 20,
  },
  tableRowCell: {
    flex: 0.25,
  },
  bottomItem: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 200,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 50,
    height: 50,
  },
});
