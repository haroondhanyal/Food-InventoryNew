import React, { useState } from "react";
import { Text, TextInput, View, Image, StyleSheet, Button } from "react-native";
import DatePicker from "react-native-datepicker";

export default function StockReport() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Stock Report</Text>

      <View style={styles.form}>
        <DatePicker
          style={styles.input}
          date={fromDate}
          onDateChange={(date) => setFromDate(date)}
          placeholder="From"
        />

        <DatePicker
          style={styles.input}
          date={toDate}
          onDateChange={(date) => setToDate(date)}
          placeholder="To"
        />

        <TextInput style={styles.input} placeholder="Item Code" />

        <View style={styles.button}>
          <Button color="tomato" alignSelf="center" title="Generate" />
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
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    width: "100%",
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
});
