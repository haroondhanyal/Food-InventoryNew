import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useUser } from "../contexts/UserContext";
import SalesManagerDashboard from "./SalesManagerDashboard";
import SalesPersonDashboard from "./SalesPersonDashboard";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import AddStock from "./AddStock";
import SaleReport from "./SaleReport";
import StockReport from "./StockReport";
import PointOfSale from "./PointOfSale";
import ShowStock from "./ShowStock";

const Drawer = createDrawerNavigator();

export default function () {
  const { user, setUser } = useUser();

  function logout() {
    setUser(null);
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            icon={(props) => <MaterialIcons {...props} name="logout" />}
            label="Logout"
            onPress={logout}
          />
        </DrawerContentScrollView>
      )}
    >
      {user.role === "SalesManager" ? (
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
            component={PointOfSale}
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
  );
}
