import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Offers from "../screens/Categories/Offers";
import Brands from "../screens/Categories/Brands";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../services/store";
import i18n from "../lang/_i18n";

const Tab = createMaterialTopTabNavigator();

const CategoriesRouter = () => {
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
      <Tab.Screen name={i18n.t("categoriesRouter.name1")} component={Offers} />

      <Tab.Screen name={i18n.t("categoriesRouter.name2")}>
        {() => (
          <Provider store={store}>
            <Brands 
// @ts-ignore
            navigation={ Brands} />
            
          </Provider>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default CategoriesRouter;

const styles = StyleSheet.create({});
