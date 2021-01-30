import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { Form, Item, Input, Button, Text } from "native-base";

export default function SalesManagerDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Form style={{ marginTop: 50, marginBottom: 50 }}>
        <Item bordered>
          <Input style={{ borderBottomWidth: 2 }} />
          <Button>
            <Text>Start Sale</Text>
          </Button>
        </Item>
      </Form>
      <View style={styles.centered}>
        <TouchableOpacity
          style={styles.block}
          onPress={() => navigation.navigate("Add Stock")}
        >
          <Image
            style={styles.image}
            source={require("../assets/addstock.png")}
          />
          <Text>Add Stock</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.block}
          onPress={() => navigation.navigate("Sale Report")}
        >
          <Image
            style={styles.image}
            source={require("../assets/report.jpg")}
          />
          <Text>Sales Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.block}
          onPress={() => navigation.navigate("Stock Report")}
        >
          <Image
            style={styles.image}
            source={require("../assets/report.jpg")}
          />
          <Text>Stock Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centered: {
    alignSelf: "center",
  },
  row: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  block: {
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "baseline",
    marginBottom: 20,
  },
});
