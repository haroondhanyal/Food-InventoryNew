import React, { useState } from "react";
import { Text, TextInput, View, Image, StyleSheet, Button } from "react-native";
import DatePicker from "react-native-datepicker";

export default function SearchReceipt() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Receipt</Text>
      <Text> By Receipt</Text>
      <TextInput style={styles.input} placeholder="Receipt" />
      <Text style={{ marginBottom: 10 }}>By Receipt Date Range</Text>

      <DatePicker
        style={styles.datepicker}
        date={fromDate}
        onDateChange={(date) => setFromDate(date)}
        placeholder="From"
      />

      <DatePicker
        style={styles.datepicker}
        date={toDate}
        onDateChange={(date) => setToDate(date)}
        placeholder="To"
      />
      <Text>Receipt Amount Range</Text>
      <TextInput style={styles.input} placeholder="Starting Amount" />
      <TextInput style={styles.input} placeholder="Ending Amount" />

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button color="tomato" title="Clear" />
        </View>
        <View style={styles.button}>
          <Button color="tomato" title="Search" />
        </View>
      </View>
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
  input: {
    padding: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,

    marginBottom: 20,
    width: "100%",
  },
  form: {
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 40,
    margin: 10,
    borderRadius: 25,
  },
  datepicker: {
    width: "100%",
    marginBottom: 20,
  },
});
