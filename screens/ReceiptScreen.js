import React from 'react'
import { StyleSheet, View, FlatList, Button, ScrollView } from 'react-native'
import { Container, ListItem, Left, Body, Right, Text } from 'native-base'
import { useRoute } from '@react-navigation/native'
import { useUser } from '../contexts/UserContext'

export default function ReceiptScreen() {
  const route = useRoute()
  const { user } = useUser()

  const items = route.params.items || []
  const total = route.params.total || 0

  return (
    <Container style={styles.container}>
      <View style={{ backgroundColor: '#f9f9f9' }}>
        <ListItem noBorder>
          <Left>
            <Text>Receipt #:</Text>
          </Left>
          <Body>
            <Text>1</Text>
          </Body>
        </ListItem>
        <ListItem noBorder>
          <Left>
            <Text>Sale Person:</Text>
          </Left>
          <Body>
            <Text>{user.username}</Text>
          </Body>
        </ListItem>
        <ListItem noBorder>
          <Left>
            <Text>Date:</Text>
          </Left>
          <Body>
            <Text>{new Date().toDateString()}</Text>
          </Body>
        </ListItem>
      </View>
      <FlatList
        data={items}
        keyExtractor={(i, index) => index.toString()}
        ListHeaderComponent={() => (
          <ListItem first>
            <Left>
              <Text style={{ marginRight: 20 }}>Sr.</Text>
              <Text>Items</Text>
            </Left>
            <Body>
              <Text>Quantity</Text>
            </Body>
            <Right>
              <Text>Price</Text>
            </Right>
          </ListItem>
        )}
        renderItem={({ item, index }) => (
          <ListItem>
            <Left>
              <Text style={{ marginRight: 20 }}>{index + 1}</Text>
              <Text>{item.Item_Name}</Text>
            </Left>
            <Body>
              <Text>{item.Quantity}</Text>
            </Body>
            <Right>
              <Text>{item.Retail_Price}</Text>
            </Right>
          </ListItem>
        )}
        ListFooterComponent={() => (
          <>
            <ListItem last>
              <Left>
                <Text>TOTAL Rs.</Text>
              </Left>
              <Right>
                <Text> {total}</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={{ color: 'blue', textAlign: 'center' }}>
                  Thankyou for shoping from us!
                </Text>
              </Body>
            </ListItem>
          </>
        )}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
