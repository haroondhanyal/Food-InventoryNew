import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";

export default function SalesPersonDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <TouchableOpacity
          style={styles.block}
          onPress={() => navigation.navigate("Point Of Sale")}
        >
          <Image
            style={styles.image}
            source={require("../assets/nsale.jpeg")}
          />
          <Text>Make a Sale</Text>
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
    marginTop: 100,
    alignSelf: "center",
  },
  row: {
    marginTop: 100,
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
