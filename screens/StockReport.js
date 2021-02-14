import React, { useState } from 'react'
import { Alert, StyleSheet, FlatList } from 'react-native'
import {
  Container,
  Form,
  Item,
  Input,
  Button,
  Text,
  Card,
  CardItem,
  Right,
  Left,
} from 'native-base'
import DatePicker from 'react-native-datepicker'
import { API_URL } from '../constants'

export default function StockReport() {
  const [from, setFrom] = useState(new Date())
  const [to, setTo] = useState(new Date())
  const [itemNo, setItemNo] = useState('')
  const [items, setItems] = useState([])

  function gnerateStockReport() {
    fetch(API_URL + '/report/stockreportwithdate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemno: itemNo,
        startdate: new Date(from),
        enddate: new Date(to),
      }),
    })
      .then((res) => res.json())
      .then((items) => {
        console.log(items)
        setItems(items)
      })
      .catch((err) => {
        Alert.alert(err.toString())
      })
  }

  return (
    <Container style={styles.container}>
      <Form>
        <DatePicker
          style={[styles.input, { width: '100%' }]}
          date={from}
          onDateChange={setFrom}
          placeholder="From"
        />
        <DatePicker
          style={[styles.input, { width: '100%' }]}
          date={to}
          onDateChange={setTo}
          placeholder="To"
        />
        <Item style={styles.input} regular>
          <Input
            keyboardType="numeric"
            placeholder="Item No"
            value={itemNo}
            onChangeText={setItemNo}
          />
        </Item>
        <Button style={styles.input} full info onPress={gnerateStockReport}>
          <Text>Generate</Text>
        </Button>
      </Form>

      <FlatList
        data={items}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Card>
            <CardItem>
              <Left>
                <Text>Date</Text>
              </Left>
              <Right>
                <Text>{new Date(item.Date).toDateString()}</Text>
              </Right>
            </CardItem>
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
                <Text>Quantity</Text>
              </Left>
              <Right>
                <Text>{item.Quantity}</Text>
              </Right>
            </CardItem>
          </Card>
        )}
      />
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
