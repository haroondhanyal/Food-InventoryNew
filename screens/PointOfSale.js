import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, FlatList, Platform } from 'react-native'
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
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner'
import { API_URL } from '../constants'
import { useUser } from '../contexts/UserContext'

export default function PointOfSale({ navigation }) {
  const { user } = useUser()
  const [itemNo, setItemNo] = useState('')
  const [items, setItems] = useState([])
  const [itemSales, setItemSales] = useState(new Map())
  const [scanMode, setScanMode] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      if (Platform.OS !== 'web') {
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
          return
        }
      }
    })()
  }, [])

  function setQuantity(itemNo, price = 0, quantity = 0) {
    setItemSales(
      new Map(
        itemSales.set(itemNo, {
          quantity,
          total: quantity * price,
        })
      )
    )
  }

  function increaseQuantity(itemNo, price) {
    const quantity = parseInt(itemSales.get(itemNo).quantity) + 1
    setItemSales(
      new Map(
        itemSales.set(itemNo, {
          quantity,
          total: quantity * price,
        })
      )
    )
  }

  function decreaseQuantity(itemNo, price) {
    const quantity = parseInt(itemSales.get(itemNo).quantity) - 1
    setItemSales(
      new Map(
        itemSales.set(itemNo, {
          quantity,
          total: quantity * price,
        })
      )
    )
  }

  function cancelSale() {
    setItems([])
    setItemSales(new Map())
  }

  function searchItem() {
    fetch(API_URL + '/items/searchitem?itemno=' + itemNo, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then(([item]) => {
        itemSales.set(item.Item_No, { quantity: '0', total: '0' })
        setItems(items.concat([item]))
      })
      .catch((err) => {
        Alert.alert('Item not found. Plase goto Add Item to add new item.')
      })
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanMode(false)
    setItemNo(data)
    searchItem()
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  let total = 0

  itemSales.forEach((v) => {
    total += v.total
  })

  return scanMode ? (
    <>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.absoluteFillObject}
      />
      <Button style={styles.input} full info onPress={() => setScanMode(false)}>
        <Text>Back</Text>
      </Button>
    </>
  ) : (
    <Container style={styles.container}>
      <Text style={{ marginBottom: 10 }}>{user.username}</Text>
      <Button style={styles.input} full info onPress={() => {}}>
        <Text>Frequently Used Items</Text>
      </Button>
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
            <Button success onPress={() => setScanMode(true)}>
              <Text>Scan</Text>
            </Button>
          </InputGroup>
        </Item>
      </Form>

      <FlatList
        data={items}
        keyExtractor={(_, i) => i.toString()}
        ListFooterComponent={() => <Text>Net Total: {total}</Text>}
        renderItem={({ item }, i) => (
          <Card>
            <CardItem>
              <Left>
                <Text>Item Name</Text>
              </Left>
              <Right>
                <Text>{item.Item_Name}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Item No</Text>
              </Left>
              <Right>
                <Text>{item.Item_No}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Price</Text>
              </Left>
              <Right>
                <Text>{item.Retail_Price}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Quantity</Text>
              </Left>
              <Right>
                <Item style={styles.input} regular>
                  <Icon
                    name="remove"
                    onPress={() =>
                      decreaseQuantity(item.Item_No, item.Retail_Price)
                    }
                  />
                  <Input
                    value={itemSales.get(item.Item_No).quantity.toString()}
                    onChangeText={(quantity) =>
                      setQuantity(item.Item_No, item.Retail_Price, quantity)
                    }
                  />
                  <Icon
                    name="add"
                    onPress={() =>
                      increaseQuantity(item.Item_No, item.Retail_Price)
                    }
                  />
                </Item>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Total</Text>
              </Left>
              <Right>
                <Text>{itemSales.get(item.Item_No).total}</Text>
              </Right>
            </CardItem>
          </Card>
        )}
      />

      <Button style={styles.input} full success>
        <Text>Pay</Text>
      </Button>

      <Button style={styles.input} full danger onPress={cancelSale}>
        <Text>Cancel</Text>
      </Button>
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
  absoluteFillObject: {
    flex: 1,
  },
})
