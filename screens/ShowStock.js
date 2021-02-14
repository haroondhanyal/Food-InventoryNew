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
  Card,
  CardItem,
  Right,
  Left,
} from 'native-base'
import { API_URL } from '../constants'

export default function ShowStock() {
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
        Alert.alert('Item not found. Plase goto Add Item to add new item.')
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
                value={searchItemNo}
                onChangeText={setSearchItemNo}
              />
              <Button transparent onPress={searchItem}>
                <Text>Search</Text>
              </Button>
            </InputGroup>
          </Item>
        </Form>

        <Card>
          <CardItem>
            <Left>
              <Text>Item No</Text>
            </Left>
            <Right>
              <Text>{itemNo}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Name</Text>
            </Left>
            <Right>
              <Text>{itemName}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Category</Text>
            </Left>
            <Right>
              <Text>{category}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Brand</Text>
            </Left>
            <Right>
              <Text>{brand}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Retail Price</Text>
            </Left>
            <Right>
              <Text>{retailPrice}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Cost Price</Text>
            </Left>
            <Right>
              <Text>{costPrice}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Threshhold Quantity</Text>
            </Left>
            <Right>
              <Text>{threshholdQuantity}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Quantity</Text>
            </Left>
            <Right>
              <Text>{quantity}</Text>
            </Right>
          </CardItem>
        </Card>
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
