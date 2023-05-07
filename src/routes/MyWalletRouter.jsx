import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ParacikBalance from "../screens/MyWallet/ParacikBalance";
import TLBalance from "../screens/MyWallet/TLBalance";
import MyCards from "../screens/MyWallet/MyCards";
import i18n from "../lang/_i18n";

const Tab = createMaterialTopTabNavigator();

const MyWalletRouter = () => {
  const insets = useSafeAreaInsets();
  const tabHeight = 5;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          height: 22,
          borderRightWidth: 1,
          borderRightColor: "lightgrey",
          marginTop: 10,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "black",
          borderBottomWidth: 2,
        },
        tabBarStyle: {
          height: tabHeight + insets.top,
        },
        tabBarLabelStyle: {
          textTransform: "none",
          fontSize: 12,
          bottom: 15,
        },
      }}
    >

      <Tab.Screen name={i18n.t("wallet.paracik")} component={ParacikBalance} />
      <Tab.Screen name={i18n.t("wallet.balance")} component={TLBalance} />
      <Tab.Screen name={i18n.t("wallet.cards")} component={MyCards} />
    </Tab.Navigator>
  );
};

export default MyWalletRouter;

const styles = StyleSheet.create({});