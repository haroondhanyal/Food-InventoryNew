import React, { useState } from 'react'
import { Alert, StyleSheet, ScrollView } from 'react-native'
import {
  Container,
  Form,
  Item,
  Input,
  Button,
  Text,
  InputGroup,
  Icon,
} from 'native-base'
import { API_URL } from '../constants'

export default function EditItem() {
  const [searchItemNo, setSearchItemNo] = useState('')
  const [itemNo, setItemNo] = useState('')
  const [itemName, setItemName] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [retailPrice, setRetailPrice] = useState('')
  const [costPrice, setCostPrice] = useState('')
  const [threshholdQuantity, setThreshholdQuantity] = useState('')
  const [quantity, setQuantity] = useState('')

  function searchItem() {
    fetch(API_URL + '/items/searchitem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemno: searchItemNo,
      }),
    })
      .then((res) => res.json())
      .then(([item]) => {
        setItemNo(item.Item_No.toString())
        setItemName(item.Item_Name)
        setCategory(item.Category)
        setBrand(item.Brand)
        setRetailPrice(item.Retail_Price.toString())
        setCostPrice(item.Cost_Price.toString())
        setThreshholdQuantity(item.Threshhold_Quantity.toString())
        setQuantity(item.Quantity.toString())
      })
      .catch((err) => {
        Alert.alert(err.toString())
      })
  }

  function editItem() {
    fetch(API_URL + '/items/modifyitem', {
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
        Alert.alert('Item has been modified successfully.')
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
            <InputGroup>
              <Icon name="ios-search" />
              <Input
                placeholder="Search Item No"
                value={searchItemNo}
                onChangeText={setSearchItemNo}
              />
              <Button transparent onPress={searchItem}>
                <Text>Search</Text>
              </Button>
            </InputGroup>
          </Item>
        </Form>

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
        <Button style={styles.input} full success onPress={editItem}>
          <Text>Edit</Text>
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
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
})
