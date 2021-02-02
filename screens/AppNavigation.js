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
      drawerContent={(props) => (
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
        <>
          <Drawer.Screen
            options={{
              drawerIcon: (props) => (
                <MaterialIcons {...props} name="dashboard" />
              ),
            }}
            name="Sales Manager Dashboard"
            component={SalesManagerDashboard}
          />
          <Drawer.Screen
            options={{
              drawerIcon: (props) => (
                <MaterialIcons {...props} name="people-alt" />
              ),
            }}
            name="Daily Record"
            component={DailyRecord}
          />
          <Drawer.Screen
            options={{
              drawerIcon: (props) => <MaterialIcons {...props} name="add" />,
            }}
            name="Add Item"
            component={AddItem}
          />
          <Drawer.Screen
            options={{
              drawerIcon: (props) => <MaterialIcons {...props} name="edit" />,
            }}
            name="Edit Item"
            component={EditItem}
          />
          <Drawer.Screen
            options={{
              drawerIcon: (props) => (
                <MaterialIcons {...props} name="add-shopping-cart" />
              ),
            }}
            name="Show Stock"
            component={ShowStock}
          />
          <Drawer.Screen
            options={{
              drawerIcon: (props) => <MaterialIcons {...props} name="add" />,
            }}
            name="Add Stock"
            component={AddStock}
          />
          <Drawer.Screen
            options={{
              drawerIcon: (props) => (
                <FontAwesome {...props} name="bar-chart" />
              ),
            }}
            name="Sale Report"
            component={SaleReport}
          />

          <Drawer.Screen
            options={{
              drawerIcon: (props) => (
                <MaterialCommunityIcons {...props} name="chart-bar" />
              ),
            }}
            name="Stock Report"
            component={StockReport}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            options={{
              drawerIcon: (props) => (
                <MaterialIcons {...props} name="dashboard" />
              ),
            }}
            name="Sales Person Dashboard"
            component={SalesPersonDashboard}
          />
          <Drawer.Screen
            options={{
              drawerIcon: (props) => <MaterialIcons {...props} name="add" />,
            }}
            name="Point Of Sale"
            component={PointOfSale}
          />
        </>
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
