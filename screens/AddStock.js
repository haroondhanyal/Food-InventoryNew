import React, { useState } from 'react'
import { Alert, StyleSheet, ScrollView } from 'react-native'
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
  Separator,
  InputGroup,
} from 'native-base'
import { API_URL } from '../constants'

export default function AddStock() {
  const [itemNo, setItemNo] = useState('')
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState('')

  function decreaseQuantity() {
    setQuantity(Math.abs(parseInt(quantity) - 1).toString())
  }

  function increaseQuantity() {
    setQuantity((parseInt(quantity) + 1).toString())
  }

  function searchItem() {
    fetch(API_URL + '/items/searchitem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemno: itemNo,
      }),
    })
      .then((res) => res.json())
      .then(([item]) => {
        console.log(item)

        setItemName(item.Item_Name)
        setQuantity(item.Quantity.toString())
      })
      .catch((err) => {
        Alert.alert('Item not found. Plase goto Add Item to add new item.')
      })
  }

  function addStock() {
    if (!itemNo || !quantity) {
      Alert.alert('Please fill inputs first.')
      return
    }

    fetch(API_URL + '/stock/addstock', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Item_No: itemNo,
        Quantity: quantity,
      }),
    })
      .then((res) => {
        Alert.alert('Stock has been successfully added.')
        setItemNo('')
        setItemName('')
        setQuantity('')
      })
      .catch((err) => {
        Alert.alert(err.toString())
      })
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
                value={itemNo}
                onChangeText={setItemNo}
              />
              <Button transparent onPress={searchItem}>
                <Text>Search</Text>
              </Button>
            </InputGroup>
          </Item>
        </Form>

        <Form>
          <Item>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Add Stock for Item: {itemName}
            </Text>
          </Item>

          <Item style={styles.input} regular>
            <Input
              placeholder="Quantity"
              value={quantity}
              onChangeText={setQuantity}
            />
            <Icon name="remove" onPress={decreaseQuantity} />
            <Icon name="add" onPress={increaseQuantity} />
          </Item>
        </Form>
        <Button style={styles.input} full success onPress={addStock}>
          <Text>Save</Text>
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
