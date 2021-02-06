import React, { useState } from 'react'
import { Alert, StyleSheet, ScrollView } from 'react-native'
import { Container, Form, Item, Input, Button, Text } from 'native-base'
import { API_URL } from '../constants'

export default function AddItem() {
  const [itemNo, setItemNo] = useState('')
  const [itemName, setItemName] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [retailPrice, setRetailPrice] = useState('')
  const [costPrice, setCostPrice] = useState('')
  const [threshholdQuantity, setThreshholdQuantity] = useState('')
  const [quantity, setQuantity] = useState('')

  function addItem() {
    fetch(API_URL + '/items/additem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Item_No: itemNo,
        Item_Name: itemName,
        Category: category,
        Brand: brand,
        Retail_Price: retailPrice,
        Cost_Price: costPrice,
        Threshhold_Quantity: threshholdQuantity,
        Quantity: quantity,
      }),
    })
      .then((res) => {
        Alert.alert('Item has been successfully added.')
      })
      .catch((err) => {
        Alert.alert(err.toString())
      })
  }

  function clearForm() {
    setItemNo('')
    setItemName('')
    setCategory('')
    setBrand('')
    setRetailPrice('')
    setCostPrice('')
    setThreshholdQuantity('')
    setQuantity('')
  }

  return (
    <Container style={styles.container}>
      <ScrollView>
        <Form>
          <Item style={styles.input} regular>
            <Input
              keyboardType="numeric"
              placeholder="Item No"
              value={itemNo}
              onChangeText={setItemNo}
            />
          </Item>
          <Item style={styles.input} regular>
            <Input
              placeholder="Item Name"
              value={itemName}
              onChangeText={setItemName}
            />
          </Item>
          <Item style={styles.input} regular>
            <Input
              placeholder="Item Category"
              value={category}
              onChangeText={setCategory}
            />
          </Item>
          <Item style={styles.input} regular>
            <Input
              placeholder="Item Brand"
              value={brand}
              onChangeText={setBrand}
            />
          </Item>
          <Item style={styles.input} regular>
            <Input
              keyboardType="numeric"
              placeholder="Item Retail Price"
              value={retailPrice}
              onChangeText={setRetailPrice}
            />
          </Item>
          <Item style={styles.input} regular>
            <Input
              keyboardType="numeric"
              placeholder="Item Cost Price"
              value={costPrice}
              onChangeText={setCostPrice}
            />
          </Item>
          <Item style={styles.input} regular>
            <Input
              keyboardType="numeric"
              placeholder="Item Threshhold Quantity"
              value={threshholdQuantity}
              onChangeText={setThreshholdQuantity}
            />
          </Item>
          <Item style={styles.input} regular>
            <Input
              keyboardType="numeric"
              placeholder="Item Quantity"
              value={quantity}
              onChangeText={setQuantity}
            />
          </Item>
        </Form>
        <Button style={styles.input} full success onPress={addItem}>
          <Text>Add</Text>
        </Button>
        <Button style={styles.input} full light onPress={clearForm}>
          <Text>Clear</Text>
        </Button>
      </ScrollView>
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
})
