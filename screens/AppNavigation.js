import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Thumbnail } from 'native-base'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { useUser } from '../contexts/UserContext'
import SalesManagerDashboard from './SalesManagerDashboard'
import DailyRecord from './DailyRecord'
import AddItem from './AddItem'
import EditItem from './EditItem'
import ShowStock from './ShowStock'
import AddStock from './AddStock'
import SaleReport from './SaleReport'
import StockReport from './StockReport'
import SalesPersonDashboard from './SalesPersonDashboard'
import PointOfSale from './PointOfSale'
import ReceiptScreen from './ReceiptScreen'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function SalesManagerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sales Manager Dashboard"
        component={SalesManagerDashboard}
      />
      <Stack.Screen name="Daily Record" component={DailyRecord} />
      <Stack.Screen name="Add Item" component={AddItem} />
      <Stack.Screen name="Edit Item" component={EditItem} />
      <Stack.Screen name="Show Stock" component={ShowStock} />
      <Stack.Screen name="Add Stock" component={AddStock} />
      <Stack.Screen name="Sale Report" component={SaleReport} />
      <Stack.Screen name="Stock Report" component={StockReport} />
    </Stack.Navigator>
  )
}

function SalesPersonStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sales Person Dashboard"
        component={SalesPersonDashboard}
      />
      <Stack.Screen name="Point Of Sale" component={PointOfSale} />
      <Stack.Screen name="Receipt" component={ReceiptScreen} />
    </Stack.Navigator>
  )
}

export default function () {
  const { user, setUser } = useUser()
  function logout() {
    setUser(null)
  }

  return (
    <Drawer.Navigator
      drawerContent={({ navigation, ...props }) => (
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Thumbnail source={require('../assets/login.png')} size={50} />
                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                  <Text style={styles.title}>{user.username}</Text>
                  <Text style={styles.caption}>{user.role}</Text>
                </View>
              </View>
            </View>
          </View>
          {user.role === 'SalesManager' ? (
            <>
              <DrawerItem
                icon={(props) => <MaterialIcons {...props} name="people-alt" />}
                label="Daily Record"
                onPress={() => navigation.navigate('Daily Record')}
              />
              <DrawerItem
                icon={(props) => <MaterialIcons {...props} name="add" />}
                label="Add Item"
                onPress={() => navigation.navigate('Add Item')}
              />
              <DrawerItem
                icon={(props) => <MaterialIcons {...props} name="add" />}
                label="Edit Item"
                onPress={() => navigation.navigate('Edit Item')}
              />
              <DrawerItem
                icon={(props) => <MaterialIcons {...props} name="add" />}
                label="Show Stock"
                onPress={() => navigation.navigate('Show Stock')}
              />
              <DrawerItem
                icon={(props) => <MaterialIcons {...props} name="add" />}
                label="Add Stock"
                onPress={() => navigation.navigate('Add Stock')}
              />
              <DrawerItem
                icon={(props) => <MaterialIcons {...props} name="add" />}
                label="Sale Report"
                onPress={() => navigation.navigate('Sale Report')}
              />
              <DrawerItem
                icon={(props) => <MaterialIcons {...props} name="add" />}
                label="Stock Report"
                onPress={() => navigation.navigate('Stock Report')}
              />
            </>
          ) : (
            <>
              <DrawerItem
                icon={(props) => <MaterialIcons {...props} name="add" />}
                label="Point Of Sale"
                onPress={() => navigation.navigate('Point Of Sale')}
              />
            </>
          )}
          <DrawerItemList {...props} />
          <DrawerItem
            icon={(props) => <MaterialIcons {...props} name="logout" />}
            label="Logout"
            onPress={logout}
          />
        </DrawerContentScrollView>
      )}
    >
      {user.role === 'SalesManager' ? (
        <Drawer.Screen
          name="Sales Manager Dashboard"
          component={SalesManagerStack}
          options={{
            drawerIcon: (props) => (
              <MaterialIcons {...props} name="dashboard" />
            ),
          }}
        />
      ) : (
        <Drawer.Screen
          name="Sales Person Dashboard"
          component={SalesPersonStack}
          options={{
            drawerIcon: (props) => (
              <MaterialIcons {...props} name="dashboard" />
            ),
          }}
        />
      )}
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
})
