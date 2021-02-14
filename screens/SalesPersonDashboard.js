import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  Alert,
} from 'react-native'
import { API_URL } from '../constants'

export default function SalesPersonDashboard({ navigation }) {
  const [amount, setAmount] = useState(0)

  useEffect(function () {
    fetch(API_URL + '/DrawerAmount/GetDraweramount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((amount) => {
        setAmount(amount.Drawer_amount)
      })
      .catch((err) => {
        Alert.alert('Cannot get drawer amount.')
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Amount in Drawer: {amount}</Text>
      <View style={styles.centered}>
        <TouchableOpacity onPress={() => navigation.navigate('Point Of Sale')}>
          <Image
            style={styles.image}
            source={require('../assets/nsale.jpeg')}
          />
          <Text style={styles.text}>Make a Sale</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  centered: {
    marginTop: 100,
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'baseline',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
  },
})
