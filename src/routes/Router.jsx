import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QR from "../screens/QR";
import Account from "../screens/Account";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeRouter from "./HomeRouter";
import CategoriesRouter from "./CategoriesRouter";
import MyWalletRouter from "./MyWalletRouter";
import QuestionMark from "../components/QuestionMark";
import Settings from "../components/Settings";
import MapScreen from "../screens/Categories/MapScreen";
import i18n from "../lang/_i18n";

const Tab = createBottomTabNavigator();

const headerTitle = i18n.t("router.headerTitle");

const Router = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen
          name={i18n.t("router.home")}
          component={HomeRouter}
          options={{
            
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="home"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
            headerShown : false,
          }}
        />
        <Tab.Screen
          name={i18n.t("router.categories")}
          component={CategoriesRouter}
          options={{
            headerStyle: {  
              shadowColor : "black",
                elevation: 8,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome
                  name="th-large"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
          }}
        />
        <Tab.Screen
          name={i18n.t("router.qr")}
          component={QR}
          options={{
            headerStyle: {  
              shadowColor : "black",
                elevation: 8,
            },
            headerTitle : headerTitle,
            headerLeft : () => <QuestionMark/>,
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="qrcode"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
          }}
        />
        <Tab.Screen
          name={i18n.t("router.wallet")}
          component={MyWalletRouter}
          options={{
            headerStyle: {  
              shadowColor : "black",
                elevation: 8,
            },
            headerLeft : () => <QuestionMark/>,
            headerRight : () => <Text style = {[{marginRight:20}]}>{i18n.t("router.history")}</Text>,
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="wallet"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
          }}
        />
        <Tab.Screen
          name={i18n.t("router.account")}
          component={Account}
          options={{
            headerStyle: {  
              shadowColor : "black",
                elevation: 8,
            },
            headerRight : () => <Settings/>,
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="user-alt"
                  size={24}
                  color={focused ? "black" : "darkgray"}
                />
              );
            },
            tabBarActiveTintColor: "black",
          }}
        />
        
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
      </Tab.Navigator>
    
  );
};

export default Router;

const styles = StyleSheet.create({});
